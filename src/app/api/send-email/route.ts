import emailjs from "@emailjs/nodejs";
import { NextRequest, NextResponse } from "next/server";

// Define the request body type
interface EmailRequestBody {
	name: string;
	email: string;
	phone?: string;
	subject: string;
	message: string;
	clientDate?: string;
	clientTime?: string;
	clientYear?: string;
	clientTimezone?: string;
}

// Define error type for EmailJS errors
interface EmailJSError extends Error {
	status?: number;
	text?: string;
}

// Helper function to get ordinal suffix for day
function getOrdinalSuffix(day: number): string {
	if (day > 3 && day < 21) return "th";
	switch (day % 10) {
		case 1:
			return "st";
		case 2:
			return "nd";
		case 3:
			return "rd";
		default:
			return "th";
	}
}

// Helper function to format date as "7th July 2025"
function formatDate(date: Date): string {
	const day = date.getDate();
	const month = date.toLocaleDateString("en-US", { month: "long" });
	const year = date.getFullYear();
	return `${day}${getOrdinalSuffix(day)} ${month} ${year}`;
}

// Helper function to format time as "07:01 PM"
function formatTime(date: Date): string {
	return date.toLocaleTimeString("en-US", {
		hour: "2-digit",
		minute: "2-digit",
		hour12: true,
	});
}

export async function POST(request: NextRequest) {
	try {
		// Parse the request body
		const body: EmailRequestBody = await request.json();

		const {
			name,
			email,
			phone,
			subject,
			message,
			clientDate,
			clientTime,
			clientYear,
			clientTimezone,
		} = body;

		// Validate required fields
		if (!name || !email || !subject || !message) {
			return NextResponse.json(
				{ error: "Missing required fields: name, email, subject, and message are required" },
				{ status: 400 }
			);
		}

		// Validate email format
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailRegex.test(email)) {
			return NextResponse.json({ error: "Invalid email format" }, { status: 400 });
		}

		// Check if environment variables are set
		if (
			!process.env.EMAILJS_SERVICE_ID ||
			!process.env.EMAILJS_TEMPLATE_ID ||
			!process.env.EMAILJS_PUBLIC_KEY ||
			!process.env.EMAILJS_PRIVATE_KEY
		) {
			return NextResponse.json(
				{ error: "Email service is not configured. Please contact the administrator." },
				{ status: 500 }
			);
		}

		// Get current date/time (use client-provided if available)
		const now = new Date();

		// Prepare template parameters
		const templateParams = {
			from_name: name,
			from_email: email,
			phone: phone || "Not provided",
			subject: subject,
			message: message,
			to_name: "Shaheem",
			date: clientDate || formatDate(now),
			time: clientTime || formatTime(now),
			year: clientYear || now.getFullYear().toString(),
			timezone: clientTimezone || "UTC",
		};

		// Send email using EmailJS
		const response = await emailjs.send(
			process.env.EMAILJS_SERVICE_ID,
			process.env.EMAILJS_TEMPLATE_ID,
			templateParams,
			{
				publicKey: process.env.EMAILJS_PUBLIC_KEY,
				privateKey: process.env.EMAILJS_PRIVATE_KEY,
			}
		);

		return NextResponse.json(
			{
				success: true,
				message: "Email sent successfully!",
			},
			{ status: 200 }
		);
	} catch (error: unknown) {
		// Type guard for EmailJS errors
		const emailjsError = error as EmailJSError;

		// Return detailed error in development
		return NextResponse.json(
			{
				error: "An unexpected error occurred while sending the email",
				details:
					process.env.NODE_ENV === "development"
						? {
								message: error instanceof Error ? error.message : "Unknown error",
								status: emailjsError?.status,
								text: emailjsError?.text,
						  }
						: undefined,
			},
			{ status: 500 }
		);
	}
}

// Optional: Add OPTIONS handler for CORS if needed
export async function OPTIONS() {
	return NextResponse.json({}, { status: 200 });
}

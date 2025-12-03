import emailjs from "@emailjs/nodejs";
import { NextRequest, NextResponse } from "next/server";

// Define the request body type
interface EmailRequestBody {
	name: string;
	email: string;
	phone?: string;
	subject: string;
	message: string;
}

// Define error type for EmailJS errors
interface EmailJSError extends Error {
	status?: number;
	text?: string;
}

export async function POST(request: NextRequest) {
	try {
		// Parse the request body
		const body: EmailRequestBody = await request.json();

		const { name, email, phone, subject, message } = body;

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

		// Prepare template parameters
		const templateParams = {
			from_name: name,
			from_email: email,
			phone: phone || "Not provided",
			subject: subject,
			message: message,
			to_name: "Shaheem",
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

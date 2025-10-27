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
			console.error("EmailJS environment variables are not configured");
			return NextResponse.json(
				{ error: "Email service is not configured. Please contact the administrator." },
				{ status: 500 }
			);
		}

		// Send email using EmailJS
		const response = await emailjs.send(
			process.env.EMAILJS_SERVICE_ID,
			process.env.EMAILJS_TEMPLATE_ID,
			{
				from_name: name,
				from_email: email,
				phone: phone || "Not provided",
				subject: subject,
				message: message,
				to_name: "Shaheem", // You can customize this
			},
			{
				publicKey: process.env.EMAILJS_PUBLIC_KEY,
				privateKey: process.env.EMAILJS_PRIVATE_KEY,
			}
		);

		console.log("Email sent successfully:", response);

		return NextResponse.json(
			{
				success: true,
				message: "Email sent successfully!",
			},
			{ status: 200 }
		);
	} catch (error) {
		console.error("Error sending email:", error);

		// Handle specific EmailJS errors
		if (error instanceof Error) {
			return NextResponse.json(
				{
					error: "Failed to send email. Please try again later.",
					details: process.env.NODE_ENV === "development" ? error.message : undefined,
				},
				{ status: 500 }
			);
		}

		return NextResponse.json(
			{ error: "An unexpected error occurred while sending the email" },
			{ status: 500 }
		);
	}
}

// Optional: Add OPTIONS handler for CORS if needed
export async function OPTIONS() {
	return NextResponse.json({}, { status: 200 });
}

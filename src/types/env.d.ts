declare namespace NodeJS {
	interface ProcessEnv {
		// EmailJS Configuration
		EMAILJS_SERVICE_ID: string;
		EMAILJS_TEMPLATE_ID: string;
		EMAILJS_PUBLIC_KEY: string;
		EMAILJS_PRIVATE_KEY: string;

		// Node Environment
		NODE_ENV: "development" | "production" | "test";
	}
}

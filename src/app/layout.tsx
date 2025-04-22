// src/app/layout.tsx

import "./globals.css";
import type {Metadata} from "next";
import {Inter as FontSans} from "next/font/google";
import {cn} from "@/lib/utils";
import {ThemeProvider} from "@/components/theme-provider";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const fontSans = FontSans({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata: Metadata = {
    title: "Shaheem PP | Backend-Focused Full Stack Developer",
    description:
        "Explore the portfolio of Shaheem PP, a backend-focused full stack developer skilled in Django, React, TypeScript, and cloud technologies. Discover scalable solutions and impactful projects.",
    keywords: [
        "Shaheem PP",
        "Full Stack Developer",
        "Backend Developer",
        "Django Developer",
        "React Developer",
        "TypeScript Developer",
        "Web Developer",
        "Next.js Portfolio",
        "PostgreSQL",
        "PostGIS",
        "Cloud Deployment",
        "Software Engineer",
        "Toronto Developer"
    ],
    authors: [{name: "Shaheem PP", url: "https://shaheem.dev"}],
    creator: "Shaheem PP",
    generator: "Next.js",
    metadataBase: new URL("https://shaheem.dev"),
    icons: {
        icon: "/image/sLogo.svg",
        shortcut: "/image/sLogo.svg",
        apple: "/image/sLogo.svg"
    },
    openGraph: {
        title: "Shaheem PP | Full Stack Developer",
        description:
            "Hi, I'm Shaheem — a backend-focused full stack developer passionate about efficient systems, intuitive apps, and community impact. View my work, resume, and get in touch.",
        url: "https://shaheem.dev",
        siteName: "shaheem.dev",
        images: [
            {
                url: "/image/Banner with Blur Highlights.png",
                width: 1200,
                height: 630,
                alt: "Shaheem PP Portfolio Banner"
            }
        ],
        locale: "en_CA",
        type: "website"
    },
    twitter: {
        card: "summary_large_image",
        title: "Shaheem PP | Full Stack Developer",
        description:
            "Portfolio of Shaheem PP — full stack developer specializing in Django, React, TypeScript, and scalable backend systems.",
        creator: "@shaheem_pp", // Update if you create a Twitter handle
        images: ["/image/Banner with Blur Highlights.png"]
    }
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
        <body
            className={cn(
                "min-h-screen bg-background font-sans antialiased",
                fontSans.variable
            )}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            <div className="flex min-h-screen flex-col">
                <Navbar/>
                <main className="flex-1">{children}</main>
                <Footer/>
            </div>
        </ThemeProvider>
        </body>
        </html>
    );
}

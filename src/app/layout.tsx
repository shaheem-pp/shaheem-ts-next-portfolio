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
    title: "Shaheem PP | Full Stack Developer",
    description: "Shaheem PP is a backend-focused full-stack developer specializing in Django, React, and cloud technologies, building scalable and efficient web applications.",
    keywords: ["Shaheem PP", "Full Stack Developer", "Django Developer", "React Developer", "Web Developer", "Portfolio"],
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

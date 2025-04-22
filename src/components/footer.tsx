"use client";

import Link from "next/link";
import {Github, Linkedin, Mail} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="border-t bg-background">
            <div className="container py-8 md:py-12">
                <div className="flex flex-col items-center gap-6 md:flex-row md:justify-between">
                    <div className="flex flex-col gap-2 text-center md:text-left">
                        <Link href="/" className="text-lg font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                shaheem.dev
              </span>
                        </Link>
                        <p className="text-sm text-muted-foreground">
                            Backend-focused Full Stack Developer
                        </p>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="https://github.com/shaheem-pp"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="GitHub"
                            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                            <Github className="h-5 w-5"/>
                        </Link>
                        <Link
                            href="https://www.linkedin.com/in/shaheem-pp/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                            <Linkedin className="h-5 w-5"/>
                        </Link>
                        <Link
                            href="mailto:mail@shaheem.dev"
                            aria-label="Email"
                            className="rounded-full p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                        >
                            <Mail className="h-5 w-5"/>
                        </Link>
                    </div>
                </div>
                <div className="mt-8 border-t pt-6 text-center text-sm text-muted-foreground">
                    <p>© {currentYear} shaheem.dev. All rights reserved.</p>
                    <p className="mt-2 text-xs">
                        Made with ❤️ using Next.js & Tailwind CSS
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

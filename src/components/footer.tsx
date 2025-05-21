"use client";

import Link from "next/link";
import {useEffect, useState} from "react";

const footerMessages = [
    "You've reached the bottom. There's nothing more.",
    "That's it. No secrets here.",
    "End of page. Beginning of reflection?",
    "No post-credit scene. Just silence.",
    "Here lies the last line.",
    "Mischief managed.",
    "There’s no reward for scrolling. But thanks.",
    "This is Berk. And this is the end of it.",
];

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [randomMessage, setRandomMessage] = useState<string | null>(null);
    const [hovered, setHovered] = useState(false);

    // Ensure this only runs on the client
    useEffect(() => {
        const index = Math.floor(Math.random() * footerMessages.length);
        setRandomMessage(footerMessages[index]);
    }, []);

    return (
        <footer
            className="bg-neutral-50 text-muted-foreground text-center text-sm py-12 select-none transition-colors duration-300"
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <div className="flex justify-center items-center flex-wrap gap-4 px-4">
                <Link href="/" className="font-semibold tracking-wide hover:underline">
                    shaheem.dev
                </Link>

                <span className="text-gray-300">/</span>

                <span>
          {hovered
              ? "Looking for the footer? 👀"
              : `© ${currentYear} shaheem.dev`}
        </span>
            </div>

            {/* Only render once randomMessage is set (after client mount) */}
            <div className="mt-4 h-5">
                {randomMessage && (
                    <p
                        className={`text-xs italic text-gray-400 transition-opacity duration-300 ${
                            hovered ? "opacity-100" : "opacity-0"
                        }`}
                    >
                        {randomMessage}
                    </p>
                )}
            </div>
        </footer>
    );
};

export default Footer;
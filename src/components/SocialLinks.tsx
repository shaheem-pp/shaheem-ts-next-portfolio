// src/components/SocialLinks.tsx

import { ExternalLink, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function SocialLinks() {
  return (
    <div className="flex items-center gap-4 mt-4">
      <Link
        href="https://github.com/shaheem-pp"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground"
      >
        <Github className="h-5 w-5" />
        <span className="sr-only">GitHub</span>
      </Link>
      <Link
        href="https://www.linkedin.com/in/shaheem-pp/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground"
      >
        <Linkedin className="h-5 w-5" />
        <span className="sr-only">LinkedIn</span>
      </Link>
      <Link
        href="mailto:mail@shaheem.dev"
        className="text-muted-foreground hover:text-foreground"
      >
        <Mail className="h-5 w-5" />
        <span className="sr-only">Email</span>
      </Link>
      <Link
        href="https://socials.shaheem.dev/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-muted-foreground hover:text-foreground"
      >
        <ExternalLink className="h-5 w-5" />
        <span className="sr-only">Socials</span>
      </Link>
    </div>
  );
}

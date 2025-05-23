"use client";

import Link from "next/link";
import {usePathname} from "next/navigation";
import {useState} from "react";
import {Menu} from "lucide-react";

import {ModeToggle} from "@/components/mode-toggle";
import {Button} from "@/components/ui/button";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger,} from "@/components/ui/sheet";
import {cn} from "@/lib/utils";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const links = [
        {name: "Home", href: "/"},
        {name: "About", href: "/about"},
        {name: "Projects", href: "/projects"},
        {name: "Resume", href: "/resume"},
        {name: "Contact", href: "/contact"},
    ];

    return (
        <header
            className="sticky top-0 z-50 w-full border-b bg-background/75 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-16 items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
          <span
              className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
            shaheem.dev
          </span>
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center gap-2">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "text-sm font-medium px-3 py-2 rounded-md transition-all duration-200",
                                    isActive
                                        ? "text-primary bg-muted/60"
                                        : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                                )}
                            >
                                {link.name}
                            </Link>
                        );
                    })}
                    <ModeToggle/>
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center">
                    <ModeToggle/>
                    <Sheet open={isOpen} onOpenChange={setIsOpen}>
                        <SheetTrigger asChild>
                            <Button
                                variant="ghost"
                                size="icon"
                                className="ml-2"
                                aria-label="Menu"
                            >
                                <Menu className="h-5 w-5"/>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="right">
                            <SheetHeader>
                                <SheetTitle>
                  <span
                      className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-transparent bg-clip-text">
                    shaheem.dev
                  </span>
                                </SheetTitle>
                                <SheetDescription>
                                    Product Engineer · Building systems that power real products
                                </SheetDescription>
                            </SheetHeader>
                            <div className="grid gap-2 py-6">
                                {links.map((link) => {
                                    const isActive = pathname === link.href;
                                    return (
                                        <Link
                                            key={link.name}
                                            href={link.href}
                                            className={cn(
                                                "text-base font-medium px-3 py-2 rounded-md transition-all duration-200",
                                                isActive
                                                    ? "text-primary bg-muted/60"
                                                    : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                                            )}
                                            onClick={() => setIsOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
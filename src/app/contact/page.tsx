import {Button} from "@/components/ui/button";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Github, Linkedin, Mail, MapPin} from "lucide-react";
import Link from "next/link";

export const metadata = {
    title: "Contact | Shaheem PP",
    description: "Get in touch with me for collaborations, job opportunities, or just to say hello.",
};

export default function ContactPage() {
    const contactInfo = [
        {
            icon: <Mail className="h-5 w-5"/>,
            title: "Email",
            value: "mail@shaheem.dev",
            link: "mailto:mail@shaheem.dev",
        },
        {
            icon: <Linkedin className="h-5 w-5"/>,
            title: "LinkedIn",
            value: "linkedin.com/in/shaheem-pp",
            link: "https://www.linkedin.com/in/shaheem-pp/",
        },
        {
            icon: <Github className="h-5 w-5"/>,
            title: "GitHub",
            value: "github.com/shaheem-pp",
            link: "https://github.com/shaheem-pp",
        },
        {
            icon: <MapPin className="h-5 w-5"/>,
            title: "Location",
            value: "Toronto, ON, Canada",
            link: null,
        }
    ];

    return (
        <>
            <section className="py-12 md:py-16 bg-muted/30">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                                Get In Touch
                            </h1>
                            <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                                Let's discuss how we can work together
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16">
                <div className="container px-4 md:px-6">
                    <div className="mx-auto grid max-w-5xl items-start gap-8 lg:grid-cols-2">
                        <div className="grid gap-6">
                            <div>
                                <h2 className="text-2xl font-bold tracking-tighter mb-4">
                                    Contact Information
                                </h2>
                                <p className="text-muted-foreground mb-8">
                                    Feel free to reach out to me through any of these channels. I'm always open to
                                    discussing new projects, creative ideas, or opportunities to be part of your vision.
                                </p>
                            </div>
                            <div className="grid gap-4">
                                {contactInfo.map((contact, index) => (
                                    <Card key={index}>
                                        <CardContent className="p-6 flex items-center gap-4">
                                            <div
                                                className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                                                {contact.icon}
                                            </div>
                                            <div>
                                                <div className="font-medium">{contact.title}</div>
                                                {contact.link ? (
                                                    <Link
                                                        href={contact.link}
                                                        target={contact.link.startsWith("http") ? "_blank" : undefined}
                                                        rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                                                        className="text-sm text-primary hover:underline"
                                                    >
                                                        {contact.value}
                                                    </Link>
                                                ) : (
                                                    <div className="text-sm text-muted-foreground">
                                                        {contact.value}
                                                    </div>
                                                )}
                                            </div>
                                        </CardContent>
                                    </Card>
                                ))}
                            </div>
                        </div>

                        <div>
                            <Card>
                                <CardHeader>
                                    <CardTitle>Send Me a Message</CardTitle>
                                    <CardDescription>
                                        Fill out the form below and I'll get back to you as soon as possible.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="grid gap-4">
                                        <div className="grid gap-2">
                                            <label htmlFor="name" className="text-sm font-medium leading-none">
                                                Name
                                            </label>
                                            <input
                                                id="name"
                                                type="text"
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                placeholder="Your name"
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <label htmlFor="email" className="text-sm font-medium leading-none">
                                                Email
                                            </label>
                                            <input
                                                id="email"
                                                type="email"
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                placeholder="your.email@example.com"
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <label htmlFor="subject" className="text-sm font-medium leading-none">
                                                Subject
                                            </label>
                                            <input
                                                id="subject"
                                                type="text"
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                placeholder="Subject"
                                            />
                                        </div>
                                        <div className="grid gap-2">
                                            <label htmlFor="message" className="text-sm font-medium leading-none">
                                                Message
                                            </label>
                                            <textarea
                                                id="message"
                                                className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                                placeholder="Your message"
                                            />
                                        </div>
                                        <Button type="submit" className="w-full">
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

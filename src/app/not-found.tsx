import {Button} from "@/components/ui/button";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="container flex h-[80vh] flex-col items-center justify-center">
            <div className="mx-auto flex max-w-[700px] flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                    <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">404 - Page Not Found</h1>
                    <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                        The page you're looking for doesn't exist or has been moved.
                    </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Link href="/">
                        <Button size="lg">
                            Go back home
                        </Button>
                    </Link>
                    <Link href="/contact">
                        <Button variant="outline" size="lg">
                            Contact me
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}

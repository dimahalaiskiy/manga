import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home(): JSX.Element {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <h1 className="text-4xl font-bold">Welcome to Next.js Application</h1>
        <p className="text-lg text-muted-foreground">
          A modern Next.js application with authentication and best practices
        </p>
        <Link href="/login">
          <Button size="lg">Get Started</Button>
        </Link>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";

export function Header(): JSX.Element {
  const { data: session, status } = useSession();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="font-bold">{siteConfig.name}</span>
        </Link>

        <nav className="flex items-center space-x-4">
          {status === "loading" ? (
            <Button variant="ghost" disabled>
              Loading...
            </Button>
          ) : session ? (
            <>
              <Link href="/dashboard">
                <Button variant="ghost">Dashboard</Button>
              </Link>
              <Button
                variant="outline"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Link href="/login">
              <Button>Sign In</Button>
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

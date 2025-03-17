export function Footer(): JSX.Element {
  return (
    <footer className="border-t">
      <div className="container flex h-16 items-center">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Next.js Application. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

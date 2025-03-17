import { LoginForm } from "@/components/forms/login-form";

export default function LoginPage(): JSX.Element {
  return (
    <div className="container flex h-[calc(100vh-4rem)] items-center justify-center">
      <LoginForm />
    </div>
  );
}

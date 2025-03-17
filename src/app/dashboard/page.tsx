import { getServerSession } from "next-auth";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default async function DashboardPage() {
  const session = await getServerSession();

  if (!session?.user) {
    return <div>No user data</div>;
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <CardHeader>
          <CardTitle>User Profile</CardTitle>
        </CardHeader>
        <CardContent className="space-y-8">
          {session.user.image && (
            <div className="flex justify-left">
              <Image
                src={session.user.image}
                alt={session.user.name || "User avatar"}
                width={40}
                height={40}
                className="rounded-full"
                priority
              />
            </div>
          )}
          <div className="space-y-4">
            <div className="grid gap-2">
              <p className="text-sm font-medium">Name</p>
              <p className="text-lg">{session.user.name || "N/A"}</p>
            </div>
            <div className="grid gap-2">
              <p className="text-sm font-medium">Email</p>
              <p className="text-lg">{session.user.email || "N/A"}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

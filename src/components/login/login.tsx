"use client";

import { Globe, UserRound } from "lucide-react";

import { Button } from "~/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "~/components/ui/card";
import { Input } from "~/components/ui/input";
import { Label } from "~/components/ui/label";
import { useRouter } from "next/navigation";

export default function Login() {
  const router = useRouter();

  return (
    // <section className='py-32'>
    <section className="py-48">
      {/* <div className='container'> */}
      <div>
        <div className="flex flex-col gap-4">
          <img
            src="https://shadcnblocks.com/images/block/logos/shadcn-ui-wordmark.svg"
            alt="logo"
            className="h-8"
          />
          <Card className="mx-auto w-full max-w-md">
            <CardHeader className="items-center">
              <UserRound className="bg-accent text-muted-foreground size-10 rounded-full p-2.5" />
              <CardTitle className="text-xl">Log in with your email</CardTitle>
              <CardDescription>Enter your information to login</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-4">
                <Button variant="outline" className="w-full">
                  <Globe className="mr-2 size-4" />
                  Sign up with Google
                </Button>
                <div className="flex items-center gap-4">
                  <span className="bg-input h-px w-full"></span>
                  <span className="text-muted-foreground text-xs">OR</span>
                  <span className="bg-input h-px w-full"></span>
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="m@example.com"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <div className="flex justify-between">
                    <Label htmlFor="password">Password</Label>
                    <a href="#" className="text-sm underline">
                      Forgot password
                    </a>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full"
                  onClick={() => router.push("/dashboard")}
                >
                  Log in
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className="mx-auto flex gap-1 text-sm">
            <p>Don&apos;t have an account yet?</p>
            <a href="#" className="underline">
              Log in
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

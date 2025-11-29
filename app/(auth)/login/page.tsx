"use client";
import { AppWindowIcon, CodeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Tabs,
  TabsContent,
  TabsContents,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/animate/tabs";
import { ArrowRight, Facebook, GoogleCircle, X } from "iconoir-react";
import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import LoginCard from "@/components/login-card";
import RegisterCard from "@/components/register-card";

export default function LoginPage() {
  return (
    <div className="flex w-full max-w-2xl flex-col h-screen font-sans overflow-hidden">
      <Tabs
        defaultValue="login"
        className="p-6 bg-secondary/10 rounded-4xl m-4 mb-0 z-10"
      >
        <TabsList className="w-full bg-background px-2 py-6 rounded-full">
          <TabsTrigger
            value="login"
            className="data-[state=active]:bg-[#252F2C] data-[state=active]:text-secondary-foreground text-xs h-8 rounded-full"
          >
            Login
          </TabsTrigger>
          <TabsTrigger
            value="signup"
            className="data-[state=active]:bg-[#252F2C] data-[state=active]:text-secondary-foreground text-xs h-8 rounded-full"
          >
            Sign Up
          </TabsTrigger>
        </TabsList>
        <TabsContents>
          <TabsContent value="login">
            <LoginCard />
          </TabsContent>
          <TabsContent value="signup">
            <RegisterCard />
          </TabsContent>
        </TabsContents>
      </Tabs>
      <div className="w-full h-full md:h-fit p-4 ">
        <Card className="h-fit bg-secondary dark:bg-accent  p-6 flex flex-col gap-2 rounded-4xl">
          <CardHeader className="p-0 ">
            <CardTitle className="text-background font-4xl p-0 dark:text-accent-foreground">
              Or better yet..
            </CardTitle>
            <CardDescription className="text-background p-0 dark:text-accent-foreground">
              Continue with
            </CardDescription>
          </CardHeader>
          <CardContent className="grid grid-cols-3 gap-4 p-0">
            <Button
              size={"icon-lg"}
              className="w-full h-14 rounded-full bg-[#EBEBE6] hover:bg-primary transition-all duration-300"
            >
              <GoogleCircle />
            </Button>
            <Button
              size={"icon-lg"}
              className="w-full h-14 rounded-full bg-[#EBEBE6] hover:bg-primary transition-all duration-300"
            >
              <Facebook />
            </Button>
            <Button
              size={"icon-lg"}
              className="w-full h-14 rounded-full bg-[#EBEBE6] hover:bg-primary transition-all duration-300"
            >
              <X />
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

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
import { Checkbox } from "./ui/checkbox";
import Link from "next/link";
import { ArrowRight } from "iconoir-react";
import { useState } from "react";

const LoginCard = () => {
  const [emailLoginFocused, setEmailLoginFocused] = useState(false);
  const [passwordLoginFocused, setPasswordLoginFocused] = useState(false);
  const [emailLoginValue, setEmailLoginValue] = useState("");
  const [passwordLoginValue, setPasswordLoginValue] = useState("");

  const handleEmailLoginFocus = (focus: string, value: string) => {
    setEmailLoginFocused(true);
    console.log(focus, value);
  };

  const handlePasswordLoginFocus = (focus: string, value: string) => {
    setPasswordLoginFocused(true);
    console.log(focus, value);
  };

  const focusLoginReset = () => {
    setEmailLoginFocused(false);
    setPasswordLoginFocused(false);
  };

  return (
    <Card className="flex flex-col gap-4 justify-start p-0 bg-transparent border-none shadow-none transition-all duration-200 ease-in-out">
      <CardHeader className="p-0 mt-4 flex flex-col gap-0">
        <CardDescription className="font-light text-muted-foreground">
          Welcome Back!
        </CardDescription>
        <CardTitle className="text-4xl font-normal">Login</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-0 p-0 m-0.5">
        <div className="grid gap-1">
          <Label
            htmlFor="email"
            className={`relative top-10 left-4 text-base text-muted-foreground/50 transition-all duration-200
          ${emailLoginFocused || emailLoginValue !== "" ? "top-0 left-0 text-sm" : ""}`}
          >
            Email
          </Label>
          <Input
            id="email"
            className=""
            onFocus={(ev) => handleEmailLoginFocus("email", ev.target.value)}
            onBlur={() => focusLoginReset()}
            onChange={(ev) => setEmailLoginValue(ev.target.value)}
          />
        </div>
        <div className="grid gap-1">
          <Label
            htmlFor="password"
            className={`relative top-10 left-4 text-base text-muted-foreground/50 transition-all duration-200
        ${passwordLoginFocused || passwordLoginValue !== "" ? "top-0 left-0 text-sm" : ""}`}
          >
            Password
          </Label>
          <Input
            id="password"
            type="password"
            onFocus={(ev) =>
              handlePasswordLoginFocus("password", ev.target.value)
            }
            onBlur={() => focusLoginReset()}
            onChange={(ev) => setPasswordLoginValue(ev.target.value)}
          />
        </div>
        <div className="mt-6 flex flex-row justify-between items-center">
          <span className="flex flex-row gap-2 items-center text-muted-foreground  text-sm">
            <Checkbox /> Remember Me
          </span>
          <Link
            href="/auth/forgot-password"
            className="font-medium text-sm hover:underline"
          >
            Forgot Password?
          </Link>
        </div>
      </CardContent>
      <CardFooter className="p-0 w-full">
        <Button size={"lg"} className="w-full">
          Let's Roll!
          <ArrowRight />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LoginCard;

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

const RegisterCard = () => {
  const [emailRegisterFocused, setEmailRegisterFocused] = useState(false);
  const [passwordRegisterFocused, setPasswordRegisterFocused] = useState(false);
  const [confirmPasswordFocused, setConfirmPasswordFocused] = useState(false);

  const [emailRegisterValue, setEmailRegisterValue] = useState("");
  const [passwordRegisterValue, setPasswordRegisterValue] = useState("");
  const [confirmPasswordValue, setConfirmPasswordValue] = useState("");

  const handleEmailRegisterFocus = (focus: string, value: string) => {
    setEmailRegisterFocused(true);
    console.log(focus, value);
  };

  const handlePasswordRegisterFocus = (focus: string, value: string) => {
    setPasswordRegisterFocused(true);
    console.log(focus, value);
  };

  const handleConfirmPasswordFocus = (focus: string, value: string) => {
    setConfirmPasswordFocused(true);
    console.log(focus, value);
  };

  const focusRegisterReset = () => {
    setEmailRegisterFocused(false);
    setPasswordRegisterFocused(false);
    setConfirmPasswordFocused(false);
  };

  return (
    <Card className="p-0 bg-transparent border-none flex flex-col gap-4 justify-start shadow-none transition-all duration-200 ease-in-out">
      <CardHeader className="p-0 mt-4 -mb-6">
        <CardTitle className="text-4xl font-normal p-0">Sign Up</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-0 p-0 m-0.5">
        <div className="grid gap-0">
          <Label
            htmlFor="email"
            className={`relative top-9 left-4 text-base text-muted-foreground/50 transition-all duration-200 w-3
          ${emailRegisterFocused || emailRegisterValue !== "" ? "top-0 left-0 text-sm" : ""}`}
          >
            Email
          </Label>
          <Input
            id="email"
            className=""
            onFocus={(ev) => handleEmailRegisterFocus("email", ev.target.value)}
            onBlur={() => focusRegisterReset()}
            onChange={(ev) => setEmailRegisterValue(ev.target.value)}
          />
        </div>
        <div className="grid gap-1">
          <Label
            htmlFor="password"
            className={`relative top-10 left-4 text-base text-muted-foreground/50 transition-all duration-200 w-1 z-0
        ${passwordRegisterFocused || passwordRegisterValue !== "" ? "top-0 left-0 text-sm" : ""}`}
          >
            Password
          </Label>
          <Input
            id="password"
            type="password"
            onFocus={(ev) =>
              handlePasswordRegisterFocus("password", ev.target.value)
            }
            onBlur={() => focusRegisterReset()}
            onChange={(ev) => setPasswordRegisterValue(ev.target.value)}
          />
        </div>
        <div className="grid gap-1">
          <Label
            htmlFor="confirm-password"
            className={`relative top-10 left-4 text-base text-muted-foreground/50 transition-all duration-200
        ${confirmPasswordFocused || confirmPasswordValue !== "" ? "top-0 left-0 text-sm" : ""}`}
          >
            Confirm Password
          </Label>
          <Input
            id="confirm-password"
            type="password"
            onFocus={(ev) =>
              handleConfirmPasswordFocus("confirmPassword", ev.target.value)
            }
            onBlur={() => focusRegisterReset()}
            onChange={(ev) => setConfirmPasswordValue(ev.target.value)}
          />
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

export default RegisterCard;

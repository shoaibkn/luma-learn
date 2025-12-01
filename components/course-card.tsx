"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "iconoir-react";
import Image from "next/image";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/animate-ui/components/radix/popover";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import CourseCardDetails from "./course-card-details";

interface RadixPopoverDemoProps {
  side?: "top" | "bottom" | "left" | "right";
  sideOffset?: number;
  align?: "start" | "center" | "end";
  alignOffset?: number;
}

const CourseCard = () => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <Card className="min-w-60 p-0">
      <CardContent className="p-0 flex flex-col gap-0">
        <div className="">
          <Image
            src="/images/32.jpeg"
            alt="image"
            width={240}
            height={240}
            className="object-cover rounded-t-xl"
          />
          <Badge className="relative bottom-8 left-36 text-secondary-foreground bg-secondary">
            4/12 Videos
          </Badge>
        </div>

        <div className="px-2 w-60">
          <h1>Course Title</h1>
          <p className="text-sm text-muted-foreground">
            Course Description Some Other things
          </p>
        </div>
        <div className="flex flex-row justify-between px-2 pb-2 items-end w-60">
          <span className="flex flex-row gap-0">
            <Star width={16} className="fill-amber-300" />
            <Star width={16} className="fill-amber-300" />
            <Star width={16} className="fill-amber-300" />
            <Star width={16} className="fill-amber-300" />
            <Star width={16} />
          </span>
          <CourseCardDetails />
        </div>
      </CardContent>
    </Card>
  );
};

export default CourseCard;

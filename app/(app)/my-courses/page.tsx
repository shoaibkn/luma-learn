"use client";
import { generateRoadmap } from "@/app/actions/open-ai";
import { fetchYouTubeVideos } from "@/app/actions/youtube";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/animate-ui/components/radix/dialog";
import {
  DialogFlipDirection,
  DialogOverlay,
  DialogPortal,
} from "@/components/animate-ui/primitives/radix/dialog";
import CourseCard from "@/components/course-card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { generateOpenAIPrompt } from "@/lib/openai";
import { Plus, PlusCircle, Star, X } from "iconoir-react";
import Image from "next/image";
import { useState } from "react";

export default function MyCoursesPage() {
  const [topic, setTopic] = useState("");

  const handlePrompt = async () => {
    if (!topic) {
      console.log("Please enter a topic");
      return;
    }

    const data = await generateRoadmap(topic);
    console.log(data.stages[0].skills);

    // const youtubeData = await fetchYouTubeVideos(data.stages[0].skills);
    const youtubeData = await fetchYouTubeVideos([
      "linux basics",
      "shell commands",
      "unix",
    ]);
    console.log(youtubeData);
  };

  return (
    <main className="p-4 font-sans mb-48">
      <div className="flex flex-row justify-between">
        <h1>My Courses</h1>

        <Dialog>
          <DialogTrigger
            className="bg-primary text-primary-foreground px-4 py-2 text-sm"
            asChild
          >
            <Button size={"lg"} className="rounded-full">
              <PlusCircle />
              Create New
            </Button>
          </DialogTrigger>

          <DialogPortal>
            <DialogOverlay className="fixed inset-0 z-50 bg-black/80" />
            <DialogContent
              from="right"
              className="sm:max-w-md fixed left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%] z-50 border bg-background p-6"
            >
              <DialogHeader>
                <DialogTitle className="text-lg">Terms of Service</DialogTitle>
                <DialogDescription className="text-sm">
                  Please read the following terms of service carefully.
                </DialogDescription>
              </DialogHeader>

              <p className="py-4 text-sm text-muted-foreground">
                <Input
                  type="text"
                  placeholder="Enter your path"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </p>

              <DialogFooter>
                <Button
                  className="bg-primary text-primary-foreground px-4 py-2 text-sm"
                  onClick={() => handlePrompt()}
                >
                  Accept
                </Button>
              </DialogFooter>

              <DialogClose className="absolute top-4 right-4">
                <X className="size-4" />
                <span className="sr-only">Close</span>
              </DialogClose>
            </DialogContent>
          </DialogPortal>
        </Dialog>
      </div>

      <section>
        <div className="flex flex-row gap-4 max-w-screen overflow-x-auto overflow-y-hidden">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </section>
      <section className="mt-12">
        <div className="flex flex-row gap-4 max-w-screen overflow-x-auto">
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </section>
    </main>
  );
}

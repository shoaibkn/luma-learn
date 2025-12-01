import { FullScreenCourse } from "@/components/fullScreenCourse";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import YourCourseCard from "@/components/your-course-card";
import YourCardCarousel from "@/components/YourCourseCarousel";
import { Home } from "iconoir-react";
import { Play } from "iconoir-react/regular";
import Image from "next/image";

export default function Dashboard() {
  return (
    <main className="p-4 font-sans mb-48">
      <section>
        <h1 className="font-sans text-3xl mb-4 px-2">Featured</h1>
        <div className="">
          <YourCardCarousel />
        </div>
        <section>
          <h1 className="font-sans text-3xl mb-4 px-2">Your Courses</h1>
          <div className="w-full overflow-scroll">
            <Card className="w-full h-48 p-0">
              <CardContent className="items-center flex flex-row gap-2 p-2">
                <div className="">
                  <Image
                    className="object-contain rounded-2xl"
                    src="/images/13.jpeg"
                    alt="Course Image"
                    width={150}
                    height={150}
                  />
                </div>
                <div>
                  <div className="flex flex-row justify-between">
                    <div className="flex flex-col gap-1">
                      <h1 className="text-base">
                        Course Title with a long name
                      </h1>
                      <p className="text-xs text-muted-foreground">
                        Course Description that is supposed to be a much longer
                        text
                      </p>
                    </div>
                    <Button size={"icon"} className="rounded-full">
                      <Play />
                    </Button>
                  </div>
                  <Progress value={25} className="h-1" />
                </div>
              </CardContent>
            </Card>
            <Card className="w-96 h-48">
              <CardContent>
                <div className="bg-gray-400"></div>
              </CardContent>
            </Card>
          </div>
        </section>
      </section>
    </main>
  );
}

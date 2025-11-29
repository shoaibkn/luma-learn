import { Card } from "@/components/ui/card";
import YourCourseCard from "@/components/your-course-card";
import { Home } from "iconoir-react";

export default function Dashboard() {
  return (
    <main className="p-4 font-sans">
      <h3>Welcome back</h3>
      <h1 className="text-3xl">Shoaib</h1>
      {/**Continue your course */}
      <section className="mt-4">
        <h1 className="mb-2 font-sans text-sm font-light">
          Continue where you left
        </h1>
        <Card className="flex flex-row gap-4 rounded-4xl p-4 h-48 bg-[#465A54] overflow-auto w-full">
          <YourCourseCard />
          <YourCourseCard />
          <YourCourseCard />
        </Card>
      </section>
    </main>
  );
}

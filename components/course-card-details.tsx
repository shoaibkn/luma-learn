import {
  ExpandableScreen,
  ExpandableScreenContent,
  ExpandableScreenTrigger,
} from "@/components/ui/expandable-screen";
import { Button } from "./ui/button";

export default function CourseCardDetails() {
  return (
    <ExpandableScreen
      layoutId="cta-card"
      triggerRadius="200px"
      contentRadius="24px"
    >
      <ExpandableScreenTrigger>
        <Button size="sm" className="text-xs">
          Continue
        </Button>
      </ExpandableScreenTrigger>

      <ExpandableScreenContent className="bg-primary">
        <div className="flex h-full items-center justify-center p-8">
          <h2 className="text-4xl text-primary-foreground">
            Full Screen Content
          </h2>
        </div>
      </ExpandableScreenContent>
    </ExpandableScreen>
  );
}

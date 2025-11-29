import { ArrowLeft, User } from "iconoir-react";
import { Button } from "../ui/button";
import { ModeToggle } from "../theme-toggle";

const Header = () => {
  return (
    <header className="p-4 mt-4">
      <nav className="flex flex-row justify-between items-center">
        <span className="flex flex-row gap-2 items-center">
          <Button
            variant={"secondary"}
            size={"icon-lg"}
            className="px-8 py-4 rounded-full bg-[#EBEBE6] dark:bg-accent dark:text-accent-foreground hover:bg-primary/50 dark:hover:bg-primary/80
            text-primary-foreground"
          >
            <ArrowLeft />
          </Button>
          <h1 className="font-sans font-medium">Heading Here</h1>
        </span>
        {/*<Button
          variant={"secondary"}
          size={"icon-lg"}
          className="px-8 py-4 rounded-full bg-[#EBEBE6] hover:bg-primary/50 text-primary-foreground"
        >
          <User />
        </Button>*/}
        <ModeToggle />
      </nav>
    </header>
  );
};

export default Header;

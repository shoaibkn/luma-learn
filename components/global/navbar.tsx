"use client";
import { Home } from "lucide-react";
import { Button } from "../ui/button";
import { Book, GraphUp, RssFeed } from "iconoir-react";
import { HomeAlt, Plus } from "iconoir-react/regular";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <div className="w-full fixed bottom-0 left-0 right-0 flex flex-row justify-center md:justify-end ">
      <nav
        className="gap-1 bg-accent m-4 rounded-full h-18  shadow-xl w-full
    flex flex-row p-4 justify-between items-center align-middle transition-colors duration-700 md:w-96"
      >
        <Link href="/dashboard">
          <Button
            variant={"ghost"}
            className={`px-8 rounded-full hover:bg-primary/40 dark:hover:bg-primary/40 ${pathName.startsWith("/dashboard") && "bg-primary/40"} `}
            size="icon-lg"
          >
            <Home height={48} width={48} />
          </Button>
        </Link>
        <Link href="/my-courses">
          <Button
            variant={"ghost"}
            className={`px-8 rounded-full hover:bg-primary/40 dark:hover:bg-primary/40 ${pathName.startsWith("/my-courses") && "bg-primary/40"} `}
            size="icon-lg"
          >
            <Book />
          </Button>
        </Link>
        {/*<Button
      className="px-8 rounded-full bg-[#252F2C] dark:bg-accent-foreground text-card dark:text-accent"
      size="icon-lg"
    >
      <Plus />
    </Button>*/}
        <Link href="/leaderboards">
          <Button
            variant={"ghost"}
            className={`px-8 rounded-full hover:bg-primary/40 dark:hover:bg-primary/40 ${pathName.startsWith("/leaderboards") && "bg-primary/40"} `}
            size="icon-lg"
          >
            <GraphUp />
          </Button>
        </Link>
        <Link href="/feed">
          <Button
            variant={"ghost"}
            className={`px-8 rounded-full hover:bg-primary/40 dark:hover:bg-primary/40 ${pathName.startsWith("/feed") && "bg-primary/40"} `}
            size="icon-lg"
          >
            <RssFeed />
          </Button>
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;

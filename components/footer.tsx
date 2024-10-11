import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";

export default function Footer() {
  return (
    <NavigationMenu className="mx-auto">
      <Link
        href="https://github.com/krisppyy/deadlocked"
        target="_blank"
        rel="noopener noreferrer"
      >
        <NavigationMenuLink>
          <img
            src="github-icon-2048x2048-823jqxdr.png"
            alt="icon"
            className="py-1 h-10 w-8"
          ></img>
        </NavigationMenuLink>
      </Link>
    </NavigationMenu>
  );
}

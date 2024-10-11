"use client";

import * as React from "react";
import Link from "next/link";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { ModeToggle } from "./mode-toggle";

export function Navbar() {
  return (
    <NavigationMenu className="flex items-center justify-between w-full p-auto">
      <NavigationMenuList className="flex items-center space-x-4">
        <NavigationMenuItem>
          <Link href="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <img
                src="Valve_Deadlock_icon.png"
                alt="icon"
                className="size-10 transition-transform duration-300 group-hover:scale-110 group-focus:scale-110"
              />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/characters" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="hover:scale-110 focus:scale-110 transition-transform duration-300">
                Characters
              </p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/items-page" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <p className="hover:scale-110 focus:scale-110 transition-transform duration-300">
                Items
              </p>
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>

      <div className="ml-8">
        <ModeToggle />
      </div>
    </NavigationMenu>
  );
}

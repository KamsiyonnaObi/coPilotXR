"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { navLinks } from "@/src/app/constants";

import { Button } from "@/shadcn/components/ui/button";
import Notification from "./Notification";

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image
            src="/assets/images/CoPilotXR_02.png"
            alt="logo"
            width={180}
            height={28}
          />
        </Link>
        <nav className="sidebar-nav">
          <SignedIn>
            <ul className="sidebar-nav_elements">
              {navLinks.slice(0, 4).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive && "bg-main-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="nav-link"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      <p className="my-auto">{link.label}</p>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <ul className="sidebar-nav_elements">
              {navLinks.slice(4).map((link) => {
                const isActive = link.route === pathname;

                return (
                  <li
                    key={link.route}
                    className={`sidebar-nav_element group ${
                      isActive && "bg-main-700"
                    }`}
                  >
                    <Link className="sidebar-link" href={link.route}>
                      <Image
                        src={link.icon}
                        alt="nav-link"
                        width={24}
                        height={24}
                        className={`${isActive && "brightness-200"}`}
                      />
                      <p className="my-auto">{link.label}</p>
                    </Link>
                  </li>
                );
              })}

              <li className="flex-center cursor-pointer gap-2 p-4">
                <UserButton
                  appearance={{
                    elements: { userButtonBox: "flex-row-reverse" },
                  }}
                  showName
                  afterSignOutUrl="/"
                />
              </li>
            </ul>
          </SignedIn>
          <SignedOut>
            <Button asChild className="button bg-main-700 bg-cover">
              <Link href="/sign-in">Login</Link>
            </Button>
          </SignedOut>
        </nav>
      </div>
    </aside>
  );
};

export default Sidebar;

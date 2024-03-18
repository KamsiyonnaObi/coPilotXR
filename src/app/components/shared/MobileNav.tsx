"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { navLinks } from "@/src/app/constants";
import Notification from "./Notification";
import { Button } from "shadcn/components/ui/button";
import { useSidebar } from "../../providers/SidebarContext";

const MobileNav = () => {
  const pathname = usePathname();
  const { isOpen, toggleSidebar, closeSidebar } = useSidebar();

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image
          src="/assets/images/CoPilotXR_02.png"
          alt="logo"
          width={180}
          height={28}
        />
      </Link>

      <nav className="flex items-center gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Button onClick={toggleSidebar}>
            <Image
              src="/assets/icons/menu.svg"
              alt="menu"
              width={32}
              height={32}
              className="cursor-pointer"
            />
          </Button>
          <div
            className={`header-sidebar ${
              isOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <button
              onClick={closeSidebar}
              className="absolute top-5 right-5 px-3 py-1 text-white"
            >
              <div className="relative w-5 h-5">
                <Image src="/assets/icons/close.svg" alt="close" fill />
              </div>
            </button>
            <div className="p-4 mt-2">
              {/* Sidebar content goes here */}
              <>
                <Image
                  src="/assets/images/CoPilotXR_02.png"
                  alt="logo"
                  width={152}
                  height={23}
                />

                <ul className="header-nav_elements">
                  {navLinks.map((link) => {
                    const isActive = link.route === pathname;

                    const readAWS = link.route === "/aws-docs";
                    return (
                      <li
                        key={link.route}
                        className="flex p-18 whitespace-nowrap text-white"
                      >
                        <Link
                          className="sidebar-link"
                          href={link.route}
                          onClick={closeSidebar}
                        >
                          <Image
                            src={link.icon}
                            alt="nav-logo"
                            width={24}
                            height={24}
                            className={`${isActive && "brightness-200"}`}
                          />
                          <p
                            className={`my-auto ${
                              isActive && "text-main-700"
                            } hover:text-red-400`}
                          >
                            {link.label}
                          </p>
                          {readAWS && <Notification />}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </div>
          </div>
          {/* Overlay for blur effect */}
          {isOpen && (
            <div
              onClick={closeSidebar}
              className="fixed inset-0 backdrop-blur"
            ></div>
          )}
        </SignedIn>
        <SignedOut>
          <Button
            asChild
            className="text-white py-1 px-6 rounded-md p-16-semibold bg-main-700 bg-cover"
          >
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;

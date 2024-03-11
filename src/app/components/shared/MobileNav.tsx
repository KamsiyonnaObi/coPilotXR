"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";
import { navLinks } from "@/src/app/constants";
import { Button } from "shadcn/components/ui/button";

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };
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
              onClick={toggleSidebar}
              className="absolute top-5 right-5 px-3 py-1 text-white"
            >
              x
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

                    return (
                      <li
                        key={link.route}
                        className="flex p-18 whitespace-nowrap text-white"
                      >
                        <Link className="sidebar-link" href={link.route}>
                          <Image
                            src={link.icon}
                            alt="nav-logo"
                            width={24}
                            height={24}
                            className={`${isActive && "brightness-200"}`}
                          />
                          <p
                            className={`my-auto ${isActive && "text-main-700"}`}
                          >
                            {link.label}
                          </p>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </>
            </div>
          </div>
          {/* Overlay for blur effect */}
          {isOpen && <div className="fixed inset-0 backdrop-blur"></div>}
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

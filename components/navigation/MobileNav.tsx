"use client";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import NavLogo from "./NavLogo";
import NavContact from "./NavContact";
import { useEffect, useState } from "react";

const navItems = [
  { label: "How it works", href: "/" },
  { label: "Pricing", href: "/" },
  { label: "Use Case", href: "/" },
  { label: "FAQ", href: "/" },
];

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="md:hidden flex items-center justify-between">
      <NavLogo />

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            aria-label="Open navigation menu"
            className="flex items-center justify-center rounded-full p-2 transition-colors hover:bg-muted"
          >
            <Menu className="h-6 w-6" />
          </button>
        </SheetTrigger>

        <SheetContent side="right" className="pt-20 px-6">
          <nav className="flex flex-col justify-between">
            <ul className="flex flex-col gap-6 text-base font-medium text-[#8C97A8] mb-5">
              {navItems.map((item) => (
                <li key={item.label}>
                  <SheetClose asChild>
                    <Link
                      href={item.href}
                      className="block transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </Link>
                  </SheetClose>
                </li>
              ))}
            </ul>
            <NavContact />
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;

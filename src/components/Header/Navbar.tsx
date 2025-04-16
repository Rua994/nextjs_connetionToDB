"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuList } from "@/constants/MenuList";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Navbar = () => {
  const pathname = usePathname();

  return (
    <nav className="relative flex items-center gap-4 py-4 px-8 shadow-md bg-white rounded-lg">
      {MenuList.map((item) => {
        const isActive = pathname === item.link;
        return (
          <Link
            key={item.link}
            href={item.link}
          >
            <Button
              variant="ghost"
              className={cn(
                "text-base font-medium transition-all duration-300 cursor-pointer px-4",
                isActive
                  ? "bg-primary text-white"
                  : "bg-transparent text-black hover:bg-primary/10 hover:text-primary"
              )}
            >
              {item.name}
              {isActive && (
                <motion.span
                  layoutId="navbar-underline"
                  className="absolute left-0 right-0 -bottom-1 h-1 rounded bg-white/80"
                  transition={{ type: "spring", stiffness: 200, damping: 40 }}
                />
              )}
            </Button>
          </Link>
        );
      })}
    </nav>
  );
};

export default Navbar;

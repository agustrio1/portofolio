"use client";

import * as React from "react";
import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { MobileNav } from "@/components/mobile-nav";

export function Navbar() {
  const { setTheme, theme } = useTheme();
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container relative flex h-16 items-center justify-between">

        <MobileNav />
        
        <Link href="/" className="ml-8 hidden md:block">
          <span className="text-xl font-bold">Trio Agus </span>
        </Link>

        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center space-x-8 text-sm font-medium">
          <Link href="/" className="transition-colors hover:text-foreground/80">
            Home
          </Link>
          <Link href="#projects" className="transition-colors hover:text-foreground/80">
            Projects
          </Link>
          <Link href="#skills" className="transition-colors hover:text-foreground/80">
            Skills
          </Link>
          <Link href="#contact" className="transition-colors hover:text-foreground/80">
            Contact
          </Link>
        </nav>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            aria-label="Toggle Theme"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          </Button>
        </div>
      </div>
    </motion.header>
  );
}

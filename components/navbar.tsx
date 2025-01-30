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
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className={`sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container relative flex h-16 items-center justify-between">
        <MobileNav />

        <Link href="/" className="ml-8 hidden md:block">
          <motion.span
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-xl font-bold bg-gradient-to-r from-primary to-primary-foreground bg-clip-text text-transparent"
          >
            Trio Agus
          </motion.span>
        </Link>

        <nav className="absolute left-1/2 -translate-x-1/2 hidden md:flex items-center space-x-8 text-sm font-medium">
          {[
            { href: "/", label: "Home" },
            { href: "#projects", label: "Projects" },
            { href: "#skills", label: "Skills" },
            { href: "#contact", label: "Contact" },
          ].map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-primary relative"
            >
              <motion.span
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="block"
              >
                {link.label}
              </motion.span>
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 w-full h-0.5 bg-primary"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          ))}
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
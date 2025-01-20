import * as React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ScrollArea } from "@/components/ui/scroll-area";
import { DialogTitle, DialogDescription } from "@radix-ui/react-dialog";

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "#projects",
    label: "Projects",
  },
  {
    href: "#skills",
    label: "Skills",
  },
  {
    href: "#contact",
    label: "Contact",
  },
];

export function MobileNav() {
  const [open, setOpen] = React.useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-8 w-8" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-72">
        <DialogTitle className="sr-only">Navigation Menu</DialogTitle>
        <DialogDescription className="sr-only">
          Use the navigation links to explore the site.
        </DialogDescription>
        <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
          <div className="flex flex-col space-y-4">
            {routes.map((route) => (
              <Link
                key={route.href}
                href={route.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {route.label}
              </Link>
            ))}
          </div>
        </ScrollArea>
      </SheetContent>
    </Sheet>
  );
}

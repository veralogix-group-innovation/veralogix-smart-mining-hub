'use client';

import { Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function AlertsBell() {
  return (
    <Button variant="ghost" size="icon" className="relative">
      <Bell className="size-6" />
      <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-destructive text-destructive-foreground text-xs">3</span>
    </Button>
  );
}

'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Sun, Moon } from "lucide-react";

export function ShiftSelector() {
  return (
    <Select defaultValue="day">
      <SelectTrigger className="w-[180px] bg-secondary border-0">
        <SelectValue placeholder="Select Shift" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="day">
          <div className="flex items-center gap-2">
            <Sun className="size-4 text-accent"/> Day Shift
          </div>
        </SelectItem>
        <SelectItem value="night">
          <div className="flex items-center gap-2">
            <Moon className="size-4 text-muted-foreground"/> Night Shift
          </div>
        </SelectItem>
        <SelectItem value="custom">
          <div className="flex items-center gap-2">
            Custom
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

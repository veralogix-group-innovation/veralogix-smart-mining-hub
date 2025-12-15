"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

const filters = ["All Fleet", "Contractors", "Yellow Fleet"];

export function QuickFilterChips() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["All Fleet"]);

  return (
    <ToggleGroup 
      type="multiple" 
      variant="outline" 
      value={selectedFilters}
      onValueChange={(value) => {
        if (value) setSelectedFilters(value);
      }}
      aria-label="Quick filters"
    >
      {filters.map((filter) => (
        <ToggleGroupItem key={filter} value={filter} aria-label={`Filter by ${filter}`}>
          {filter}
        </ToggleGroupItem>
      ))}
    </ToggleGroup>
  );
}

'use client';

import { Button } from "@/components/ui/button"
import { MapPin } from 'lucide-react';

export function SiteSelector() {
  return (
    <Button variant="ghost" className="text-base font-semibold cursor-default hover:bg-transparent">
        <MapPin className="mr-2 text-primary" />
        Pilbara Mine
    </Button>
  );
}

'use client';

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { List, Map } from "lucide-react";

export function ViewToggle() {
  return (
    <Tabs defaultValue="map">
      <TabsList>
        <TabsTrigger value="map">
          <Map className="mr-2" />
          Map View
        </TabsTrigger>
        <TabsTrigger value="list">
          <List className="mr-2" />
          List View
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
}

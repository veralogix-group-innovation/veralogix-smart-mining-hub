'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CoverageKpiGrid } from "./components/coverage-kpi-grid";
import { MobileRoadMatrix } from "./components/mobile-road-matrix";
import { PlantTailingsMatrix } from "./components/plant-tailings-matrix";
import { AiSensorAdvisorCard } from "./components/ai-sensor-advisor-card";
import { Card } from "@/components/ui/card";

export default function SensorsPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-headline font-semibold text-primary">Sensor Stack &amp; Coverage</h1>
        <p className="text-muted-foreground">Monitor the health and coverage of your entire sensor network.</p>
      </header>
      
      <CoverageKpiGrid />

      <Card>
        <Tabs defaultValue="mobile-road" className="p-4 sm:p-6">
          <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2">
            <TabsTrigger value="mobile-road">Mobile &amp; Road</TabsTrigger>
            <TabsTrigger value="plant-tailings">Plant &amp; Tailings</TabsTrigger>
          </TabsList>
          <TabsContent value="mobile-road">
            <MobileRoadMatrix />
          </TabsContent>
          <TabsContent value="plant-tailings">
            <PlantTailingsMatrix />
          </TabsContent>
        </Tabs>
      </Card>

      <AiSensorAdvisorCard />

    </div>
  );
}

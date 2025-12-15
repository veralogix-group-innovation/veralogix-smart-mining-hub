
'use client';

import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import { StatusPill, type StatusPillStatus } from "@/components/shared/status-pill";

export interface PlantUnit {
  name: string;
  sensorsInstalled: number;
  sensorsRequired: number;
}

const units: PlantUnit[] = [
  { name: 'Crusher', sensorsInstalled: 8, sensorsRequired: 10 },
  { name: 'Conveyor', sensorsInstalled: 12, sensorsRequired: 12 },
  { name: 'Pan feeder', sensorsInstalled: 4, sensorsRequired: 5 },
  { name: 'Screen', sensorsInstalled: 6, sensorsRequired: 6 },
  { name: 'Thickener', sensorsInstalled: 7, sensorsRequired: 9 },
  { name: 'Pump', sensorsInstalled: 9, sensorsRequired: 9 },
  { name: 'Sump', sensorsInstalled: 3, sensorsRequired: 4 },
  { name: 'Pipeline', sensorsInstalled: 5, sensorsRequired: 8 },
  { name: 'PCD', sensorsInstalled: 2, sensorsRequired: 3 },
  { name: 'Catchment sumps', sensorsInstalled: 1, sensorsRequired: 3 },
  { name: 'Tailings dam', sensorsInstalled: 4, sensorsRequired: 7 },
];

const getStatus = (installed: number, required: number): StatusPillStatus => {
  const coverage = required > 0 ? installed / required : 1;
  if (coverage === 1) return 'OK';
  if (coverage > 0.7) return 'Warning';
  return 'Critical';
};

interface ProcessFlowBandProps {
  onUnitSelect: (unit: PlantUnit) => void;
  selectedUnit: PlantUnit | null;
}

export function ProcessFlowBand({ onUnitSelect, selectedUnit }: ProcessFlowBandProps) {
  return (
    <Card>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex p-4">
          {units.map((unit, index) => (
            <div key={unit.name} className="flex items-center">
              <button
                onClick={() => onUnitSelect(unit)}
                className={cn(
                  "flex-shrink-0 rounded-lg border p-3 text-left transition-colors",
                  selectedUnit?.name === unit.name
                    ? "bg-primary/10 border-primary shadow-lg"
                    : "bg-secondary border-secondary hover:border-accent"
                )}
              >
                <p className="font-semibold">{unit.name}</p>
                <p className="text-xs text-muted-foreground">
                  Sensors: {unit.sensorsInstalled} / {unit.sensorsRequired}
                </p>
                <div className="mt-2">
                    <StatusPill status={getStatus(unit.sensorsInstalled, unit.sensorsRequired)} />
                </div>
              </button>
              {index < units.length - 1 && (
                <ChevronRight className="mx-2 h-8 w-8 text-muted-foreground/50" />
              )}
            </div>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </Card>
  );
}

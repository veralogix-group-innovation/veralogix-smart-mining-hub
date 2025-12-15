
'use client';

import { useState } from "react";
import { PlantKpiGrid } from "./components/plant-kpi-grid";
import { ProcessFlowBand } from "./components/process-flow-band";
import { ProcessUnitDetailsCard } from "./components/process-unit-details-card";
import { TailingsRiskCard } from "./components/tailings-risk-card";
import type { PlantUnit } from "./components/process-flow-band";

export default function PlantPage() {
  const [selectedUnit, setSelectedUnit] = useState<PlantUnit | null>(null);

  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-headline font-semibold text-primary">Plant & Process Intelligence</h1>
        <p className="text-muted-foreground">Live overview of process feedrate, quality, sensor coverage, and AI-driven risk.</p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary/80">Overall Plant KPIs</h2>
        <PlantKpiGrid />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary/80">Process Flow & Sensor Health</h2>
        <ProcessFlowBand onUnitSelect={setSelectedUnit} selectedUnit={selectedUnit} />
      </section>

      {selectedUnit && (
        <section>
          <h2 className="text-xl font-semibold text-primary/80">Details for: {selectedUnit.name}</h2>
          <ProcessUnitDetailsCard unit={selectedUnit} />
        </section>
      )}

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary/80">Tailings Management</h2>
        <TailingsRiskCard />
      </section>

    </div>
  );
}

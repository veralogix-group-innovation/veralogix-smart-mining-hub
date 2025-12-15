import { AutomatedActionsCard } from "./components/automated-actions-card";
import { ModuleGrid } from "./components/module-grid";
import { SmartHubQueueCard } from "./components/smart-hub-queue-card";
import { SouthAfricanKpiGrid } from "./components/south-african-kpi-grid";
import { AiInsightsStrip } from "./components/ai-insights-strip";
import { PlantSensorCoverageCard } from "./components/plant-sensor-coverage-card";
import { ProcessRiskCard } from "./components/process-risk-card";

export default function HubPage() {
  return (
    <div className="space-y-4">
      <header>
        <h1 className="text-3xl font-headline font-semibold text-primary">Smart Hub – Pilbara Mine</h1>
        <p className="text-muted-foreground">Central command for site-wide operations, tailored for SA mining regulations.</p>
      </header>

      <SouthAfricanKpiGrid />

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary/80">AI Insights</h2>
        <AiInsightsStrip />
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary/80">Plant &amp; Tailings Sensor Snapshot</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <PlantSensorCoverageCard />
            <ProcessRiskCard />
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary/80">Operational Intelligence Modules</h2>
        <ModuleGrid />
      </section>
      
       <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary/80">Actions &amp; Queues</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <AutomatedActionsCard />
          <SmartHubQueueCard />
        </div>
      </section>
    </div>
  );
}

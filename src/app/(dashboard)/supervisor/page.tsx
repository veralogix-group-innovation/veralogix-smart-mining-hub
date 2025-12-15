import { SupervisorKpiGrid } from "./components/supervisor-kpi-grid";
import { LiveHaulMapCard } from "./components/live-haul-map-card";
import { CycleQueueIntelligenceCard } from "./components/cycle-queue-intelligence-card";
import { FleetHealthExceptionsCard } from "./components/fleet-health-exceptions-card";
import { ViewToggle } from "@/components/shared/view-toggle";
import { AiQueueOptimisationCard } from "./components/ai-queue-optimisation-card";
import { AiAnomalyWatchCard } from "./components/ai-anomaly-watch-card";

export default function SupervisorPage() {
  return (
    <div className="space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-headline font-semibold text-primary">Control Room</h1>
          <p className="text-muted-foreground">Information tailored for supervisors and control room operators.</p>
        </div>
        <ViewToggle />
      </header>

      <SupervisorKpiGrid />

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 items-start">
        <div className="xl:col-span-1">
          <LiveHaulMapCard />
        </div>
        <div className="xl:col-span-1">
          <CycleQueueIntelligenceCard />
        </div>
        <div className="xl:col-span-1">
          <FleetHealthExceptionsCard />
        </div>
      </div>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold text-primary/80">AI Recommendations</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-start">
            <AiQueueOptimisationCard />
            <AiAnomalyWatchCard />
        </div>
      </section>
    </div>
  );
}

import { OperatorKpiGrid } from "./components/operator-kpi-grid";
import { ComplianceStatusCard } from "./components/compliance-status-card";
import { LiveAlertsCard } from "./components/live-alerts-card";
import { ProductionPerformanceCard } from "./components/production-performance-card";
import { RecentLoadsCard } from "./components/recent-loads-card";

export default function OperatorPage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-headline font-semibold text-primary">Operator Cockpit</h1>
        <p className="text-muted-foreground">Your real-time status and performance overview.</p>
      </header>

      <OperatorKpiGrid />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ComplianceStatusCard />
        <LiveAlertsCard />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <ProductionPerformanceCard />
        <RecentLoadsCard />
      </div>
    </div>
  );
}

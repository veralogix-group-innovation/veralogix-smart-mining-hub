import { ComplianceKpiGrid } from "./components/compliance-kpi-grid";
import { GateActivityCard } from "./components/gate-activity-card";
import { ComplianceOverviewCard } from "./components/compliance-overview-card";
import { AuditReadinessCard } from "./components/audit-readiness-card";

export default function CompliancePage() {
  return (
    <div className="space-y-6">
      <header>
        <h1 className="text-3xl font-headline font-semibold text-primary">Workforce Compliance & Access</h1>
        <p className="text-muted-foreground">Monitor and manage regulatory and internal compliance with SentryMine™.</p>
      </header>

      <ComplianceKpiGrid />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 items-start">
        <div className="lg:col-span-3">
            <GateActivityCard />
        </div>
        <div className="lg:col-span-2">
            <ComplianceOverviewCard />
        </div>
      </div>

      <AuditReadinessCard />
    </div>
  );
}

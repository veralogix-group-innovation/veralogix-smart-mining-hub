import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { StatusPill, StatusPillStatus } from "@/components/shared/status-pill";

interface ComplianceItem {
    label: string;
    status: StatusPillStatus;
    value: string;
}

const complianceItems: ComplianceItem[] = [
    { label: "License Status", status: "OK", value: "Valid (Renews in 8 months)" },
    { label: "Medical Status", status: "OK", value: "Fit for Duty (Next screening: Oct 2024)" },
    { label: "Induction / Training", status: "Warning", value: "Annual refresher due in 3 weeks" },
    { label: "Last Rest Break", status: "Info", value: "2h 15m ago" },
];

export function ComplianceStatusCard() {
    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>Compliance Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {complianceItems.map((item) => (
                    <div key={item.label}>
                        <div className="flex justify-between items-center mb-1">
                            <p className="font-medium">{item.label}</p>
                            <StatusPill status={item.status} />
                        </div>
                        <p className="text-sm text-muted-foreground">{item.value}</p>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
}

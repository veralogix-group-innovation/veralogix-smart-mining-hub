'use client';

import { useMemo } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { KPITile } from '@/components/shared/kpi-tile';
import type { ScenarioParameters, ScenarioType } from './scenario-controls-card';
import { ArrowRight } from 'lucide-react';

interface ScenarioResultsDisplayProps {
    params: ScenarioParameters;
}

const BASE_VALUES = {
    tonnes: 42800,
    cycleTime: 33.1,
    queueTime: 4.5,
    costPerTonne: 385.10,
};

function calculateScenario(params: ScenarioParameters) {
    let tonnes = BASE_VALUES.tonnes;
    let cycleTime = BASE_VALUES.cycleTime;
    let queueTime = BASE_VALUES.queueTime;
    let costPerTonne = BASE_VALUES.costPerTonne;

    // Simple mock logic
    const fleetDiff = params.fleetSize - 32;
    tonnes += fleetDiff * 1200;
    queueTime += fleetDiff * 0.3;
    
    if (params.scenarioType === 'adjust_speed') {
        const speedDiff = params.speedLimit - 40;
        cycleTime -= speedDiff * 0.2;
    }
    
    if (params.scenarioType === 'adjust_payload') {
        const payloadDiff = params.avgPayload - 98.2;
        tonnes += payloadDiff * 500;
    }
    
    cycleTime = Math.max(25, cycleTime);
    queueTime = Math.max(1, queueTime);
    costPerTonne = (BASE_VALUES.costPerTonne * BASE_VALUES.tonnes) / tonnes;

    return { tonnes, cycleTime, queueTime, costPerTonne };
}

function ResultTile({ title, baseValue, scenarioValue, unit }: { title: string, baseValue: number, scenarioValue: number, unit: string }) {
    const diff = scenarioValue - baseValue;
    const diffPercent = (diff / baseValue) * 100;
    const trend = diff > 0 ? "up" : diff < 0 ? "down" : "flat";
    
    const isGood = (title.includes('Tonne') && trend === 'up') || (title.includes('Time') && trend === 'down') || (title.includes('Cost') && trend === 'down');
    const trendColor = trend === 'flat' ? 'text-muted-foreground' : isGood ? 'text-primary' : 'text-destructive';

    return (
        <Card className="bg-secondary">
            <CardHeader className="pb-2">
                <CardTitle className="text-base font-medium text-muted-foreground">{title}</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between">
                    <div className="text-center">
                        <p className="text-xs text-muted-foreground">Current</p>
                        <p className="text-2xl font-bold font-headline">{baseValue.toLocaleString(undefined, { maximumFractionDigits: 1 })}</p>
                    </div>
                    <ArrowRight className={`size-6 shrink-0 ${trendColor}`} />
                    <div className="text-center">
                        <p className="text-xs text-muted-foreground">Scenario</p>
                        <p className={`text-2xl font-bold font-headline ${trendColor}`}>{scenarioValue.toLocaleString(undefined, { maximumFractionDigits: 1 })}</p>
                    </div>
                </div>
                 <p className={`text-sm text-center font-bold mt-2 ${trendColor}`}>
                    {diff.toFixed(1)} ({diffPercent > 0 ? '+' : ''}{diffPercent.toFixed(1)}%)
                </p>
            </CardContent>
        </Card>
    );
}

export function ScenarioResultsDisplay({ params }: ScenarioResultsDisplayProps) {
    const scenario = useMemo(() => calculateScenario(params), [params]);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Scenario Results</CardTitle>
                <CardDescription>Comparison of current operations vs. the simulated scenario.</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <ResultTile title="Est. Tonnes per Shift" baseValue={BASE_VALUES.tonnes} scenarioValue={scenario.tonnes} unit="t" />
                <ResultTile title="Avg. Cycle Time" baseValue={BASE_VALUES.cycleTime} scenarioValue={scenario.cycleTime} unit="min" />
                <ResultTile title="Avg. Queue Time" baseValue={BASE_VALUES.queueTime} scenarioValue={scenario.queueTime} unit="min" />
                <ResultTile title="Approx. Cost per Tonne" baseValue={BASE_VALUES.costPerTonne} scenarioValue={scenario.costPerTonne} unit="ZAR" />
            </CardContent>
        </Card>
    );
}

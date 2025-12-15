'use client';

import { useState } from 'react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Info } from "lucide-react";
import { ScenarioControlsCard } from './components/scenario-controls-card';
import { ScenarioResultsDisplay } from './components/scenario-results-display';
import type { ScenarioParameters } from './components/scenario-controls-card';

export default function DigitalTwinPage() {
    const [scenarioParams, setScenarioParams] = useState<ScenarioParameters>({
        scenarioType: 'add_truck',
        fleetSize: 32,
        avgPayload: 98.2,
        speedLimit: 40,
    });

    return (
        <div className="space-y-6">
            <header>
                <h1 className="text-3xl font-headline font-semibold text-primary">Digital Twin & Scenarios</h1>
                <p className="text-muted-foreground">Explore potential outcomes by adjusting operational parameters.</p>
            </header>

            <Alert className="bg-secondary border-accent text-accent-foreground">
                <Info className="h-4 w-4 text-accent" />
                <AlertTitle>Demonstration Only</AlertTitle>
                <AlertDescription>
                    Scenario values are calculated using simplified mock assumptions and do not represent real-world outcomes.
                </AlertDescription>
            </Alert>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">
                <div className="lg:col-span-1">
                    <ScenarioControlsCard onParamsChange={setScenarioParams} />
                </div>
                <div className="lg:col-span-2">
                    <ScenarioResultsDisplay params={scenarioParams} />
                </div>
            </div>
        </div>
    );
}

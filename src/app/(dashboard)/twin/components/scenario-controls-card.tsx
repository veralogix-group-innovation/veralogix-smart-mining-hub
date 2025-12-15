'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export type ScenarioType = 'add_truck' | 'remove_truck' | 'adjust_speed' | 'adjust_payload';

export interface ScenarioParameters {
    scenarioType: ScenarioType;
    fleetSize: number;
    avgPayload: number;
    speedLimit: number;
}

interface ScenarioControlsCardProps {
    onParamsChange: (params: ScenarioParameters) => void;
}

export function ScenarioControlsCard({ onParamsChange }: ScenarioControlsCardProps) {
    const [scenarioType, setScenarioType] = useState<ScenarioType>('add_truck');
    const [fleetSize, setFleetSize] = useState(32);
    const [avgPayload, setAvgPayload] = useState(98.2);
    const [speedLimit, setSpeedLimit] = useState(40);
    
    useEffect(() => {
        onParamsChange({ scenarioType, fleetSize, avgPayload, speedLimit });
    }, [scenarioType, fleetSize, avgPayload, speedLimit, onParamsChange]);
    
    const isParamActive = (param: 'fleet' | 'payload' | 'speed') => {
        switch(param) {
            case 'fleet': return scenarioType === 'add_truck' || scenarioType === 'remove_truck';
            case 'payload': return scenarioType === 'adjust_payload';
            case 'speed': return scenarioType === 'adjust_speed';
            default: return false;
        }
    }

    return (
        <Card className="card-hover">
            <CardHeader>
                <CardTitle>Scenario Controls</CardTitle>
                <CardDescription>Adjust parameters to simulate outcomes.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="scenario-type">Scenario Type</Label>
                    <Select
                        value={scenarioType}
                        onValueChange={(value) => setScenarioType(value as ScenarioType)}
                    >
                        <SelectTrigger id="scenario-type">
                            <SelectValue placeholder="Select a scenario" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="add_truck">Add one truck to fleet</SelectItem>
                            <SelectItem value="remove_truck">Remove one truck from fleet</SelectItem>
                            <SelectItem value="adjust_speed">Reduce speed limit on ramp</SelectItem>
                            <SelectItem value="adjust_payload">Increase average payload target</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                
                <div className={`space-y-3 p-3 rounded-md transition-colors ${isParamActive('fleet') ? 'bg-primary/10 border-primary/50 border' : ''}`}>
                    <Label>Fleet Size</Label>
                    <div className="flex items-center gap-4">
                        <Slider
                            value={[fleetSize]}
                            onValueChange={(value) => setFleetSize(value[0])}
                            min={20} max={40} step={1}
                            disabled={!isParamActive('fleet')}
                        />
                        <span className="text-lg font-bold font-mono w-12 text-right">{fleetSize}</span>
                    </div>
                </div>

                <div className={`space-y-3 p-3 rounded-md transition-colors ${isParamActive('speed') ? 'bg-primary/10 border-primary/50 border' : ''}`}>
                    <Label>Speed Limit on Ramp (km/h)</Label>
                     <div className="flex items-center gap-4">
                        <Slider
                            value={[speedLimit]}
                            onValueChange={(value) => setSpeedLimit(value[0])}
                            min={20} max={60} step={5}
                            disabled={!isParamActive('speed')}
                        />
                        <span className="text-lg font-bold font-mono w-12 text-right">{speedLimit}</span>
                    </div>
                </div>

                <div className={`space-y-3 p-3 rounded-md transition-colors ${isParamActive('payload') ? 'bg-primary/10 border-primary/50 border' : ''}`}>
                    <Label>Average Payload Target (%)</Label>
                    <div className="flex items-center gap-4">
                        <Slider
                            value={[avgPayload]}
                            onValueChange={(value) => setAvgPayload(value[0])}
                            min={95} max={105} step={0.1}
                            disabled={!isParamActive('payload')}
                        />
                        <span className="text-lg font-bold font-mono w-16 text-right">{avgPayload.toFixed(1)}%</span>
                    </div>
                </div>

            </CardContent>
        </Card>
    );
}

'use server';
/**
 * @fileOverview Generates a Shift Handover Report highlighting critical issues from the previous shift.
 *
 * - generateShiftHandoverReport - A function that generates the shift handover report.
 * - ShiftHandoverReportInput - The input type for the generateShiftHandoverReport function.
 * - ShiftHandoverReportOutput - The return type for the generateShiftHandoverReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ShiftHandoverReportInputSchema = z.object({
  previousShiftData: z.string().describe('Data from the previous shift, including alerts, anomalies, and key events.'),
  currentShift: z.string().describe('The current shift (Day, Night, or Custom).'),
});
export type ShiftHandoverReportInput = z.infer<typeof ShiftHandoverReportInputSchema>;

const ShiftHandoverReportOutputSchema = z.object({
  report: z.string().describe('A summary of critical issues from the previous shift.'),
});
export type ShiftHandoverReportOutput = z.infer<typeof ShiftHandoverReportOutputSchema>;

export async function generateShiftHandoverReport(input: ShiftHandoverReportInput): Promise<ShiftHandoverReportOutput> {
  return shiftHandoverReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'shiftHandoverReportPrompt',
  input: {schema: ShiftHandoverReportInputSchema},
  output: {schema: ShiftHandoverReportOutputSchema},
  prompt: `You are an AI assistant that generates shift handover reports for mining operations.

  Based on the data from the previous shift, create a concise report that highlights the most critical issues and events that the next shift needs to be aware of.

  Current Shift: {{{currentShift}}}
  Previous Shift Data: {{{previousShiftData}}}

  Report:
`,
});

const shiftHandoverReportFlow = ai.defineFlow(
  {
    name: 'shiftHandoverReportFlow',
    inputSchema: ShiftHandoverReportInputSchema,
    outputSchema: ShiftHandoverReportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

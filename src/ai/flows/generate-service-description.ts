'use server';

/**
 * @fileOverview A service description generator AI agent.
 *
 * - generateServiceDescription - A function that generates a tailored description for a given service.
 * - GenerateServiceDescriptionInput - The input type for the generateServiceDescription function.
 * - GenerateServiceDescriptionOutput - The return type for the generateServiceDescription function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateServiceDescriptionInputSchema = z.object({
  serviceName: z.string().describe('The name of the service.'),
  context: z.string().describe('The specific context or problem the user is facing.'),
});
export type GenerateServiceDescriptionInput = z.infer<typeof GenerateServiceDescriptionInputSchema>;

const GenerateServiceDescriptionOutputSchema = z.object({
  description: z.string().describe('A tailored description of the service for the given context.'),
});
export type GenerateServiceDescriptionOutput = z.infer<typeof GenerateServiceDescriptionOutputSchema>;

export async function generateServiceDescription(
  input: GenerateServiceDescriptionInput
): Promise<GenerateServiceDescriptionOutput> {
  return generateServiceDescriptionFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateServiceDescriptionPrompt',
  input: {schema: GenerateServiceDescriptionInputSchema},
  output: {schema: GenerateServiceDescriptionOutputSchema},
  prompt: `You are an AI assistant for SynapseAI, an agentic AI startup.

  Generate a description of the service {{serviceName}} that is tailored to the following context or problem: {{context}}.
  The description should clearly explain how SynapseAI can help the user with their specific needs. Focus on the benefits and value proposition of the service in the given context.
  The description should be concise and easy to understand.
  `,
});

const generateServiceDescriptionFlow = ai.defineFlow(
  {
    name: 'generateServiceDescriptionFlow',
    inputSchema: GenerateServiceDescriptionInputSchema,
    outputSchema: GenerateServiceDescriptionOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);

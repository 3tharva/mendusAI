'use server';

import { z } from 'zod';
import { generateServiceDescription as genkitGenerateServiceDescription } from '@/ai/flows/generate-service-description';
import type { GenerateServiceDescriptionInput } from '@/ai/flows/generate-service-description';

const ServiceDescriptionSchema = z.object({
  serviceName: z.string().min(1, { message: 'Service name is required.' }),
  context: z.string().min(1, { message: 'Context or problem is required.' }),
});

export interface ServiceDescriptionFormState {
  message: string | null;
  description: string | null;
  fields?: Record<string, string>;
  issues?: string[];
}

export async function handleGenerateServiceDescription(
  prevState: ServiceDescriptionFormState,
  formData: FormData
): Promise<ServiceDescriptionFormState> {
  const validatedFields = ServiceDescriptionSchema.safeParse({
    serviceName: formData.get('serviceName'),
    context: formData.get('context'),
  });

  if (!validatedFields.success) {
    const issues = validatedFields.error.issues.map((issue) => issue.message);
    return {
      message: 'Validation failed.',
      description: null,
      fields: {
        serviceName: formData.get('serviceName')?.toString() ?? '',
        context: formData.get('context')?.toString() ?? '',
      },
      issues,
    };
  }

  try {
    const input: GenerateServiceDescriptionInput = {
      serviceName: validatedFields.data.serviceName,
      context: validatedFields.data.context,
    };
    const result = await genkitGenerateServiceDescription(input);
    
    if (result && result.description) {
      return { message: 'success', description: result.description };
    } else {
      return { message: 'Failed to generate description from AI.', description: null };
    }
  } catch (error) {
    console.error('Error generating service description:', error);
    return { message: 'An unexpected error occurred.', description: null };
  }
}

export async function subscribeToNewsletter(email: string): Promise<{ success: boolean; message: string }> {
  // Placeholder for actual newsletter subscription logic
  // For now, just simulate success if email is valid-ish
  if (email && email.includes('@')) {
    console.log(`Newsletter subscription request for: ${email}`);
    return { success: true, message: "Thank you for subscribing! You're on the list." };
  }
  return { success: false, message: "Please enter a valid email address." };
}

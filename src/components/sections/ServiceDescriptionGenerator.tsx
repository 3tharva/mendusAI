'use client';

import { useFormState, useFormStatus } from 'react-dom';
import { handleGenerateServiceDescription, type ServiceDescriptionFormState } from '@/app/actions';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Loader2, Wand2 } from 'lucide-react';

const initialState: ServiceDescriptionFormState = {
  message: null,
  description: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground shadow-md shadow-accent/30">
      {pending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Wand2 className="mr-2 h-4 w-4" />}
      Generate Description
    </Button>
  );
}

export default function ServiceDescriptionGenerator() {
  const [state, formAction] = useFormState(handleGenerateServiceDescription, initialState);

  return (
    <Card className="w-full max-w-2xl mx-auto bg-card/70 backdrop-blur-md border-border/50 shadow-xl">
      <CardHeader>
        <CardTitle className="text-2xl flex items-center">
          <Wand2 className="mr-3 h-6 w-6 text-accent icon-glow-accent" />
          AI-Powered Service Insights
        </CardTitle>
        <CardDescription>
          Describe a service and a context, and our AI will generate a tailored explanation of how SynapseAI can help.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="serviceName" className="text-foreground/80">Service Name</Label>
            <Input
              id="serviceName"
              name="serviceName"
              placeholder="e.g., Autonomous Data Analysis Agent"
              required
              className="bg-background/50 focus:ring-accent"
              defaultValue={state.fields?.serviceName}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="context" className="text-foreground/80">Your Context or Problem</Label>
            <Textarea
              id="context"
              name="context"
              placeholder="e.g., We need to process large volumes of unstructured text to identify key trends."
              required
              className="min-h-[100px] bg-background/50 focus:ring-accent"
              defaultValue={state.fields?.context}
            />
          </div>
          {state.issues && state.issues.length > 0 && (
            <Alert variant="destructive">
              <AlertTitle>Input Error</AlertTitle>
              <AlertDescription>
                <ul className="list-disc pl-5">
                  {state.issues.map((issue, index) => (
                    <li key={index}>{issue}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
        <CardFooter className="flex flex-col sm:flex-row justify-between items-center pt-4">
          <p className="text-xs text-muted-foreground mb-4 sm:mb-0">
            Powered by SynapseAI Generative Models
          </p>
          <SubmitButton />
        </CardFooter>
      </form>
      {state.message === 'success' && state.description && (
        <div className="p-6 border-t border-border/50">
          <Alert variant="default" className="bg-green-500/10 border-green-500/50 text-green-300">
             <Wand2 className="h-5 w-5 text-green-400" />
            <AlertTitle className="text-green-200">Generated Service Description</AlertTitle>
            <AlertDescription className="text-green-300/90 whitespace-pre-line">
              {state.description}
            </AlertDescription>
          </Alert>
        </div>
      )}
      {state.message && state.message !== 'success' && state.message !== 'Validation failed.' && (
         <div className="p-6 border-t border-border/50">
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        </div>
      )}
    </Card>
  );
}

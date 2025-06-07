'use client';

import React, { useState, useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Mail, Loader2, CheckCircle, AlertTriangle } from 'lucide-react';
import { subscribeToNewsletter } from '@/app/actions'; // Assuming this action exists

const NewsletterSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

type NewsletterFormData = z.infer<typeof NewsletterSchema>;

export default function NewsletterForm() {
  const [isPending, startTransition] = useTransition();
  const [formMessage, setFormMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const { register, handleSubmit, formState: { errors }, reset } = useForm<NewsletterFormData>({
    resolver: zodResolver(NewsletterSchema),
  });

  const onSubmit = (data: NewsletterFormData) => {
    setFormMessage(null);
    startTransition(async () => {
      const result = await subscribeToNewsletter(data.email);
      if (result.success) {
        setFormMessage({ type: 'success', text: result.message });
        reset();
      } else {
        setFormMessage({ type: 'error', text: result.message });
      }
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-md space-y-4">
      <div className="flex space-x-2">
        <Input
          {...register("email")}
          type="email"
          placeholder="your.email@example.com"
          className={`flex-grow bg-background/50 focus:ring-accent ${errors.email ? 'border-destructive focus:ring-destructive' : ''}`}
          disabled={isPending}
        />
        <Button type="submit" disabled={isPending} className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-md shadow-accent/30 whitespace-nowrap">
          {isPending ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : <Mail className="mr-2 h-4 w-4" />}
          Subscribe
        </Button>
      </div>
      {errors.email && <p className="text-sm text-destructive">{errors.email.message}</p>}
      
      {formMessage && (
        <Alert variant={formMessage.type === 'success' ? 'default' : 'destructive'} className={formMessage.type === 'success' ? 'bg-green-500/10 border-green-500/50' : ''}>
          {formMessage.type === 'success' ? <CheckCircle className="h-5 w-5" /> : <AlertTriangle className="h-5 w-5" />}
          <AlertTitle className={formMessage.type === 'success' ? 'text-green-300' : ''}>{formMessage.type === 'success' ? 'Success!' : 'Error'}</AlertTitle>
          <AlertDescription className={formMessage.type === 'success' ? 'text-green-300/90' : ''}>
            {formMessage.text}
          </AlertDescription>
        </Alert>
      )}
    </form>
  );
}

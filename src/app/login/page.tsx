
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Link from 'next/link';
import { LogIn } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Login - akiraAI',
  description: 'Access your akiraAI account to manage your solutions and platform settings.',
};

export default function LoginPage() {
  return (
    <div className="flex flex-col min-h-screen bg-secondary/30">
      <Header />
      <main className="flex-grow flex items-center justify-center py-12 px-4 md:px-6">
        <div className="w-full max-w-md bg-background p-8 rounded-xl shadow-2xl">
          <div className="text-center mb-8">
            <LogIn className="h-12 w-12 mx-auto mb-4 text-primary" />
            <h1 className="text-3xl font-bold text-foreground">Welcome Back</h1>
            <p className="text-muted-foreground font-body">Login to your akiraAI account.</p>
          </div>
          
          <form className="space-y-6">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input type="email" id="email" placeholder="you@example.com" required className="mt-1" />
            </div>
            <div>
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="#" className="text-sm text-primary hover:underline font-body">
                  Forgot password?
                </Link>
              </div>
              <Input type="password" id="password" placeholder="••••••••" required className="mt-1" />
            </div>
            <div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                Login
              </Button>
            </div>
          </form>
          
          <p className="mt-8 text-center text-sm text-muted-foreground font-body">
            Don&apos;t have an account?{' '}
            <Link href="/book-demo" className="font-medium text-primary hover:underline">
              Sign up
            </Link>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

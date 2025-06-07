
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface PlaceholderPageProps {
  pageName: string;
  description?: string;
}

export default function PlaceholderPage({ pageName, description }: PlaceholderPageProps) {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-primary mb-8">
          {pageName}
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          This page is under construction.
        </p>
        {description && (
          <p className="text-lg text-muted-foreground mb-6">{description}</p>
        )}
         <p className="mt-2 text-lg">
          Check back soon for exciting updates!
        </p>
      </main>
      <Footer />
    </div>
  );
}


'use client';

import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, Factory, Users, Cable, Code, Server, MessageSquare, PackageCheck, Cog, Activity, LayoutDashboard } from 'lucide-react'; 

interface IndustryFeature {
  icon: React.ElementType;
  title: string;
  description: string;
}

const productManagerFeatures: IndustryFeature[] = [
  { icon: PackageCheck, title: 'Predictive Project Timelines', description: 'Forecast project completion times with AI insights.' },
  { icon: Cog, title: 'Automated Task Management', description: 'AI-driven prioritization and deadline tracking.' },
  { icon: Users, title: 'Resource Allocation Optimization', description: 'Smart workforce and budget distribution.' },
  { icon: Activity, title: 'Real-Time Risk Assessment', description: 'AI-driven identification of project risks and bottlenecks.' },
  { icon: LayoutDashboard, title: 'Automated Reporting & Dashboards', description: 'AI-generated reports for quick decision-making.' },
];

const manufacturingFeatures: IndustryFeature[] = [
  { icon: Factory, title: 'Predictive Maintenance', description: 'AI forecasts equipment failures to schedule maintenance proactively.' },
  { icon: Cog, title: 'Quality Control Automation', description: 'Vision AI inspects products for defects with high accuracy.' },
  { icon: Users, title: 'Supply Chain Optimization', description: 'AI balances inventory and logistics for JIT production.' },
];

const humanResourceFeatures: IndustryFeature[] = [
    { icon: Users, title: 'AI Talent Acquisition', description: 'Automated resume screening and candidate matching.'},
    { icon: Cog, title: 'Personalized Employee Onboarding', description: 'AI tailors onboarding paths for new hires.'},
    { icon: MessageSquare, title: 'Sentiment Analysis for Engagement', description: 'Monitors employee feedback to improve workplace culture.'},
];


const TabIconMapping: { [key: string]: React.ElementType } = {
  "Product Managers": Briefcase,
  "Manufacturing": Factory,
  "Human Resource": Users,
  "SRM": Cable, 
  "Developers": Code,
  "ITSM": Server, 
  "Customer Service": MessageSquare,
};

const industryTabs = [
  { value: "product-managers", label: "Product Managers", features: productManagerFeatures },
  { value: "manufacturing", label: "Manufacturing", features: manufacturingFeatures },
  { value: "human-resource", label: "Human Resource", features: humanResourceFeatures },
  { value: "srm", label: "SRM", features: [{icon: Cable, title: "Vendor Performance AI", description:"Automated supplier risk and performance tracking."}] }, 
  { value: "developers", label: "Developers", features: [{icon: Code, title: "AI Code Autocompletion", description:"Intelligent code suggestions and bug detection."}] },
  { value: "itsm", label: "ITSM", features: [{icon: Server, title: "Automated Incident Routing", description:"AI directs IT tickets to the correct support tier."}] },
  { value: "customer-service", label: "Customer Service", features: [{icon: MessageSquare, title: "AI Chatbot Triage", description:"Smart chatbots handle common queries, escalate complex issues."}] },
];

export default function SolutionsByIndustry() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            Solutions by Industry
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Industry Solutions with our Agentic AI Platform. Build automations ready to scale at the click of a button and craft AI agents based on your goals.
          </p>
        </div>

        <Tabs defaultValue="product-managers" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-8">
            {industryTabs.map((tab) => {
               const IconComponent = TabIconMapping[tab.label] || Briefcase;
              return (
                <TabsTrigger key={tab.value} value={tab.value} className="flex items-center justify-center gap-2 py-2.5 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-md">
                  <IconComponent className="h-5 w-5" />
                  {tab.label}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {industryTabs.map((tab) => (
            <TabsContent key={tab.value} value={tab.value}>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {tab.features.map((feature, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow bg-card">
                    <CardHeader className="flex flex-row items-center gap-4 pb-2">
                      <div className="p-2 bg-primary/10 rounded-md">
                        <feature.icon className="h-6 w-6 text-primary" />
                      </div>
                      <CardTitle className="text-md font-semibold text-card-foreground">{feature.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
                 {tab.features.length === 0 && (
                    <p className="text-muted-foreground col-span-full text-center py-8">Specific AI solutions for {tab.label} are tailored based on enterprise needs. Contact us for a consultation.</p>
                 )}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 text-center md:text-left md:flex md:items-center md:gap-8 p-8 bg-secondary/30 rounded-xl">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-foreground mb-3">Integrate with your Favourite Tools</h3>
            <p className="text-muted-foreground">
              Mendus.ai employs advanced intelligent agents to automate operational tasks and enhance process efficiency. Its seamless integration with existing systems optimizes productivity and supports strategic business objectives.
            </p>
          </div>
          <div className="md:w-1/2">
            <Image
              src="https://placehold.co/600x300.png"
              alt="Solutions Mid Banner"
              width={600}
              height={300}
              className="rounded-lg shadow-md mx-auto"
              data-ai-hint="tools workflow"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

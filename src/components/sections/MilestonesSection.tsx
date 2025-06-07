import { CheckCircle, Milestone, Rocket, Users } from 'lucide-react';

const milestones = [
  {
    icon: Rocket,
    date: 'Q1 2023',
    title: 'SynapseAI Founded',
    description: 'Assembled core team and defined initial vision for agentic AI platform.',
  },
  {
    icon: Milestone,
    date: 'Q3 2023',
    title: 'Alpha Prototype Deployed',
    description: 'Successfully developed and tested the first iteration of our core agent architecture.',
  },
  {
    icon: Users,
    date: 'Q1 2024',
    title: 'First Pilot Program Launched',
    description: 'Partnered with select industry leaders to validate real-world applications.',
  },
  {
    icon: CheckCircle,
    date: 'Q2 2024',
    title: 'Seed Funding Secured',
    description: 'Closed a significant seed round to accelerate research and development.',
  },
];

export default function MilestonesSection() {
  return (
    <section id="milestones" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-primary text-glow-primary">
            Our Journey of Innovation
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Charting our progress as we build the future of intelligent systems.
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-border/30 transform -translate-x-1/2 hidden md:block"></div>

          {milestones.map((milestone, index) => (
            <div key={index} className={`mb-12 flex md:items-center w-full ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              <div className="hidden md:block w-1/2"></div>
              <div className="hidden md:block relative w-1/2">
                 {/* Dot on timeline */}
                <div className={`absolute w-6 h-6 rounded-full bg-accent top-1/2 transform -translate-y-1/2 shadow-lg shadow-accent/50 ${index % 2 === 0 ? '-left-3' : '-right-3'}`}>
                  <div className="absolute inset-0.5 rounded-full bg-background flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-accent"></div>
                  </div>
                </div>
              </div>

              <div className={`w-full md:w-1/2 p-6 rounded-xl border border-border/50 bg-card/60 backdrop-blur-md shadow-xl ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <div className="flex items-center mb-3">
                  <milestone.icon className="w-8 h-8 mr-3 text-accent icon-glow-accent" />
                  <div>
                    <h3 className="text-xl font-semibold text-accent">{milestone.title}</h3>
                    <p className="text-sm font-medium text-primary">{milestone.date}</p>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm">{milestone.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

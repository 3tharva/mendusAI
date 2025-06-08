
import Image from 'next/image';
import { CheckCircle2 } from 'lucide-react';

export default function HowAiAgentsWork() {
  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
            AI Agents
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            How AI Agents Work: AI agents are Digital assistants that streamline complex tasks, process real-time data, and enhance decision-making while effortlessly integrating into existing workflows.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-1">
              <span className="text-primary mr-2">01</span>Understanding & Task Breakdown
            </h3>
            <p className="text-muted-foreground mb-6">
              AI agents use advanced LLMs to understand user objectives, break them down into subtasks, and execute them efficiently.
            </p>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground"><strong className="text-foreground">Natural Language Processing:</strong> Understands commands, queries, and business needs.</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-muted-foreground"><strong className="text-foreground">Task Prioritization:</strong> Breaks down complex objectives into manageable actions.</span>
              </li>
            </ul>
          </div>
          <div>
            <Image
              src="https://placehold.co/600x400.png"
              alt="AI Task Breakdown"
              width={600}
              height={400}
              className="rounded-lg shadow-xl mx-auto"
              data-ai-hint="task workflow"
            />
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: "01", title: "Intelligent Task Breakdown & Execution", description: "Deciphers user objectives, breaks them into structured subtasks, and ensures efficient execution with minimal intervention." },
            { num: "02", title: "Effortless Integration with Business Tools", description: "Works effortlessly within existing workflows, syncing with CRM, finance, marketing, and operational tools to maximize efficiency." },
            { num: "03", title: "Instant Data Processing & Adaptability", description: "Processes structured and unstructured data instantly, adjusting strategies dynamically based on live insights and market trends." },
            { num: "04", title: "AI-Driven Collaboration & Workflow Automation", description: "AI agents work collectively, distributing tasks and streamlining cross-functional operations to boost productivity and reduce bottlenecks." },
          ].map((item) => (
            <div key={item.num} className="p-6 bg-card rounded-xl shadow-lg hover:shadow-primary/20 transition-shadow">
              <h4 className="text-4xl font-bold text-primary mb-3">{item.num}</h4>
              <h3 className="text-xl font-semibold text-foreground mb-2">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

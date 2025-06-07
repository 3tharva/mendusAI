
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle, Brain, Shield, Code, InfinityIcon } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mendus Cognitive Enquiries (FAQ)',
  description: 'Explore frequently posited questions regarding Mendus technology, ethical frameworks, agentic capabilities, and the future of AI.',
};

export default function SupportFaqPage() {
  const faqs = [
    {
      question: "How does Mendus ensure ethical alignment in autonomous AI decision-making?",
      answer: "Mendus employs a multi-layered Ethical Governance Layer (EGL) embedded within the Eon Platform. This includes: 1) Axiomatic Safety Protocols: Core, immutable principles guiding agent behavior. 2) Real-time Sentience Monitoring: Continuous analysis of agent decision pathways against established ethical matrices. 3) Human-in-the-loop Escalation: Critical decisions with high uncertainty or ethical ambiguity are flagged for human oversight via our Nexus Sentinel interface. 4) Verifiable Audit Trails: All agent decisions and their underlying rationales are recorded on a decentralized, immutable ledger for transparency and accountability.",
      icon: Shield,
    },
    {
      question: "What are the theoretical limits of agentic learning within the Mendus Eon ecosystem?",
      answer: "The Eon Platform is architected for continuous, unbounded learning. Theoretical limits are primarily constrained by available computational resources and the complexity of the data environment. Our research into Quantum-Inspired Compute Cores and Decentralized Federated Sentience aims to push these boundaries exponentially. While true AGI (Artificial General Intelligence) remains a research frontier, Mendus agents are designed to approach increasingly sophisticated levels of specialized and generalized intelligence through emergent meta-learning.",
      icon: Brain,
    },
    {
      question: "How does Mendus address the 'black box' problem in complex AI models?",
      answer: "We utilize a Neuro-Symbolic AI framework. This hybrid approach combines deep learning's pattern recognition with symbolic AI's logical reasoning. This allows for greater explainability (XAI) as the symbolic layer can often provide a causal trace for decisions made by the neural network. Furthermore, our Ethical Governance Layer includes tools for introspective analysis by the agents themselves, allowing them to articulate (to a degree) their decision-making processes.",
      icon: Code,
    },
    {
      question: "What distinguishes Mendus Digital Sentinels from conventional AI assistants or RPA bots?",
      answer: "Mendus Sentinels are not pre-programmed automatons; they are autonomous cognitive entities. Key differentiators include: 1) Proactive Autonomy: Sentinels anticipate needs and act without explicit instruction, beyond simple task automation. 2) Complex Reasoning: They can handle ambiguous situations, strategize, and solve novel problems. 3) Continuous Meta-Learning: Sentinels learn from every interaction and observation across the federated network, constantly improving their capabilities. 4) Emergent Collaboration: Sentinels can form ad-hoc swarms to tackle large-scale problems dynamically.",
      icon: InfinityIcon,
    },
    {
      question: "What measures are in place to prevent misuse of Mendus's advanced AI technologies?",
      answer: "Preventing misuse is paramount. Our strategy includes: 1) Rigorous Client Vetting: We partner with organizations committed to ethical AI deployment. 2) Embedded Ethical Safeguards: As mentioned, the EGL is designed to prevent harmful actions. 3) Use-Case Restrictions: Certain high-risk applications are explicitly proscribed. 4) Continuous Monitoring & Auditing: We maintain oversight capabilities and conduct regular audits. 5) Collaboration with Regulatory Bodies: We actively engage with policymakers to help shape responsible AI governance frameworks globally.",
      icon: Shield,
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow">
        <section className="py-16 md:py-24 bg-gradient-to-br from-background to-secondary/30 text-center">
          <div className="container mx-auto px-4 md:px-6">
            <HelpCircle className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-primary mb-6">
              Cognitive Enquiries & Clarifications
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Navigating the frontiers of advanced intelligence often sparks profound questions. Explore our compendium of frequently posited enquiries regarding Mendus technologies and their implications.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6 max-w-4xl">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem value={`item-${index}`} key={index} className="border-b-border/50">
                  <AccordionTrigger className="py-6 text-left hover:no-underline">
                    <div className="flex items-start gap-4">
                      <faq.icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                      <span className="text-lg font-semibold text-foreground">{faq.question}</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pt-2 pb-6 text-muted-foreground font-body text-base pl-10 pr-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <p className="mt-12 text-center text-muted-foreground font-body">
              For enquiries beyond this scope, please <a href="/support/contact" className="text-primary hover:underline">interface with our Nexus Team</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}


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
  title: 'Mendus Frequently Asked Questions (FAQ) - Probing the Cognitive Horizon',
  description: 'Find answers to common yet profound questions about Mendus technology, the ethics of advanced AI, agentic capabilities, and the unfolding future of artificial intelligence.',
};

export default function SupportFaqPage() {
  const faqs = [
    {
      question: "How does Mendus ensure its AI agents make ethical decisions, especially in autonomous scenarios?",
      answer: "Mendus embeds a multi-layered Ethical Governance Layer (EGL) within its Eon Platform. This framework includes: 1) Axiomatic Safety Constraints: Immutable core principles guiding AI behavior, derived from consensus ethical philosophy. 2) Real-time Ethical Calculus Engine: AI decision pathways are continuously evaluated against complex ethical models and potential second-order effects. 3) Human Oversight & Appeal: Critical or ethically ambiguous decisions are flagged for human review through a secure interface, with clear protocols for intervention. 4) Transparent & Immutable Audit Logs: All significant AI decisions and their primary influencing factors are recorded on a distributed ledger for accountability and forensic analysis. We are also researching 'explainable AI' (XAI) methods suitable for neuro-symbolic architectures.",
      icon: Shield,
    },
    {
      question: "What are the theoretical and practical learning limits for AI agents within the Mendus Eon ecosystem?",
      answer: "The Eon Platform is engineered for continuous, open-ended meta-learning. Theoretically, the primary constraints are computational capacity and the complexity of accessible, high-quality data. Our research in quantum-inspired compute fabrics and federated sentience (collective learning across distributed agents without raw data sharing) aims to progressively expand these limits. While true Artificial General Intelligence (AGI) with human-equivalent or superior general problem-solving is a long-term research objective, Mendus agents are designed to achieve super-human performance in specialized domains and exhibit increasing levels of generalized intelligence through ongoing, adaptive learning.",
      icon: Brain,
    },
    {
      question: "How does Mendus address the 'black box' problem often associated with complex AI, ensuring decision transparency?",
      answer: "We primarily utilize a Neuro-Symbolic AI framework. This hybrid approach synergizes the pattern-recognition strengths of deep learning (neural networks) with the logical reasoning and explicit knowledge representation capabilities of symbolic AI. This inherently provides greater explainability, as the symbolic component can often articulate the logical steps and knowledge used in a decision. Furthermore, our Ethical Governance Layer includes protocols for agents to generate simplified causal explanations for their actions, and we are actively developing advanced XAI techniques tailored to these hybrid architectures.",
      icon: Code,
    },
    {
      question: "What distinguishes Mendus Digital Workers from conventional AI assistants, RPA bots, or standard machine learning models?",
      answer: "Mendus Digital Workers are designed as autonomous cognitive entities, not just pre-programmed tools. Key distinctions include: 1) Proactive Autonomy & Goal-Oriented Behavior: Digital Workers can interpret high-level objectives, formulate complex plans, and execute them with minimal human intervention, adapting to unforeseen circumstances. 2) Advanced Reasoning & Problem Solving: They can handle ambiguity, strategize under uncertainty, and devise novel solutions to complex problems. 3) Continuous Meta-Learning & Collective Intelligence: Digital Workers learn from every interaction and observation, sharing insights across their federated network (via the Eon Platform) to collectively enhance their capabilities and knowledge. 4) Dynamic Teaming & Emergent Collaboration: Digital Workers can spontaneously form ad-hoc teams, dynamically allocating tasks and coordinating efforts to tackle large-scale, multifaceted challenges.",
      icon: InfinityIcon,
    },
    {
      question: "What safeguards are in place to prevent the misuse of Mendus's advanced AI capabilities?",
      answer: "Preventing misuse is a foundational design principle and an ongoing operational priority. Our multi-faceted strategy includes: 1) Rigorous Partner Vetting & Ethical Alignment: We selectively collaborate with organizations demonstrating a strong commitment to responsible AI deployment and human-centric values. 2) Embedded Ethical Governance Layer (EGL): The EGL includes robust safety protocols, behavioral constraints, and 'circuit breakers' designed to prevent harmful or unintended actions. 3) Restricted Use-Case Deployments: Certain high-risk applications, particularly those with potential for autonomous harm, are explicitly proscribed or subject to extreme scrutiny and human-in-the-loop control. 4) Continuous Monitoring & Anomaly Detection: We maintain vigilant oversight of deployed AI systems, using advanced analytics to detect and investigate anomalous behavior or potential misuse. 5) Proactive Engagement with Regulators & Standards Bodies: We actively contribute to and collaborate with global policymakers and research institutions to help shape responsible AI governance frameworks and technical safety standards.",
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
              Cognitive Enquiries
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Venturing into the frontiers of advanced artificial intelligence often illuminates complex questions. Herein lie responses to prevalent yet profound enquiries regarding Mendus technologies, our ethical commitments, and their societal implications.
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
              For more intricate dialogues or specific technical investigations, please initiate a formal interface via our demonstration request channels.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

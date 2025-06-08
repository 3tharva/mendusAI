
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
  title: 'Mendus Frequently Asked Questions (FAQ)',
  description: 'Find answers to common questions about Mendus technology, ethical AI, agent capabilities, and the future of artificial intelligence.',
};

export default function SupportFaqPage() {
  const faqs = [
    {
      question: "How does Mendus ensure its AI makes ethical decisions?",
      answer: "Mendus uses a multi-layered Ethical Governance Layer (EGL) within its Eon Platform. This includes: 1) Core Safety Rules: Fundamental principles guiding AI behavior. 2) Real-time Ethical Monitoring: AI decision processes are continuously checked against ethical standards. 3) Human Oversight: Critical or ethically ambiguous decisions are flagged for human review. 4) Transparent Audit Trails: All AI decisions and their reasoning are recorded securely for accountability.",
      icon: Shield,
    },
    {
      question: "What are the learning limits for AI in the Mendus Eon ecosystem?",
      answer: "The Eon Platform is designed for continuous, open-ended learning. Current limits are mainly related to computing power and data complexity. Our research in advanced computing and shared AI learning aims to push these limits further. While true Artificial General Intelligence (AGI) is still a research goal, Mendus agents are built to achieve increasingly advanced levels of specialized and general intelligence through ongoing learning.",
      icon: Brain,
    },
    {
      question: "How does Mendus address the 'black box' problem in complex AI?",
      answer: "We use a Neuro-Symbolic AI framework. This hybrid approach combines deep learning (good at finding patterns) with symbolic AI (good at logical reasoning). This makes AI decisions more explainable, as the logical part can often clarify why a decision was made. Our Ethical Governance Layer also includes tools for AI agents to analyze and explain their own decision-making processes.",
      icon: Code,
    },
    {
      question: "What makes Mendus Digital Workers different from regular AI assistants or bots?",
      answer: "Mendus Digital Workers are more than just pre-programmed tools; they are autonomous thinking agents. Key differences include: 1) Proactive Independence: Digital Workers anticipate needs and act without explicit instructions. 2) Complex Reasoning: They can handle unclear situations, strategize, and solve new problems. 3) Continuous Shared Learning: Digital Workers learn from every interaction across their network, constantly improving. 4) Dynamic Teamwork: Digital Workers can form temporary teams to tackle large-scale problems together.",
      icon: InfinityIcon,
    },
    {
      question: "What measures prevent misuse of Mendus's advanced AI?",
      answer: "Preventing misuse is a top priority. Our strategy includes: 1) Careful Partner Selection: We work with organizations committed to ethical AI use. 2) Built-in Ethical Safeguards: The EGL is designed to prevent harmful actions. 3) Use-Case Restrictions: Certain high-risk applications are not permitted. 4) Continuous Monitoring: We maintain oversight and conduct regular audits. 5) Collaboration with Regulators: We actively work with policymakers to help create responsible AI governance standards globally.",
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
              Frequently Asked Questions
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Exploring advanced AI can bring up many questions. Here are answers to some common inquiries about Mendus technologies and their implications.
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
              For questions not covered here, please <a href="/support/contact" className="text-primary hover:underline">contact our team</a>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

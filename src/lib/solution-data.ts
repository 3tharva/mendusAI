
import type { LucideIcon } from 'lucide-react';
import {
  ShieldCheck, Users, Headset, Truck, DollarSign, Lock, ServerIcon, Archive,
  RefreshCw, LayoutDashboard, ShoppingCart, Brain, Settings, BarChart3, Zap, Cpu, Lightbulb, UserCog
} from 'lucide-react';

export interface SolutionUseCase {
  title: string;
  description: string;
  imageHint: string;
}

export interface Solution {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  iconColorClass?: string;
  keyFeatures: string[];
  benefits: string[];
  exampleUseCases: SolutionUseCase[];
  heroImage: {
    path: string;
    hint: string;
  };
}

export const solutions: Solution[] = [
  {
    slug: 'risk-compliance-management',
    title: 'Risk and Compliance Management',
    shortDescription: 'Stay ahead of regulatory changes with workflows that proactively identify risks, ensure policy enforcement, and maintain full audit readiness at scale.',
    longDescription: 'Step beyond reactive compliance and embrace proactive risk neutralization. Mendus Sentinels continuously model complex risk landscapes, dynamically adapt your operations to evolving regulations, and provide immutable audit trails for unparalleled transparency and foresight in governance.',
    icon: ShieldCheck,
    iconColorClass: 'text-green-500',
    keyFeatures: [
      'Hyper-dimensional risk modeling for identifying "black swan" events.',
      'Autonomous regulatory interpretation and real-time policy adaptation.',
      'Self-correcting operational controls for automated compliance remediation.',
      'Zero-knowledge proof systems for privacy-preserving audits.',
      'Predictive modeling of emerging ethical dilemmas in AI operations.',
    ],
    benefits: [
      'Drastically reduce exposure to unforeseen risks and compliance breaches.',
      'Achieve continuous compliance with minimal human intervention.',
      'Enhance stakeholder trust with transparent, verifiable governance.',
      'Future-proof operations against complex regulatory landscapes.',
      'Transform compliance from a cost center to a strategic advantage.',
    ],
    exampleUseCases: [
      { title: 'AI-Driven Algorithmic Trading Oversight', description: 'Sentinels monitor high-frequency trading for compliance with financial regulations, preventing market manipulation and ensuring ethical execution.', imageHint: 'stock trading compliance screen' },
      { title: 'Autonomous Smart Contract Assurance', description: 'AI agents audit smart contracts for security vulnerabilities and adherence to intended parameters, pre-empting exploits.', imageHint: 'blockchain security abstract' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'risk management chart graph' },
  },
  {
    slug: 'customer-services',
    title: 'Customer Services',
    shortDescription: 'Enhance customer experiences with smart automation that understands intent, personalizes interactions, and ensures quick resolutions across all service channels.',
    longDescription: 'Elevate customer interactions from transactions to synergistic partnerships. Mendus Sentinels deliver hyper-personalized engagement by deeply understanding customer intent, predicting future needs, and proactively offering solutions. This fosters unprecedented loyalty and value co-creation.',
    icon: Users,
    iconColorClass: 'text-red-400',
    keyFeatures: [
      'Empathetic AI with advanced natural language understanding (NLU) and emotional intelligence.',
      'Predictive customer journey orchestration and pre-emptive issue resolution.',
      'Dynamic, context-aware knowledge synthesis for instant, accurate information.',
      'Seamless omnichannel integration, including future BCI support.',
      'AI-driven generation of novel solutions for unique customer challenges.',
    ],
    benefits: [
      'Cultivate profound customer loyalty and transform users into brand evangelists.',
      'Shift customer service from a cost center to a revenue and innovation driver.',
      'Augment human agents, enabling focus on complex, high-value strategic interactions.',
      'Gain deep, actionable intelligence into customer desires and market trends.',
      'Deliver consistently superior experiences adapted to individual preferences.',
    ],
    exampleUseCases: [
      { title: 'Proactive AI Concierge for Complex Systems', description: 'AI Sentinels anticipate user needs for sophisticated products (e.g., personalized medicine), offering guidance and resources proactively.', imageHint: 'ai assistant futuristic interface' },
      { title: 'AI-Mediated Multi-Party Conflict Resolution', description: 'Sentinels facilitate dispute resolution by impartially analyzing perspectives, simulating outcomes, and proposing equitable agreements.', imageHint: 'negotiation interface abstract' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'customer service ai interaction' },
  },
   {
    slug: 'customer-support',
    title: 'Customer Support',
    shortDescription: 'Deliver exceptional customer support with fast response times, knowledgeable agents, and 24/7 assistance to ensure seamless experiences and satisfaction.',
    longDescription: 'Transition to intelligent, autonomous support ecosystems. Mendus Sentinels manage the full spectrum of support, from instant inquiry resolution to sophisticated diagnostics. The system learns continuously, achieving near-perfect first-contact resolution and escalating only truly novel challenges to human experts.',
    icon: Headset,
    iconColorClass: 'text-blue-500',
    keyFeatures: [
      'Multi-tiered AI support architecture (conversational AI to deep diagnostic agents).',
      'Automated root cause analysis using advanced inferential reasoning.',
      'Self-evolving knowledge bases from every resolved incident.',
      'Predictive resource allocation for peak support periods.',
      'AI-generated, personalized resolution guides and interactive troubleshooting.',
    ],
    benefits: [
      'Achieve sub-second resolution for most support inquiries.',
      'Scale support capacity exponentially without linear cost increases.',
      'Empower human specialists to focus on AI training and unique edge cases.',
      'Build system-wide resilience and drive continuous improvement.',
      'Provide 24/7/365 support across all channels and languages.',
    ],
    exampleUseCases: [
      { title: 'Zero-Touch Resolution for Enterprise SaaS Platforms', description: 'Sentinels automatically detect, diagnose, and resolve platform issues, often before users are impacted, meticulously documenting for system improvement.', imageHint: 'saas dashboard health' },
      { title: 'AI-Powered Personalized Onboarding & Upskilling', description: 'Sentinels guide new users through complex software or job roles with adaptive tutorials tailored to individual learning styles.', imageHint: 'ai tutorial personalized learning' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'support center ai future' },
  },
  {
    slug: 'digital-supply-chain',
    title: 'Digital Supply Chain',
    shortDescription: 'Predict demand, track shipments, and manage inventory more efficiently through autonomous agents that power a connected and agile supply chain.',
    longDescription: 'Evolve your supply chain into an Intelligent Global Logistics Fabric. Mendus AI agents orchestrate a dynamic, self-optimizing network that anticipates disruptions, autonomously re-routes resources, and manages inventory with hyper-efficiency. This enables true logistical resilience and adaptive capacity for global commerce.',
    icon: Truck,
    iconColorClass: 'text-blue-400',
    keyFeatures: [
      'Quantum-calibrated simulations for predictive disruption modeling.',
      'Autonomous multi-modal transport orchestration (drones, autonomous ships).',
      'Decentralized inventory management using DLT and AI forecasting.',
      'AI-driven provenance verification for ethical sourcing.',
      'Real-time carbon footprint analysis and optimization.',
    ],
    benefits: [
      'Attain near-zero unplanned disruptions through predictive mitigation.',
      'Dramatically reduce logistical costs and ecological impact.',
      'Achieve immutable, real-time, end-to-end visibility.',
      'Enable dynamically adaptive and resilient global trade networks.',
      'Optimize resource allocation and Just-In-Time delivery.',
    ],
    exampleUseCases: [
      { title: 'Autonomous Interplanetary Resource Logistics Network', description: 'AI agents coordinate resource extraction, processing, and transport between Earth, Moon, and Mars, optimizing for transit windows and energy.', imageHint: 'space logistics futuristic' },
      { title: 'Self-Healing Pharmaceutical Cold Chains', description: 'Sentinels monitor global pharmaceutical supply lines, autonomously rerouting temperature-sensitive biologics and verifying cold-chain integrity.', imageHint: 'pharma supply chain secure' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'global logistics abstract' },
  },
  {
    slug: 'finance-services',
    title: 'Financial Services',
    shortDescription: 'Automate financial workflows with AI agents for faster approvals, risk detection, compliance, and smarter decision-making across financial operations.',
    longDescription: 'Pioneer next-gen financial operations. Mendus provides cognitive architecture for autonomous financial instruments, hyper-accurate predictive market modeling, and automated systemic risk mitigation. Our Sentinels conduct continuous economic forecasting and intelligent treasury management, fostering stable and efficient capital markets.',
    icon: DollarSign,
    iconColorClass: 'text-yellow-500',
    keyFeatures: [
      'AI-generated synthetic financial instruments with adaptive risk parameters.',
      'Predictive modeling of macroeconomic shifts and financial network risks.',
      'Automated regulatory reporting and compliance across diverse financial frameworks.',
      'DAOs for sophisticated, transparent investment and governance.',
      'Real-time fraud detection using advanced anomaly detection.',
    ],
    benefits: [
      'Enhance capital market efficiency and liquidity.',
      'Proactively identify and mitigate systemic financial risks.',
      'Democratize access to sophisticated financial instruments.',
      'Dramatically reduce operational costs through hyper-automation.',
      'Achieve unparalleled financial transparency and auditability.',
    ],
    exampleUseCases: [
      { title: 'AI-Orchestrated Global Economic Stabilizer', description: 'AI agents monitor global economic indicators, identify instabilities, and propose pre-emptive interventions to maintain financial equilibrium.', imageHint: 'global economy dashboard' },
      { title: 'Autonomous Insurance & Risk Underwriting Platforms', description: 'Sentinels assess complex insurance risks, generate hyper-personalized policies, and autonomously process claims with high accuracy.', imageHint: 'ai insurance innovation' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'finance data visualization' },
  },
  {
    slug: 'agentic-security-operations',
    title: 'Agentic Security Operations',
    shortDescription: 'Secure your infrastructure with agents that detect threats in real time, automate response actions, and maintain continuous security posture monitoring.',
    longDescription: 'Deploy the Cognitive Cyber Defense Grid. Autonomous Mendus Sentinels proactively hunt, identify, analyze, and neutralize advanced cyber threats, including AI-driven attacks, in real-time. The Grid learns from every encounter, collectively evolving its defensive strategies to ensure persistent digital sovereignty.',
    icon: Lock,
    iconColorClass: 'text-orange-500',
    keyFeatures: [
      'Autonomous AI "Red Teams" and "Blue Teams" for continuous vulnerability discovery.',
      'Predictive threat intelligence leveraging dark web analysis and global honeypots.',
      'Self-deploying, adaptive security countermeasures applied at network speed.',
      'Quantum-resistant encryption protocols and AI-driven cryptographic agility.',
      'AI-generated incident response plans and automated forensic analysis.',
    ],
    benefits: [
      'Achieve sub-millisecond threat detection and automated neutralization.',
      'Proactively defend against zero-day exploits and AI-generated malware.',
      'Reduce reliance on human analysts for tactical threat response.',
      'Create a self-healing, dynamically resilient digital infrastructure.',
      'Ensure operational continuity during large-scale cyber onslaughts.',
    ],
    exampleUseCases: [
      { title: 'Autonomous Swarm Defense Against Distributed Attacks', description: 'AI Sentinels dynamically reconfigure network topologies and deploy intelligent decoys to neutralize massive DDoS and botnet attacks.', imageHint: 'cyber defense shield network' },
      { title: 'AI-Driven Active Deception Networks (Advanced Honeypots)', description: 'Sentinels create hyper-realistic decoy environments to trap, analyze, and learn from sophisticated cyber attackers, gathering intelligence on their TTPs.', imageHint: 'digital trap security' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'cybersecurity abstract code' },
  },
  {
    slug: 'it-operations-service-management',
    title: 'IT Operations and Service Management',
    shortDescription: 'Optimize system uptime and reduce manual workload by using autonomous workflows to handle incident response, alerts, and routine service tasks.',
    longDescription: 'Realize Autonomic IT Operations. Mendus AI agents autonomously manage your IT lifecycle, from predictive hardware failure and dynamic resource allocation, to automated software deployment and intelligent incident resolution. This transforms IT operations to proactive, self-optimizing system stewardship.',
    icon: ServerIcon,
    iconColorClass: 'text-purple-500',
    keyFeatures: [
      'Predictive auto-scaling and resource optimization for cloud/edge environments.',
      'AI-driven root cause analysis for complex, cascading system failures.',
      'Automated generation and execution of remediation plans for IT incidents.',
      'Zero-touch infrastructure provisioning and declarative configuration management.',
      'AI-powered capacity planning and performance forecasting.',
    ],
    benefits: [
      'Achieve unprecedented levels of system uptime and availability.',
      'Drastically reduce IT operational expenditures and TCO.',
      'Enable IT teams to focus on strategic innovation.',
      'Create an infinitely scalable, self-healing, and adaptive IT environment.',
      'Automate compliance with internal SLAs and external regulations.',
    ],
    exampleUseCases: [
      { title: 'Self-Optimizing Global Content Delivery Network (CDN)', description: 'AI agents dynamically adjust content caching, server loads, and network paths in real-time for optimal, low-latency content delivery worldwide.', imageHint: 'global network data flow' },
      { title: 'Autonomous Database Performance and Resilience Management', description: 'Sentinels monitor database performance, autonomously performing schema optimization, index management, sharding, replication, and failover.', imageHint: 'database management futuristic' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'it operations server room' },
  },
  {
    slug: 'asset-management',
    title: 'Asset Management',
    shortDescription: 'Designed to integrate smoothly with existing business processes and enterprise systems, Mendus AI agents ensure minimal disruption during implementation.', // Note: This description seems generic for Asset Management. I'll keep it as provided but flag for potential review.
    longDescription: 'Implement Intelligent Asset Orchestration. Mendus AI agents track, manage, and optimize the lifecycle of diverse assets – physical infrastructure, industrial equipment, digital IP, and AI agent capabilities. This ensures maximum value extraction, predictive maintenance, and strategic resource deployment.',
    icon: Archive,
    iconColorClass: 'text-green-600',
    keyFeatures: [
      'High-fidelity digital twin creation and real-time synchronization for all asset classes.',
      'Predictive failure analysis using multi-sensor fusion and physics-informed AI.',
      'AI-driven optimization of asset utilization and redeployment strategies.',
      'Automated compliance tracking for asset-specific regulations.',
      'Blockchain-based immutable records for asset provenance and history.',
    ],
    benefits: [
      'Maximize return on asset investments through optimized utilization.',
      'Minimize unplanned downtime and maintenance costs via predictive analytics.',
      'Optimize resource allocation and capital planning across the enterprise.',
      'Enable circular economy models through intelligent end-of-life asset management.',
      'Enhance operational safety and ensure continuous regulatory compliance.',
    ],
    exampleUseCases: [
      { title: 'Autonomous Fleet Management for Extraterrestrial Mining', description: 'AI Sentinels manage autonomous mining rovers on asteroids, optimizing routes, predicting wear, scheduling maintenance, and coordinating transport.', imageHint: 'space mining robots asteroid' },
      { title: 'Cognitive Asset Management for Enterprise AI Models', description: 'Tracks performance, bias drift, and strategic value of AI models, recommending retraining, retirement, or novel applications to optimize the AI portfolio.', imageHint: 'ai model performance dashboard' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'asset management tech abstract' },
  },
  {
    slug: 'revenue-cycle-management',
    title: 'Revenue Cycle Management',
    shortDescription: 'Accelerate billing, claims, and collections with autonomous workflows that reduce errors, shorten cycles, and improve financial outcomes across operations.',
    longDescription: 'Achieve Automated Value Stream Optimization. Mendus AI agents manage the entire revenue lifecycle, from predictive lead qualification and dynamic pricing, to automated invoicing, intelligent claims processing, and adaptive collections. This ensures maximum value capture and financial agility.',
    icon: RefreshCw,
    iconColorClass: 'text-pink-500',
    keyFeatures: [
      'AI-driven predictive Customer Lifetime Value (CLTV) modeling.',
      'Dynamic, real-time pricing adjustments based on market micro-segments.',
      'Automated, multi-jurisdictional tax compliance for all transactions.',
      'Intelligent dispute resolution and personalized collections workflows.',
      'Predictive cash flow modeling and working capital optimization.',
    ],
    benefits: [
      'Significantly accelerate cash flow velocity and reduce DSO.',
      'Maximize revenue realization through optimized pricing and reduced leakage.',
      'Automate over 95% of manual revenue cycle tasks.',
      'Gain real-time, predictive insights into financial health.',
      'Enhance customer satisfaction through efficient financial interactions.',
    ],
    exampleUseCases: [
      { title: 'AI-Powered Adaptive Subscription Management Ecosystems', description: 'Sentinels manage the subscriber journey from acquisition and dynamic tiering to usage-based billing and proactive retention offers.', imageHint: 'subscription data flow chart' },
      { title: 'Autonomous Royalty and Licensing Management for Digital IP', description: 'AI agents track usage of digital IP, calculate royalties, and automate secure payouts using smart contracts.', imageHint: 'digital rights blockchain' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'revenue cycle data abstract' },
  },
  {
    slug: 'ai-dashboard-governance',
    title: 'AI Dashboard for Governance',
    shortDescription: 'Gain real-time oversight with dynamic dashboards that track agent activities, enforce policies, and ensure accountability across workflows and decision-making.',
    longDescription: 'Establish comprehensive control with the AI Governance & Oversight Matrix. This Mendus solution provides a dynamic dashboard for real-time monitoring, auditing, and governance of all AI agents. Ensure ethical alignment, track emergent behaviors, verify compliance, and maintain ultimate human oversight.',
    icon: LayoutDashboard,
    iconColorClass: 'text-indigo-500',
    keyFeatures: [
      'Real-time visualization of AI agent decision pathways and cognitive states.',
      'Automated detection of ethical boundary drift and emergent bias.',
      'Immutable, verifiable audit trails of all AI agent actions.',
      'Sophisticated human-in-the-loop (HITL) protocols for intervention.',
      'Scenario modeling for testing AI responses to novel ethical challenges.',
    ],
    benefits: [
      'Maintain robust ethical control and accountability over autonomous AI.',
      'Ensure continuous compliance with evolving AI regulations.',
      'Increase stakeholder trust through radical transparency in AI operations.',
      'Rapidly identify, diagnose, and remediate AI performance deviations.',
      'Foster a culture of responsible AI development and deployment.',
    ],
    exampleUseCases: [
      { title: 'Ethical Oversight for Autonomous Financial Trading Systems', description: 'The Matrix monitors AI trading algorithms for market manipulation or deviations from fiduciary duty, allowing real-time human intervention.', imageHint: 'ai trading ethics monitor' },
      { title: 'Compliance and Fairness Auditing for AI in Healthcare Diagnostics', description: 'Tracks diagnostic AI for fairness across demographics, adherence to clinical guidelines, and patient data privacy, flagging anomalies for human review.', imageHint: 'healthcare ai ethics dashboard' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'ai governance dashboard interface' },
  },
  {
    slug: 'procurement',
    title: 'Procurement',
    shortDescription: 'Streamline sourcing and contract management by deploying AI-driven workflows that accelerate approvals, enforce compliance, and optimize vendor performance.',
    longDescription: 'Revolutionize procurement with Predictive Strategic Sourcing. Mendus AI agents analyze global markets, predict resource scarcity, identify optimal suppliers, and automate complex negotiation and purchasing. This ensures a continuous, cost-effective, and ethical flow of resources.',
    icon: ShoppingCart,
    iconColorClass: 'text-purple-400',
    keyFeatures: [
      'AI-powered risk modeling for geopolitical and systemic supply chain vulnerabilities.',
      'Autonomous discovery, vetting, and monitoring of suppliers at all tiers.',
      'Generative AI for drafting, analyzing, and negotiating complex procurement contracts.',
      'Predictive commodity pricing models and automated risk-hedging.',
      'AI-driven sustainable and ethical sourcing verification.',
    ],
    benefits: [
      'Secure critical resources proactively and achieve sustainable cost savings.',
      'Build hyper-resilient, ethically transparent, and adaptive supply networks.',
      'Automate intricate procurement cycles, reducing lead times and manual effort.',
      'Gain a strategic edge through superior market intelligence and agility.',
      'Optimize working capital and reduce inventory holding costs.',
    ],
    exampleUseCases: [
      { title: 'Autonomous Sourcing of Strategic & Rare Earth Materials', description: 'AI Sentinels monitor global geological surveys, mining operations, and geopolitical stability to secure sustainable sources of critical materials.', imageHint: 'ethical mining supply chain' },
      { title: 'AI-Negotiated Dynamic Energy Procurement for Hyperscale Facilities', description: 'Sentinels continuously analyze energy markets, predict price fluctuations, and autonomously negotiate optimal real-time energy contracts for large operations.', imageHint: 'energy procurement data center' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'procurement network optimization' },
  },
  {
    slug: 'human-resources',
    title: 'Human Resources Transformation',
    shortDescription: 'Automate talent acquisition, employee engagement, and workforce analytics with AI.',
    longDescription: 'Re-engineer your human capital strategy. Mendus provides intelligent solutions to automate and optimize the entire employee lifecycle. From identifying and attracting top-tier global talent using predictive analytics to fostering deep employee engagement through personalized development pathways and providing actionable insights into workforce dynamics, our AI elevates HR to a strategic driver of organizational excellence and innovation.',
    icon: UserCog,
    iconColorClass: 'text-teal-500',
    keyFeatures: [
      'Predictive talent acquisition: Identifying passive candidates and forecasting future skill needs.',
      'AI-driven personalized learning and development paths for continuous upskilling.',
      'Intelligent employee sentiment analysis and proactive engagement strategies.',
      'Automated, bias-mitigated candidate screening and interview scheduling.',
      'Advanced workforce analytics for optimizing team composition and performance.',
      'AI-powered tools for fair performance management and compensation structuring.',
    ],
    benefits: [
      'Significantly reduce time-to-hire and improve quality of talent acquisition.',
      'Boost employee engagement, satisfaction, and retention.',
      'Develop a highly skilled, agile, and future-ready workforce.',
      'Mitigate bias in HR processes, fostering a diverse and inclusive workplace.',
      'Gain data-driven insights for strategic workforce planning.',
      'Automate routine HR tasks, freeing HR professionals for strategic initiatives.',
    ],
    exampleUseCases: [
      { title: 'AI-Driven Global Talent Scouting & Matching', description: 'Sentinels continuously scan global talent pools, academic publications, and professional networks to identify individuals with unique skill sets, initiating personalized outreach.', imageHint: 'talent acquisition global network' },
      { title: 'Adaptive Employee Wellbeing & Burnout Prevention System', description: 'AI analyzes anonymized work patterns and communication sentiment to identify early signs of burnout, proactively suggesting interventions.', imageHint: 'employee wellbeing data chart' },
      { title: 'Dynamic Skill Gap Analysis & Personalized Training Orchestration', description: 'AI maps current organizational skills against future needs, identifies gaps, and automatically curates personalized training modules.', imageHint: 'skill development futuristic interface' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'hr human resources tech' },
  }
];

export const getSolutionBySlug = (slug: string): Solution | undefined => {
  return solutions.find((solution) => solution.slug === slug);
};

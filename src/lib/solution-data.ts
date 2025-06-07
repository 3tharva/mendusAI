
import type { LucideIcon } from 'lucide-react';
import {
  ShieldCheck, Users, Headset, Truck, DollarSign, Lock, ServerIcon, Archive,
  RefreshCw, LayoutDashboard, ShoppingCart, Brain, Settings, BarChart3, Zap, Cpu, Lightbulb
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
    title: 'Predictive Risk & Axiomatic Compliance',
    shortDescription: 'AI agents continuously model systemic risks and enforce ethical/regulatory axioms across operations.',
    longDescription: 'Transition from reactive compliance to proactive, axiomatic governance. Our solution employs swarms of specialized AI agents to continuously model n-th order systemic risks, dynamically adapt operational parameters to ensure adherence to evolving regulatory landscapes (interplanetary included), and provide verifiable audit trails on a decentralized ledger for unparalleled transparency.',
    icon: ShieldCheck,
    iconColorClass: 'text-green-500',
    keyFeatures: [
      'Quantum-entropic risk modeling for black swan event prediction.',
      'Decentralized autonomous organization (DAO) for compliance rule updates.',
      'Self-healing systems for automated remediation of compliance breaches.',
      'Zero-knowledge proof generation for privacy-preserving audits.',
    ],
    benefits: [
      'Achieve near-zero compliance deviation & associated penalties.',
      'Gain predictive insight into emergent systemic vulnerabilities.',
      'Drastically reduce audit overhead via cryptographic verifiability.',
      'Future-proof operations against regulatory turbulence and complexity.',
    ],
    exampleUseCases: [
      { title: 'Autonomous Algorithmic Trading Compliance', description: 'AI Sentinels monitor high-frequency trading algorithms in real-time, ensuring adherence to complex financial regulations across multiple jurisdictions simultaneously.', imageHint: 'futuristic stock trading compliance' },
      { title: 'Self-Adapting Smart Contract Audits', description: 'Agentic systems continuously audit and dynamically patch smart contracts on blockchain networks to prevent exploits and ensure intended operational logic.', imageHint: 'blockchain smart contract security' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'abstract risk graph security' },
  },
  {
    slug: 'customer-services',
    title: 'Cognitive Customer Symbiosis',
    shortDescription: 'Hyper-personalized, predictive customer engagement driven by empathetic AI Sentinels.',
    longDescription: 'Elevate customer interaction to a state of cognitive symbiosis. Mendus Sentinels offer hyper-personalized engagement by understanding not just stated needs but latent desires and future requirements through advanced sentiment analysis, behavioral modeling, and predictive analytics. Experience proactive support and value co-creation like never before.',
    icon: Users,
    iconColorClass: 'text-red-400',
    keyFeatures: [
      'Empathetic AI with advanced emotional quotient (EQ) modeling.',
      'Predictive customer journey orchestration & pre-emptive issue resolution.',
      'Dynamic, context-aware knowledge synthesis for instant, accurate answers.',
      'Seamless integration across all communication dimensions (including neural interfaces in future iterations).',
    ],
    benefits: [
      'Achieve unprecedented levels of customer loyalty and advocacy.',
      'Transform customer service from a cost center to a value-generation engine.',
      'Reduce cognitive load on human agents, freeing them for high-value interactions.',
      'Gain deep, actionable insights into evolving customer psychographics.',
    ],
    exampleUseCases: [
      { title: 'Proactive Sentient Concierge Service', description: 'AI anticipates user needs for complex products/services, offering guidance, resources, and solutions before a request is even formulated.', imageHint: 'ai concierge futuristic ui' },
      { title: 'AI-Mediated Conflict Resolution & Negotiation', description: 'Sentinels facilitate complex customer disputes by understanding all perspectives and proposing optimal, mutually beneficial resolutions.', imageHint: 'ai negotiation interface' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'ai customer interaction futuristic' },
  },
   {
    slug: 'customer-support',
    title: 'Autonomous Support Ecosystems',
    shortDescription: 'Self-healing, self-optimizing support infrastructures powered by intelligent virtual Sentinels.',
    longDescription: 'Reimagine customer support as an autonomous, intelligent ecosystem. Mendus Sentinels provide Level 0 to Level 3+ support capabilities, dynamically escalating only truly novel or ethically complex issues. This system learns continuously, reducing resolution times logarithmically and achieving near-perfect first-contact resolution for known issue categories.',
    icon: Headset,
    iconColorClass: 'text-blue-500',
    keyFeatures: [
      'Multi-echelon Sentinel support (Tier 0 to Tier 3+).',
      'Automated root cause analysis using Bayesian inference networks.',
      'Self-generating knowledge bases from resolved incidents.',
      'Predictive resource allocation for peak support demand.',
    ],
    benefits: [
      'Near-instantaneous resolution for >95% of support inquiries.',
      'Exponentially scale support capacity without linear cost increase.',
      'Transform human support agents into AI trainers and exception handlers.',
      'Achieve system-wide resilience and self-optimization in support delivery.',
    ],
    exampleUseCases: [
      { title: 'Zero-Touch Anomaly Resolution in SaaS Platforms', description: 'Sentinels detect, diagnose, and resolve platform issues autonomously, often before users are impacted, documenting the process for continuous improvement.', imageHint: 'saas platform health dashboard' },
      { title: 'AI-Powered Personalized Onboarding for Complex Systems', description: 'Sentinels guide new users through intricate software or hardware with adaptive, interactive tutorials tailored to individual learning curves.', imageHint: 'personalized ai tutorial' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'futuristic support center ai' },
  },
  {
    slug: 'digital-supply-chain',
    title: 'Sentient Global Logistics Lattice',
    shortDescription: 'AI-orchestrated, self-optimizing supply chains operating with quantum-level precision.',
    longDescription: 'Evolve your supply chain into a Sentient Global Logistics Lattice. Mendus AI agents create a dynamic, self-optimizing network that predicts disruptions with uncanny accuracy, reroutes resources autonomously, and manages inventory across planetary (and extra-planetary) networks with quantum-level efficiency. Achieve true supply chain resilience and hyper-dimensional visibility.',
    icon: Truck,
    iconColorClass: 'text-blue-400',
    keyFeatures: [
      'Quantum-entangled simulation for predictive disruption modeling.',
      'Autonomous multi-modal routing & resource allocation (drones, hyperloops, orbital freight).',
      'Decentralized inventory management using distributed ledger technology.',
      'AI-driven ethical sourcing verification and sustainability tracking.',
    ],
    benefits: [
      'Near-elimination of unforeseen supply chain disruptions.',
      'Drastic reduction in logistical overheads and carbon footprint.',
      'Achieve real-time, end-to-end visibility across multi-echelon networks.',
      'Enable dynamically adaptive and resilient global trade ecosystems.',
    ],
    exampleUseCases: [
      { title: 'Autonomous Interplanetary Resource Management', description: 'AI agents coordinate resource extraction, processing, and transport between Earth, Luna, and Mars colonies, optimizing for transit times and resource scarcity.', imageHint: 'space logistics mars colony' },
      { title: 'Self-Healing Pharmaceutical Supply Chains', description: 'Sentinels monitor global pharmaceutical supply lines, autonomously rerouting temperature-sensitive shipments and verifying cold-chain integrity to prevent spoilage and ensure patient safety.', imageHint: 'pharma supply chain futuristic' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'global logistics network future' },
  },
  {
    slug: 'finance-services',
    title: 'Algorithmic Financial Ecosystems (AFE)',
    shortDescription: 'AI-driven autonomous financial instruments, risk assessment, and market stabilization.',
    longDescription: 'Usher in the era of Algorithmic Financial Ecosystems. Mendus provides the AI framework for creating self-regulating financial instruments, hyper-accurate predictive market modeling, and autonomous risk mitigation strategies. Our Sentinels conduct continuous economic forecasting and compliance verification, fostering stable and efficient capital markets.',
    icon: DollarSign,
    iconColorClass: 'text-yellow-500',
    keyFeatures: [
      'AI-generated synthetic financial instruments with adaptive risk profiles.',
      'Predictive modeling of economic phase transitions and systemic risk cascades.',
      'Autonomous regulatory reporting and compliance across diverse financial frameworks.',
      'Decentralized Autonomous Organizations (DAOs) for managing investment funds.',
    ],
    benefits: [
      'Enhanced capital market efficiency and liquidity.',
      'Proactive identification and mitigation of systemic financial risks.',
      'Democratized access to sophisticated financial tools and insights.',
      'Reduced operational costs through hyper-automation of financial processes.',
    ],
    exampleUseCases: [
      { title: 'AI-Powered Global Economic Stabilization Sentinel', description: 'A network of AI agents monitors global economic indicators, predicting potential crises and suggesting coordinated, counter-cyclical interventions to central banks and regulatory bodies.', imageHint: 'global economy data visualization' },
      { title: 'Autonomous Insurance Underwriting & Claims Processing', description: 'Sentinels assess complex insurance risks using vast datasets, generate personalized policies, and process claims with near-zero human intervention for standard cases.', imageHint: 'ai insurance futuristic' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'futuristic finance data streams' },
  },
  {
    slug: 'agentic-security-operations',
    title: 'Cognitive Cybernetic Defense Grid (CCDG)',
    shortDescription: 'Autonomous, self-evolving cybersecurity Sentinels providing proactive threat neutralization.',
    longDescription: 'Deploy the Cognitive Cybernetic Defense Grid: an AI-driven security paradigm where autonomous Sentinels proactively hunt, identify, analyze, and neutralize cyber threats (including adversarial AI attacks) in real-time. The CCDG learns from every encounter, evolving its defense strategies faster than threats can emerge.',
    icon: Lock,
    iconColorClass: 'text-orange-500',
    keyFeatures: [
      'Autonomous AI Red Teams for continuous vulnerability discovery.',
      'Predictive threat intelligence using dark web data mining and anomaly detection.',
      'Self-propagating, adaptive security patches deployed at network speed.',
      'Quantum-resistant cryptographic protocols for ultimate data security.',
    ],
    benefits: [
      'Achieve sub-second mean time to detection (MTTD) and neutralization (MTTN).',
      'Proactively defend against zero-day exploits and AI-generated malware.',
      'Significantly reduce reliance on human security analysts for routine threat response.',
      'Create a self-healing, resilient digital infrastructure.',
    ],
    exampleUseCases: [
      { title: 'Autonomous Swarm Defense Against DDoS Attacks', description: 'AI Sentinels dynamically reconfigure network topology and deploy countermeasures to absorb and neutralize massive distributed denial-of-service attacks without human intervention.', imageHint: 'cyber attack defense shield' },
      { title: 'AI-Driven Deception Networks (Honeypots 2.0)', description: 'Sentinels create and manage hyper-realistic decoy systems to trap, analyze, and learn from advanced persistent threats (APTs).', imageHint: 'digital honeypot futuristic' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'cybersecurity matrix code' },
  },
  {
    slug: 'it-operations-service-management',
    title: 'Autonomic IT Sentience (AITS)',
    shortDescription: 'Self-managing, self-healing IT infrastructures orchestrated by cognitive AI agents.',
    longDescription: 'Achieve Autonomic IT Sentience with Mendus. Our AI agents manage your entire IT lifecycle, from predictive hardware failure and resource provisioning to automated software deployment and incident resolution. AITS transforms IT operations from reactive firefighting to proactive, intelligent system orchestration.',
    icon: ServerIcon,
    iconColorClass: 'text-purple-500',
    keyFeatures: [
      'Predictive auto-scaling of cloud and edge compute resources.',
      'AI-driven root cause analysis for complex, multi-system failures.',
      'Automated generation of incident remediation playbooks.',
      'Zero-touch infrastructure provisioning and configuration management.',
    ],
    benefits: [
      'Achieve >99.9999% system uptime and availability.',
      'Drastically reduce IT operational expenditure (OpEx).',
      'Enable IT teams to focus on strategic innovation rather than maintenance.',
      'Create an infinitely scalable and resilient IT ecosystem.',
    ],
    exampleUseCases: [
      { title: 'Self-Optimizing Global Content Delivery Network (CDN)', description: 'AI agents dynamically adjust caching strategies, server loads, and network paths to ensure optimal content delivery performance worldwide based on real-time user demand and network conditions.', imageHint: 'global network optimization' },
      { title: 'Autonomous Database Sharding and Replication', description: 'Sentinels monitor database performance and data growth, autonomously initiating sharding, replication, and rebalancing operations to maintain optimal performance and data resilience.', imageHint: 'database architecture futuristic' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'it operations data center future' },
  },
  {
    slug: 'asset-management',
    title: 'Sentient Asset Meta-Orchestration (SAMO)',
    shortDescription: 'AI-driven lifecycle optimization for physical, digital, and even cognitive assets.',
    longDescription: 'Implement Sentient Asset Meta-Orchestration with Mendus. Our AI agents track, manage, and optimize the entire lifecycle of all asset classes – from physical infrastructure and digital IP to the cognitive capabilities of other AI agents. SAMO ensures maximum value extraction, predictive maintenance, and strategic deployment of all resources.',
    icon: Archive, 
    iconColorClass: 'text-green-600',
    keyFeatures: [
      'Digital twin creation and real-time synchronization for all assets.',
      'Predictive failure analysis using multi-sensor fusion and historical data.',
      'AI-driven optimization of asset utilization and redeployment strategies.',
      'Automated compliance tracking for asset-specific regulations (e.g., environmental, safety).',
    ],
    benefits: [
      'Maximize return on all asset investments (ROA/ROI).',
      'Minimize unplanned downtime and maintenance costs through hyper-prediction.',
      'Optimize resource allocation across the entire enterprise portfolio.',
      'Enable circular economy models through intelligent asset end-of-life management.',
    ],
    exampleUseCases: [
      { title: 'Autonomous Fleet Management for Space Mining Operations', description: 'AI Sentinels manage a fleet of autonomous mining robots on asteroids, optimizing extraction routes, predicting maintenance needs, and coordinating resource transport.', imageHint: 'space mining asteroid robots' },
      { title: 'Cognitive Asset Management for AI Model Portfolios', description: 'SAMO tracks the performance, bias drift, and computational cost of an enterprise\'s AI models, recommending retraining, retirement, or redeployment to optimize the overall AI capability.', imageHint: 'ai model management dashboard' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'asset management futuristic tech' },
  },
  {
    slug: 'revenue-cycle-management',
    title: 'Autonomous Value Stream Realization (AVSR)',
    shortDescription: 'AI-orchestrated, end-to-end revenue capture and optimization with predictive financial modeling.',
    longDescription: 'Achieve Autonomous Value Stream Realization. Mendus AI agents manage the entire revenue lifecycle, from predictive lead scoring and dynamic pricing to automated billing, intelligent collections, and real-time cash flow optimization. AVSR ensures maximum value capture and financial velocity with minimal human intervention.',
    icon: RefreshCw,
    iconColorClass: 'text-pink-500',
    keyFeatures: [
      'AI-driven predictive customer lifetime value (CLTV) modeling.',
      'Dynamic, real-time pricing optimization based on market conditions and demand elasticity.',
      'Automated, multi-jurisdictional tax compliance for all transactions.',
      'Intelligent dispute resolution and automated collections protocols.',
    ],
    benefits: [
      'Significantly accelerate cash flow and reduce days sales outstanding (DSO).',
      'Maximize revenue capture through optimized pricing and reduced leakage.',
      'Automate >90% of manual RCM processes, reducing operational costs.',
      'Gain real-time, predictive insights into enterprise financial health.',
    ],
    exampleUseCases: [
      { title: 'AI-Powered Subscription Lifecycle Management', description: 'Sentinels manage the entire subscriber journey from acquisition and onboarding to dynamic billing, churn prediction, and personalized retention offers.', imageHint: 'subscription model data flow' },
      { title: 'Autonomous Royalty and Licensing Management for Digital Assets', description: 'AI agents track usage of digital IP across multiple platforms, calculate complex royalties, and automate payouts to rights holders in real-time.', imageHint: 'digital rights management blockchain' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'revenue cycle data flow future' },
  },
  {
    slug: 'ai-dashboard-governance',
    title: 'Sentience Governance & Oversight Matrix (SGOM)',
    shortDescription: 'Real-time, AI-augmented governance of complex agentic ecosystems for ethical alignment.',
    longDescription: 'Implement the Sentience Governance & Oversight Matrix. This Mendus solution provides a dynamic, multi-dimensional dashboard for real-time monitoring, auditing, and governance of all AI agents operating within your ecosystem. Ensure ethical alignment, track cognitive drift, verify compliance, and maintain ultimate human oversight over increasingly autonomous systems.',
    icon: LayoutDashboard, 
    iconColorClass: 'text-indigo-500',
    keyFeatures: [
      'Real-time visualization of agent decision pathways and cognitive states.',
      'Automated detection of ethical boundary transgressions or bias emergence.',
      'Verifiable audit trails of all agent actions and learning iterations.',
      'Human-in-the-loop override and intervention protocols for critical scenarios.',
    ],
    benefits: [
      'Maintain robust ethical control over highly autonomous AI systems.',
      'Ensure continuous compliance with evolving AI regulations and internal policies.',
      'Increase stakeholder trust through radical transparency in AI operations.',
      'Facilitate rapid identification and remediation of AI performance or ethical issues.',
    ],
    exampleUseCases: [
      { title: 'Ethical Oversight for Autonomous Financial Trading Agents', description: 'SGOM monitors AI trading bots for market manipulation, insider trading patterns (learned inadvertently), or deviations from fiduciary duty, allowing for real-time intervention.', imageHint: 'ai trading ethics dashboard' },
      { title: 'Compliance Monitoring for AI in Healthcare Diagnostics', description: 'The matrix tracks diagnostic AI for fairness across demographics, adherence to clinical guidelines, and privacy compliance (e.g., HIPAA, GDPR), flagging anomalies for human review.', imageHint: 'healthcare ai governance' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'ai governance dashboard futuristic' },
  },
  {
    slug: 'procurement',
    title: 'Predictive Strategic Sourcing & Acquisition (PSSA)',
    shortDescription: 'AI-driven optimization of global sourcing, vendor ecosystems, and resource acquisition.',
    longDescription: 'Revolutionize procurement with Predictive Strategic Sourcing & Acquisition. Mendus AI agents analyze global markets, predict resource scarcity, identify optimal supplier networks (including novel and unconventional sources), and automate complex negotiation and acquisition workflows. PSSA ensures resilient, cost-effective, and ethically sourced inputs for your operations.',
    icon: ShoppingCart,
    iconColorClass: 'text-purple-400',
    keyFeatures: [
      'AI-powered geopolitical and environmental risk modeling for supply chains.',
      'Automated discovery and vetting of Tier-N suppliers using advanced OSINT.',
      'Generative AI for drafting and negotiating complex procurement contracts.',
      'Predictive commodity pricing and optimal hedging strategies.',
    ],
    benefits: [
      'Secure critical resources and achieve significant cost reductions.',
      'Build hyper-resilient and ethically transparent supply networks.',
      'Automate complex procurement cycles, reducing lead times by orders of magnitude.',
      'Gain strategic advantage through superior market intelligence and sourcing agility.',
    ],
    exampleUseCases: [
      { title: 'Autonomous Sourcing of Rare Earth Elements for Advanced Manufacturing', description: 'AI Sentinels monitor global geological data, geopolitical stability, and ethical mining practices to secure sustainable and conflict-free sources of critical materials.', imageHint: 'rare earth mining ethical' },
      { title: 'AI-Negotiated Energy Procurement for Data Centers', description: 'Sentinels continuously analyze energy markets, predict price fluctuations, and autonomously negotiate optimal energy contracts from diverse sources (including renewables and microgrids) to power large-scale data centers.', imageHint: 'data center energy procurement' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'global procurement network ai' },
  },
];

export const getSolutionBySlug = (slug: string): Solution | undefined => {
  return solutions.find((solution) => solution.slug === slug);
};

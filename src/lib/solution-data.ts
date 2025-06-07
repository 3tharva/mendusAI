
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
    title: 'Predictive Risk & Automated Compliance',
    shortDescription: 'AI agents predict company-wide risks and ensure operations automatically follow ethical and legal rules.',
    longDescription: 'Move from reacting to compliance issues to proactively managing them. Our solution uses specialized AI agents to continuously assess potential major risks. They help your operations adapt to changing regulations (even across different regions or planets) and provide clear, verifiable records of compliance for unmatched transparency.',
    icon: ShieldCheck,
    iconColorClass: 'text-green-500',
    keyFeatures: [
      'Advanced AI modeling to predict major, unexpected events.',
      'Automated systems for updating rules based on new regulations.',
      'Self-correcting systems for automated fixing of compliance issues.',
      'Secure, privacy-focused methods for audits.',
    ],
    benefits: [
      'Greatly reduce compliance errors and related penalties.',
      'Gain early warnings about potential major business vulnerabilities.',
      'Simplify audits with easily verifiable, secure records.',
      'Prepare your operations for future regulatory changes and complexity.',
    ],
    exampleUseCases: [
      { title: 'Automated Trading Compliance', description: 'AI Sentinels monitor high-speed trading, ensuring it follows complex financial rules across different countries in real-time.', imageHint: 'stock trading compliance screen' },
      { title: 'Smart Contract Security Audits', description: 'AI systems continuously check and update digital contracts (smart contracts) on blockchain networks to prevent security holes and ensure they work as intended.', imageHint: 'blockchain security abstract' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'risk management chart graph' },
  },
  {
    slug: 'customer-services',
    title: 'Intelligent Customer Engagement',
    shortDescription: 'Highly personalized, predictive customer support driven by empathetic AI Sentinels.',
    longDescription: 'Transform customer interactions into a seamless partnership. Mendus Sentinels offer incredibly personalized engagement by understanding not just what customers say, but also their underlying needs and future desires. This is achieved through advanced analysis of sentiment, behavior, and predictive insights, leading to proactive support and value creation.',
    icon: Users,
    iconColorClass: 'text-red-400',
    keyFeatures: [
      'Empathetic AI with advanced understanding of human emotion.',
      'Predictive customer journey mapping and proactive issue solving.',
      'Instant, accurate answers through dynamic, context-aware knowledge.',
      'Smooth integration across all communication channels (with future support for neural interfaces).',
    ],
    benefits: [
      'Build exceptional customer loyalty and turn customers into advocates.',
      'Turn customer service from a cost into a source of value and growth.',
      'Reduce workload for human agents, allowing them to focus on complex, high-value interactions.',
      'Gain deep, actionable insights into how customer preferences are changing.',
    ],
    exampleUseCases: [
      { title: 'Proactive AI Concierge', description: 'AI anticipates user needs for complex products or services, offering help, resources, and solutions even before a request is made.', imageHint: 'ai assistant futuristic interface' },
      { title: 'AI-Assisted Conflict Resolution', description: 'Sentinels help resolve complex customer disputes by understanding all sides and proposing fair, mutually beneficial solutions.', imageHint: 'negotiation interface abstract' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'customer service ai interaction' },
  },
   {
    slug: 'customer-support',
    title: 'Autonomous Support Systems',
    shortDescription: 'Self-managing, self-optimizing support infrastructures powered by intelligent AI Sentinels.',
    longDescription: 'Reimagine customer support as an intelligent, autonomous system. Mendus Sentinels provide comprehensive support, from basic inquiries to complex issues, automatically escalating only the most novel or ethically challenging problems. This system learns continuously, drastically reducing resolution times and achieving nearly perfect first-contact resolution for common issues.',
    icon: Headset,
    iconColorClass: 'text-blue-500',
    keyFeatures: [
      'Multi-level AI support (from automated responses to advanced problem-solving).',
      'Automated root cause analysis using smart inference techniques.',
      'Self-updating knowledge bases from every resolved incident.',
      'Predictive staffing and resource allocation for peak support times.',
    ],
    benefits: [
      'Resolve over 95% of support inquiries almost instantly.',
      'Scale support capacity significantly without proportionally increasing costs.',
      'Allow human support agents to focus on training AI and handling unique cases.',
      'Achieve system-wide resilience and continuous improvement in support.',
    ],
    exampleUseCases: [
      { title: 'Zero-Touch Issue Resolution for SaaS', description: 'Sentinels detect, diagnose, and resolve platform issues automatically, often before users notice, documenting the process for ongoing improvement.', imageHint: 'saas dashboard health' },
      { title: 'AI-Powered Personalized Onboarding', description: 'Sentinels guide new users through complex software or hardware with adaptive, interactive tutorials tailored to individual learning styles.', imageHint: 'ai tutorial personalized learning' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'support center ai future' },
  },
  {
    slug: 'digital-supply-chain',
    title: 'Intelligent Global Logistics',
    shortDescription: 'AI-managed, self-optimizing supply chains that operate with exceptional precision.',
    longDescription: 'Upgrade your supply chain to an Intelligent Global Logistics system. Mendus AI agents create a dynamic, self-improving network that predicts disruptions with high accuracy, reroutes resources automatically, and manages inventory across global (and even interplanetary) networks with remarkable efficiency. Achieve true supply chain resilience and complete visibility.',
    icon: Truck,
    iconColorClass: 'text-blue-400',
    keyFeatures: [
      'Advanced simulation for predicting potential supply chain disruptions.',
      'Autonomous routing and resource allocation across various transport modes (drones, hyperloops, orbital freight).',
      'Decentralized inventory management using secure distributed ledger technology.',
      'AI-driven verification of ethical sourcing and sustainability tracking.',
    ],
    benefits: [
      'Virtually eliminate unforeseen supply chain disruptions.',
      'Significantly reduce logistics costs and environmental impact.',
      'Gain real-time, end-to-end visibility across your entire network.',
      'Enable dynamically adaptive and resilient global trade.',
    ],
    exampleUseCases: [
      { title: 'Autonomous Interplanetary Resource Logistics', description: 'AI agents coordinate resource extraction, processing, and transport between Earth, Moon, and Mars colonies, optimizing for travel times and resource availability.', imageHint: 'space logistics futuristic' },
      { title: 'Self-Correcting Pharmaceutical Supply Chains', description: 'Sentinels monitor global pharmaceutical supply lines, automatically rerouting temperature-sensitive items and verifying cold-chain integrity to prevent loss and ensure patient safety.', imageHint: 'pharma supply chain secure' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'global logistics abstract' },
  },
  {
    slug: 'finance-services',
    title: 'AI-Driven Financial Ecosystems',
    shortDescription: 'AI powers autonomous financial tools, risk assessment, and market stabilization.',
    longDescription: 'Step into the era of AI-Driven Financial Ecosystems. Mendus provides the AI framework for creating self-regulating financial tools, highly accurate predictive market models, and automated risk reduction strategies. Our Sentinels perform continuous economic forecasting and compliance checks, fostering stable and efficient financial markets.',
    icon: DollarSign,
    iconColorClass: 'text-yellow-500',
    keyFeatures: [
      'AI-generated financial tools with adaptable risk profiles.',
      'Predictive modeling of major economic shifts and widespread financial risks.',
      'Automated regulatory reporting and compliance for diverse financial rules.',
      'Decentralized Autonomous Organizations (DAOs) for managing investment funds.',
    ],
    benefits: [
      'Improve financial market efficiency and cash flow.',
      'Proactively identify and reduce major financial risks.',
      'Make sophisticated financial tools and insights more accessible.',
      'Lower operational costs through extensive automation of financial processes.',
    ],
    exampleUseCases: [
      { title: 'AI-Powered Global Economic Stabilizer', description: 'A network of AI agents monitors global economic data, predicting potential crises and suggesting coordinated actions to central banks and regulators.', imageHint: 'global economy dashboard' },
      { title: 'Autonomous Insurance Services', description: 'Sentinels assess complex insurance risks using vast data, generate personalized policies, and process claims with minimal human input for standard cases.', imageHint: 'ai insurance innovation' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'finance data visualization' },
  },
  {
    slug: 'agentic-security-operations',
    title: 'Cognitive Cyber Defense Grid',
    shortDescription: 'Autonomous, self-evolving AI Sentinels providing proactive cybersecurity and threat neutralization.',
    longDescription: 'Deploy the Cognitive Cyber Defense Grid: an AI-driven security approach where autonomous Sentinels proactively hunt, identify, analyze, and neutralize cyber threats (including AI-based attacks) in real-time. This system learns from every encounter, evolving its defenses faster than threats can emerge.',
    icon: Lock,
    iconColorClass: 'text-orange-500',
    keyFeatures: [
      'Autonomous AI "Red Teams" for continuous vulnerability discovery.',
      'Predictive threat intelligence using advanced data mining and anomaly detection.',
      'Self-deploying, adaptive security patches applied at network speed.',
      'Advanced encryption protocols for ultimate data security, prepared for future threats.',
    ],
    benefits: [
      'Achieve incredibly fast threat detection and neutralization times.',
      'Proactively defend against new exploits and AI-generated malware.',
      'Significantly reduce reliance on human security analysts for routine threat response.',
      'Create a self-healing, resilient digital infrastructure.',
    ],
    exampleUseCases: [
      { title: 'Autonomous Swarm Defense for DDoS', description: 'AI Sentinels dynamically reconfigure networks and deploy countermeasures to stop massive denial-of-service attacks without human intervention.', imageHint: 'cyber defense shield network' },
      { title: 'AI-Driven Deception Networks (Advanced Honeypots)', description: 'Sentinels create realistic decoy systems to trap, analyze, and learn from sophisticated cyber attackers.', imageHint: 'digital trap security' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'cybersecurity abstract code' },
  },
  {
    slug: 'it-operations-service-management',
    title: 'Autonomic IT Operations',
    shortDescription: 'Self-managing, self-healing IT infrastructures run by intelligent AI agents.',
    longDescription: 'Achieve Autonomic IT Operations with Mendus. Our AI agents manage your entire IT lifecycle, from predicting hardware failures and allocating resources, to automating software deployment and resolving incidents. This transforms IT operations from reactive problem-solving to proactive, intelligent system management.',
    icon: ServerIcon,
    iconColorClass: 'text-purple-500',
    keyFeatures: [
      'Predictive auto-scaling of cloud and edge computing resources.',
      'AI-driven root cause analysis for complex system failures.',
      'Automated generation of solutions for IT incidents.',
      'Zero-touch infrastructure setup and configuration management.',
    ],
    benefits: [
      'Achieve extremely high system uptime and availability (e.g., >99.9999%).',
      'Drastically reduce IT operational costs.',
      'Enable IT teams to focus on strategic innovation instead of routine maintenance.',
      'Create an infinitely scalable and resilient IT environment.',
    ],
    exampleUseCases: [
      { title: 'Self-Optimizing Global Content Delivery Network (CDN)', description: 'AI agents dynamically adjust content caching, server loads, and network paths to ensure optimal content delivery worldwide based on real-time demand.', imageHint: 'global network data flow' },
      { title: 'Autonomous Database Management', description: 'Sentinels monitor database performance and data growth, automatically managing tasks like sharding, replication, and rebalancing to maintain optimal performance and data safety.', imageHint: 'database management futuristic' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'it operations server room' },
  },
  {
    slug: 'asset-management',
    title: 'Intelligent Asset Orchestration',
    shortDescription: 'AI-driven lifecycle optimization for physical, digital, and even AI-based assets.',
    longDescription: 'Implement Intelligent Asset Orchestration with Mendus. Our AI agents track, manage, and optimize the entire lifecycle of all your assets – from physical infrastructure and digital intellectual property to the capabilities of other AI agents. This ensures maximum value, predictive maintenance, and strategic deployment of all resources.',
    icon: Archive, 
    iconColorClass: 'text-green-600',
    keyFeatures: [
      'Digital twin creation and real-time tracking for all assets.',
      'Predictive failure analysis using multiple sensors and historical data.',
      'AI-driven optimization of asset use and redeployment strategies.',
      'Automated compliance tracking for asset-specific regulations (e.g., environmental, safety).',
    ],
    benefits: [
      'Maximize return on all asset investments.',
      'Minimize unplanned downtime and maintenance costs through accurate predictions.',
      'Optimize resource allocation across your entire enterprise.',
      'Enable circular economy models through smart end-of-life asset management.',
    ],
    exampleUseCases: [
      { title: 'Autonomous Fleet Management for Space Mining', description: 'AI Sentinels manage autonomous mining robots on asteroids, optimizing routes, predicting maintenance, and coordinating resource transport.', imageHint: 'space mining robots asteroid' },
      { title: 'Cognitive Asset Management for AI Models', description: 'Our system tracks the performance, bias, and cost of an enterprise\'s AI models, recommending updates, retirement, or new uses to optimize overall AI capability.', imageHint: 'ai model performance dashboard' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'asset management tech abstract' },
  },
  {
    slug: 'revenue-cycle-management',
    title: 'Automated Value Stream Optimization',
    shortDescription: 'AI-managed, end-to-end revenue capture and optimization with predictive financial modeling.',
    longDescription: 'Achieve Automated Value Stream Optimization. Mendus AI agents manage the entire revenue lifecycle, from predictive lead scoring and dynamic pricing to automated billing, intelligent collections, and real-time cash flow optimization. This ensures maximum value capture and financial speed with minimal human intervention.',
    icon: RefreshCw,
    iconColorClass: 'text-pink-500',
    keyFeatures: [
      'AI-driven predictive customer lifetime value (CLTV) modeling.',
      'Dynamic, real-time pricing adjustments based on market conditions and demand.',
      'Automated tax compliance for all transactions across multiple jurisdictions.',
      'Intelligent dispute resolution and automated collections processes.',
    ],
    benefits: [
      'Significantly speed up cash flow and reduce payment delays.',
      'Maximize revenue through optimized pricing and reduced losses.',
      'Automate over 90% of manual revenue cycle management tasks, cutting costs.',
      'Gain real-time, predictive insights into your company\'s financial health.',
    ],
    exampleUseCases: [
      { title: 'AI-Powered Subscription Management', description: 'Sentinels manage the entire subscriber journey from sign-up to dynamic billing, churn prediction, and personalized retention offers.', imageHint: 'subscription data flow chart' },
      { title: 'Autonomous Royalty and Licensing for Digital IP', description: 'AI agents track usage of digital intellectual property, calculate complex royalties, and automate payouts to rights holders in real-time.', imageHint: 'digital rights blockchain' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'revenue cycle data abstract' },
  },
  {
    slug: 'ai-dashboard-governance',
    title: 'AI Governance & Oversight Matrix',
    shortDescription: 'Real-time, AI-assisted governance of complex AI agent systems for ethical alignment and control.',
    longDescription: 'Implement the AI Governance & Oversight Matrix. This Mendus solution provides a dynamic dashboard for real-time monitoring, auditing, and governance of all AI agents in your ecosystem. Ensure ethical behavior, track AI learning, verify compliance, and maintain ultimate human control over increasingly autonomous systems.',
    icon: LayoutDashboard, 
    iconColorClass: 'text-indigo-500',
    keyFeatures: [
      'Real-time visualization of AI agent decision processes and cognitive states.',
      'Automated detection of ethical boundary violations or emerging bias.',
      'Verifiable audit trails of all AI agent actions and learning updates.',
      'Human-in-the-loop override and intervention for critical situations.',
    ],
    benefits: [
      'Maintain strong ethical control over highly autonomous AI systems.',
      'Ensure continuous compliance with evolving AI regulations and internal policies.',
      'Increase stakeholder trust through transparency in AI operations.',
      'Quickly identify and fix AI performance or ethical issues.',
    ],
    exampleUseCases: [
      { title: 'Ethical Oversight for AI Financial Trading', description: 'The matrix monitors AI trading bots for market manipulation or deviations from duty, allowing real-time intervention.', imageHint: 'ai trading ethics monitor' },
      { title: 'Compliance for AI in Healthcare Diagnostics', description: 'Tracks diagnostic AI for fairness, adherence to clinical guidelines, and privacy compliance (e.g., HIPAA, GDPR), flagging issues for human review.', imageHint: 'healthcare ai ethics dashboard' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'ai governance dashboard interface' },
  },
  {
    slug: 'procurement',
    title: 'Predictive Strategic Sourcing',
    shortDescription: 'AI-driven optimization of global sourcing, vendor management, and resource acquisition.',
    longDescription: 'Revolutionize procurement with Predictive Strategic Sourcing. Mendus AI agents analyze global markets, predict resource shortages, identify optimal suppliers (including new and unconventional ones), and automate complex negotiation and purchasing tasks. This ensures resilient, cost-effective, and ethically sourced materials for your operations.',
    icon: ShoppingCart,
    iconColorClass: 'text-purple-400',
    keyFeatures: [
      'AI-powered risk modeling for geopolitical and environmental supply chain factors.',
      'Automated discovery and vetting of suppliers at all levels using advanced intelligence.',
      'Generative AI for drafting and negotiating complex procurement contracts.',
      'Predictive commodity pricing and optimal risk-hedging strategies.',
    ],
    benefits: [
      'Secure critical resources and achieve significant cost savings.',
      'Build highly resilient and ethically transparent supply networks.',
      'Automate complex procurement cycles, drastically reducing lead times.',
      'Gain a strategic edge through superior market intelligence and sourcing speed.',
    ],
    exampleUseCases: [
      { title: 'Autonomous Sourcing of Rare Earth Materials', description: 'AI Sentinels monitor global geological data, geopolitical stability, and ethical mining practices to secure sustainable and conflict-free sources of critical materials.', imageHint: 'ethical mining supply chain' },
      { title: 'AI-Negotiated Energy Procurement', description: 'Sentinels continuously analyze energy markets, predict price changes, and autonomously negotiate optimal energy contracts from diverse sources for large facilities like data centers.', imageHint: 'energy procurement data center' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'procurement network optimization' },
  },
];

export const getSolutionBySlug = (slug: string): Solution | undefined => {
  return solutions.find((solution) => solution.slug === slug);
};

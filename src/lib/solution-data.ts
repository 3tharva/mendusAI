
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
    title: 'Predictive Risk & Automated Compliance',
    shortDescription: 'Mitigating risks and ensuring regulatory compliance across business operations.',
    longDescription: 'Step beyond reactive compliance and embrace proactive risk neutralization. Our Predictive Risk & Automated Compliance solution deploys Mendus Sentinels to continuously model complex risk landscapes, from internal vulnerabilities to global systemic threats. These AI agents dynamically adapt your operations to evolving regulatory frameworks across multiple jurisdictions, including future off-world settlements. They provide immutable, cryptographically verifiable audit trails, offering unparalleled transparency and foresight in governance.',
    icon: ShieldCheck,
    iconColorClass: 'text-green-500',
    keyFeatures: [
      'Hyper-dimensional risk modeling for identifying "black swan" events.',
      'Autonomous regulatory interpretation and real-time policy adaptation.',
      'Self-correcting operational controls for automated compliance remediation.',
      'Zero-knowledge proof systems for privacy-preserving audits and verification.',
      'Predictive modeling of emerging ethical dilemmas in AI operations.',
    ],
    benefits: [
      'Drastically reduce exposure to unforeseen risks and compliance breaches.',
      'Achieve continuous compliance with minimal human intervention.',
      'Enhance stakeholder trust with transparent, verifiable governance.',
      'Future-proof your operations against complex and rapidly changing regulatory landscapes.',
      'Transform compliance from a cost center to a strategic advantage in operational resilience.',
    ],
    exampleUseCases: [
      { title: 'AI-Driven Algorithmic Trading Oversight', description: 'Sentinels monitor high-frequency trading algorithms for compliance with evolving financial regulations across multiple exchanges and asset classes, preventing market manipulation and ensuring ethical execution.', imageHint: 'stock trading compliance screen' },
      { title: 'Autonomous Smart Contract Assurance', description: 'AI agents continuously audit and verify smart contracts on decentralized ledgers for security vulnerabilities, logical flaws, and adherence to intended operational parameters, pre-empting exploits.', imageHint: 'blockchain security abstract' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'risk management chart graph' },
  },
  {
    slug: 'customer-services',
    title: 'Intelligent Customer Engagement',
    shortDescription: 'Enhance experiences with AI-driven, personalized customer service automation tools.',
    longDescription: 'Elevate customer interactions from transactions to synergistic partnerships. Mendus Sentinels deliver hyper-personalized engagement by not just processing requests, but by deeply understanding customer intent, predicting future needs, and proactively offering solutions. This is powered by advanced cognitive models analyzing sentiment, behavioral patterns, and predictive contextual insights, fostering unprecedented loyalty and value co-creation.',
    icon: Users,
    iconColorClass: 'text-red-400',
    keyFeatures: [
      'Empathetic AI with advanced natural language understanding (NLU) and emotional intelligence.',
      'Predictive customer journey orchestration and pre-emptive issue resolution.',
      'Dynamic, context-aware knowledge synthesis for instant, accurate information delivery.',
      'Seamless omnichannel integration, including future BCI (Brain-Computer Interface) support.',
      'AI-driven generation of novel solutions for unique customer challenges.',
    ],
    benefits: [
      'Cultivate profound customer loyalty and transform users into brand evangelists.',
      'Shift customer service from a cost center to a significant revenue and innovation driver.',
      'Augment human agents, enabling them to focus on complex, high-value strategic interactions.',
      'Gain deep, actionable intelligence into evolving customer desires and market trends.',
      'Deliver consistently superior experiences that adapt to individual customer preferences.',
    ],
    exampleUseCases: [
      { title: 'Proactive AI Concierge for Complex Systems', description: 'AI Sentinels anticipate user needs for sophisticated products or services (e.g., personalized medicine, quantum computing access), offering guidance, resources, and solutions before a formal request is made.', imageHint: 'ai assistant futuristic interface' },
      { title: 'AI-Mediated Multi-Party Conflict Resolution', description: 'Sentinels facilitate resolution of complex customer disputes by impartially analyzing all perspectives, simulating outcomes of various solutions, and proposing equitable, mutually beneficial agreements.', imageHint: 'negotiation interface abstract' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'customer service ai interaction' },
  },
   {
    slug: 'customer-support',
    title: 'Autonomous Support Systems',
    shortDescription: 'Deliver fast, consistent resolutions using intelligent virtual agents and support workflows.',
    longDescription: 'Transition to an era of intelligent, autonomous support ecosystems. Mendus Sentinels manage the full spectrum of support interactions, from instantaneous resolution of common inquiries to sophisticated diagnostics for complex technical issues. The system continuously learns from every interaction, achieving near-perfect first-contact resolution rates and automatically escalating only truly novel or ethically nuanced challenges to human experts.',
    icon: Headset,
    iconColorClass: 'text-blue-500',
    keyFeatures: [
      'Multi-tiered AI support architecture (from conversational AI to deep diagnostic agents).',
      'Automated root cause analysis using advanced inferential reasoning and digital twin simulations.',
      'Self-evolving knowledge bases from every resolved incident and proactive research.',
      'Predictive resource allocation and dynamic load balancing for peak support periods.',
      'AI-generated, personalized resolution guides and interactive troubleshooting.',
    ],
    benefits: [
      'Achieve sub-second resolution for a vast majority of support inquiries.',
      'Scale support capacity exponentially without a linear increase in operational costs.',
      'Empower human support specialists to focus on AI training, system oversight, and unique edge cases.',
      'Build system-wide resilience and drive continuous improvement in support quality and efficiency.',
      'Provide 24/7/365 support across all channels and languages, globally and beyond.',
    ],
    exampleUseCases: [
      { title: 'Zero-Touch Resolution for Enterprise SaaS Platforms', description: 'Sentinels automatically detect, diagnose, and resolve platform issues (e.g., configuration errors, performance bottlenecks), often before users are impacted, meticulously documenting the process for continuous system improvement.', imageHint: 'saas dashboard health' },
      { title: 'AI-Powered Personalized Onboarding & Upskilling', description: 'Sentinels guide new users through complex software, hardware, or even new job roles with adaptive, interactive tutorials tailored to individual learning styles, knowledge gaps, and performance goals.', imageHint: 'ai tutorial personalized learning' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'support center ai future' },
  },
  {
    slug: 'digital-supply-chain',
    title: 'Intelligent Global Logistics',
    shortDescription: 'Optimize supply chain visibility, planning, and fulfillment through AI-powered automation.',
    longDescription: 'Evolve your supply chain into an Intelligent Global Logistics Fabric. Mendus AI agents orchestrate a dynamic, self-optimizing network that anticipates disruptions with uncanny accuracy, autonomously re-routes resources, and manages inventory across multi-planetary networks with hyper-efficiency. This enables true logistical resilience, end-to-end transparency, and adaptive capacity for global (and interstellar) commerce.',
    icon: Truck,
    iconColorClass: 'text-blue-400',
    keyFeatures: [
      'Quantum-calibrated simulations for predictive disruption modeling (geopolitical, environmental, celestial).',
      'Autonomous multi-modal transport orchestration (drones, hyperloops, autonomous ships, orbital freight).',
      'Decentralized inventory management utilizing secure, distributed ledger technology and AI forecasting.',
      'AI-driven provenance verification for ethical sourcing and sustainability compliance tracking through complex supply webs.',
      'Real-time carbon footprint analysis and optimization for all logistical operations.',
    ],
    benefits: [
      'Attain near-zero unplanned disruptions through predictive mitigation.',
      'Dramatically reduce logistical costs and ecological impact.',
      'Achieve immutable, real-time, end-to-end visibility and traceability across the entire supply network.',
      'Enable dynamically adaptive and resilient global trade networks capable of responding to unforeseen events.',
      'Optimize resource allocation and Just-In-Time delivery on a planetary scale.',
    ],
    exampleUseCases: [
      { title: 'Autonomous Interplanetary Resource Logistics Network', description: 'AI agents coordinate resource extraction from asteroids, processing on lunar facilities, and transport between Earth, Moon, and Mars colonies, optimizing for transit windows, energy consumption, and resource availability.', imageHint: 'space logistics futuristic' },
      { title: 'Self-Healing Pharmaceutical Cold Chains', description: 'Sentinels monitor global pharmaceutical supply lines, autonomously rerouting temperature-sensitive biologics, verifying cold-chain integrity with IoT sensors, and pre-emptively addressing potential spoilage to ensure patient safety and efficacy.', imageHint: 'pharma supply chain secure' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'global logistics abstract' },
  },
  {
    slug: 'finance-services',
    title: 'AI-Driven Financial Ecosystems',
    shortDescription: 'Streamline invoicing, reconciliation, and reporting with intelligent finance process automation.',
    longDescription: 'Pioneer the next generation of financial operations with AI-Driven Financial Ecosystems. Mendus provides the cognitive architecture for autonomous financial instruments, hyper-accurate predictive market modeling, and automated systemic risk mitigation. Our Sentinels conduct continuous economic forecasting, algorithmic compliance, and intelligent treasury management, fostering profoundly stable and efficient capital markets.',
    icon: DollarSign,
    iconColorClass: 'text-yellow-500',
    keyFeatures: [
      'AI-generated synthetic financial instruments with adaptive risk parameters.',
      'Predictive modeling of macroeconomic shifts and cascading financial network risks.',
      'Automated regulatory reporting and compliance across diverse global and emergent financial frameworks.',
      'Decentralized Autonomous Organizations (DAOs) for sophisticated, transparent investment and governance.',
      'Real-time fraud detection and prevention using advanced anomaly detection and behavioral biometrics.',
    ],
    benefits: [
      'Enhance capital market efficiency and liquidity through intelligent automation.',
      'Proactively identify and mitigate systemic financial risks before they escalate.',
      'Democratize access to sophisticated financial instruments and insights.',
      'Dramatically reduce operational costs through hyper-automation of financial processes.',
      'Achieve unparalleled financial transparency and auditability.',
    ],
    exampleUseCases: [
      { title: 'AI-Orchestrated Global Economic Stabilizer', description: 'A distributed network of AI agents monitors global economic indicators, identifies potential instabilities, and proposes coordinated, pre-emptive interventions to central banks and regulatory bodies to maintain global financial equilibrium.', imageHint: 'global economy dashboard' },
      { title: 'Autonomous Insurance & Risk Underwriting Platforms', description: 'Sentinels assess complex, multi-faceted insurance risks using vast datasets, generate hyper-personalized policies in real-time, and autonomously process claims with high accuracy and speed for standard and parametric cases.', imageHint: 'ai insurance innovation' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'finance data visualization' },
  },
  {
    slug: 'agentic-security-operations',
    title: 'Cognitive Cyber Defense Grid',
    shortDescription: 'Autonomous threat detection and response using agent-based security intelligence systems.',
    longDescription: 'Deploy the Cognitive Cyber Defense Grid, a paradigm shift in cybersecurity. This system features autonomous Mendus Sentinels that proactively hunt, identify, analyze, and neutralize advanced cyber threats, including sophisticated AI-driven attacks, in real-time. The Grid learns from every encounter, collectively evolving its defensive strategies at a rate that outpaces emerging threats, ensuring persistent digital sovereignty.',
    icon: Lock,
    iconColorClass: 'text-orange-500',
    keyFeatures: [
      'Autonomous AI "Red Teams" and "Blue Teams" for continuous vulnerability discovery and defense hardening.',
      'Predictive threat intelligence leveraging dark web analysis, global honeypot networks, and anomaly detection.',
      'Self-deploying, adaptive security countermeasures applied at network speed with surgical precision.',
      'Quantum-resistant encryption protocols and AI-driven cryptographic agility for future-proof data security.',
      'AI-generated incident response plans and automated forensic analysis.',
    ],
    benefits: [
      'Achieve sub-millisecond threat detection and automated neutralization capabilities.',
      'Proactively defend against zero-day exploits and AI-generated malware.',
      'Significantly reduce reliance on human security analysts for tactical threat response, freeing them for strategic defense architecture.',
      'Create a self-healing, dynamically resilient digital infrastructure that adapts to novel attack vectors.',
      'Ensure operational continuity even during sophisticated, large-scale cyber onslaughts.',
    ],
    exampleUseCases: [
      { title: 'Autonomous Swarm Defense Against Distributed Attacks', description: 'AI Sentinels dynamically reconfigure network topologies, deploy intelligent decoys, and coordinate countermeasures to absorb and neutralize massive Distributed Denial of Service (DDoS) and botnet attacks without human intervention.', imageHint: 'cyber defense shield network' },
      { title: 'AI-Driven Active Deception Networks (Advanced Honeypots)', description: 'Sentinels create and manage hyper-realistic, adaptive decoy environments to trap, analyze, and learn from sophisticated state-sponsored or criminal cyber attackers, gathering crucial intelligence on their TTPs (Tactics, Techniques, and Procedures).', imageHint: 'digital trap security' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'cybersecurity abstract code' },
  },
  {
    slug: 'it-operations-service-management',
    title: 'Autonomic IT Operations',
    shortDescription: 'Automate incident response, monitoring, and IT workflows with intelligent agents.',
    longDescription: 'Realize the vision of Autonomic IT Operations with Mendus. Our AI agents autonomously manage your entire IT lifecycle, from predictive hardware component failure and dynamic resource allocation across hybrid clouds, to automated software deployment pipelines and intelligent incident resolution. This transforms IT operations from reactive firefighting to proactive, self-optimizing, and intelligent system stewardship.',
    icon: ServerIcon,
    iconColorClass: 'text-purple-500',
    keyFeatures: [
      'Predictive auto-scaling and resource optimization for cloud and edge computing environments.',
      'AI-driven root cause analysis for complex, cascading system failures, identifying true origins not just symptoms.',
      'Automated generation and execution of remediation plans for IT incidents.',
      'Zero-touch infrastructure provisioning and declarative configuration management.',
      'AI-powered capacity planning and performance forecasting for future IT needs.',
    ],
    benefits: [
      'Achieve unprecedented levels of system uptime and availability (e.g., >99.99999% for critical systems).',
      'Drastically reduce IT operational expenditures and total cost of ownership (TCO).',
      'Enable IT teams to transcend routine maintenance and focus on strategic innovation and business alignment.',
      'Create an infinitely scalable, self-healing, and adaptive IT environment.',
      'Automate compliance with internal SLAs and external regulatory requirements.',
    ],
    exampleUseCases: [
      { title: 'Self-Optimizing Global Content Delivery Network (CDN)', description: 'AI agents dynamically adjust content caching strategies, server loads, and network paths in real-time to ensure optimal, low-latency content delivery worldwide based on fluctuating demand patterns and network conditions.', imageHint: 'global network data flow' },
      { title: 'Autonomous Database Performance and Resilience Management', description: 'Sentinels monitor database performance, query efficiency, and data growth, autonomously performing tasks like schema optimization, index management, sharding, replication, and automated failover to maintain peak performance and data integrity.', imageHint: 'database management futuristic' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'it operations server room' },
  },
  {
    slug: 'asset-management',
    title: 'Intelligent Asset Orchestration',
    shortDescription: 'Track, manage, and optimize assets across lifecycle with smart automation tools.',
    longDescription: 'Implement Intelligent Asset Orchestration with Mendus. Our AI agents track, manage, and optimize the entire lifecycle of all your diverse assets – from physical infrastructure and industrial equipment to digital intellectual property and even the cognitive capabilities of other AI agents. This ensures maximum value extraction, predictive maintenance down to the component level, and strategic deployment of all resources across the enterprise.',
    icon: Archive, 
    iconColorClass: 'text-green-600',
    keyFeatures: [
      'High-fidelity digital twin creation and real-time synchronization for all classes of assets.',
      'Predictive failure analysis using multi-sensor fusion, historical data, and physics-informed AI models.',
      'AI-driven optimization of asset utilization, redeployment strategies, and capital expenditure planning.',
      'Automated compliance tracking for asset-specific regulations (e.g., environmental, safety, operational licenses).',
      'Blockchain-based immutable records for asset provenance, maintenance history, and ownership.',
    ],
    benefits: [
      'Maximize return on all asset investments through optimized utilization and extended operational life.',
      'Minimize unplanned downtime and maintenance costs through hyper-accurate predictive analytics.',
      'Optimize resource allocation and capital planning across your entire enterprise ecosystem.',
      'Enable circular economy models through intelligent end-of-life asset management, repurposing, and recycling.',
      'Enhance operational safety and ensure continuous regulatory compliance.',
    ],
    exampleUseCases: [
      { title: 'Autonomous Fleet Management for Extraterrestrial Mining Operations', description: 'AI Sentinels manage autonomous mining rovers and drones on asteroids or planetary surfaces, optimizing routes, predicting component wear, scheduling maintenance, and coordinating resource transport to orbital refineries.', imageHint: 'space mining robots asteroid' },
      { title: 'Cognitive Asset Management for Enterprise AI Models', description: 'Our system tracks the performance, bias drift, computational cost, and strategic value of an enterprise\'s deployed AI models, recommending retraining, fine-tuning, retirement, or novel applications to optimize the overall AI capability portfolio.', imageHint: 'ai model performance dashboard' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'asset management tech abstract' },
  },
  {
    slug: 'revenue-cycle-management',
    title: 'Automated Value Stream Optimization',
    shortDescription: 'Accelerate billing, claims, and collections with AI-driven revenue cycle workflows.',
    longDescription: 'Achieve true Automated Value Stream Optimization. Mendus AI agents manage and optimize the entire revenue lifecycle, from predictive lead qualification and dynamic, personalized pricing algorithms to automated, error-free invoicing, intelligent claims processing, and adaptive, empathetic collections strategies. This ensures maximum value capture, accelerated cash flow, and financial agility with minimal human intervention.',
    icon: RefreshCw,
    iconColorClass: 'text-pink-500',
    keyFeatures: [
      'AI-driven predictive Customer Lifetime Value (CLTV) and propensity-to-buy modeling.',
      'Dynamic, real-time pricing adjustments based on market micro-segments, demand elasticity, and competitor intelligence.',
      'Automated, multi-jurisdictional tax compliance for all transactions.',
      'Intelligent dispute resolution and automated, personalized collections workflows with ethical considerations.',
      'Predictive cash flow modeling and working capital optimization.',
    ],
    benefits: [
      'Significantly accelerate cash flow velocity and reduce days sales outstanding (DSO).',
      'Maximize revenue realization through optimized pricing, reduced revenue leakage, and minimized bad debt.',
      'Automate over 95% of manual revenue cycle management tasks, substantially reducing operational costs.',
      'Gain real-time, predictive insights into your enterprise’s financial health and future performance.',
      'Enhance customer satisfaction through transparent, fair, and efficient financial interactions.',
    ],
    exampleUseCases: [
      { title: 'AI-Powered Adaptive Subscription Management Ecosystems', description: 'Sentinels manage the entire subscriber journey from intelligent acquisition and dynamic tiering to usage-based billing, churn prediction with proactive retention offers, and personalized upselling/cross-selling strategies.', imageHint: 'subscription data flow chart' },
      { title: 'Autonomous Royalty and Licensing Management for Digital IP', description: 'AI agents meticulously track usage of digital intellectual property across global platforms, calculate complex, multi-tiered royalties, and automate secure, transparent payouts to rights holders in real-time using smart contracts.', imageHint: 'digital rights blockchain' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'revenue cycle data abstract' },
  },
  {
    slug: 'ai-dashboard-governance',
    title: 'AI Governance & Oversight Matrix',
    shortDescription: 'Centralized governance with actionable AI insights and policy compliance tracking.',
    longDescription: 'Establish comprehensive control with the AI Governance & Oversight Matrix. This Mendus solution provides a dynamic, multi-dimensional dashboard for real-time monitoring, auditing, and governance of all AI agents and cognitive systems within your ecosystem. Ensure ethical alignment, track emergent behaviors, verify compliance with internal policies and external regulations, and maintain ultimate human oversight over increasingly autonomous intelligent systems.',
    icon: LayoutDashboard, 
    iconColorClass: 'text-indigo-500',
    keyFeatures: [
      'Real-time visualization of AI agent decision pathways, cognitive states, and confidence levels.',
      'Automated detection of ethical boundary drift, emergent bias, and potential unintended consequences.',
      'Immutable, verifiable audit trails of all AI agent actions, learning iterations, and data provenance.',
      'Sophisticated human-in-the-loop (HITL) protocols for intervention, arbitration, and critical decision override.',
      'Scenario modeling for testing AI responses to novel ethical challenges and policy changes.',
    ],
    benefits: [
      'Maintain robust ethical control and accountability over highly autonomous AI systems.',
      'Ensure continuous compliance with evolving AI regulations, industry standards, and internal corporate policies.',
      'Increase stakeholder trust and societal acceptance through radical transparency in AI operations.',
      'Rapidly identify, diagnose, and remediate AI performance deviations or ethical misalignments.',
      'Foster a culture of responsible AI development and deployment across the organization.',
    ],
    exampleUseCases: [
      { title: 'Ethical Oversight for Autonomous Financial Trading Systems', description: 'The Matrix monitors AI trading algorithms for signs of market manipulation, unfair advantages, or deviations from fiduciary duty, allowing real-time intervention and behavior correction by human overseers.', imageHint: 'ai trading ethics monitor' },
      { title: 'Compliance and Fairness Auditing for AI in Healthcare Diagnostics', description: 'Tracks diagnostic AI systems for fairness across demographic groups, adherence to evolving clinical guidelines, and strict compliance with patient data privacy regulations (e.g., HIPAA, GDPR), flagging anomalies for expert human review and system refinement.', imageHint: 'healthcare ai ethics dashboard' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'ai governance dashboard interface' },
  },
  {
    slug: 'procurement',
    title: 'Predictive Strategic Sourcing',
    shortDescription: 'Automate sourcing, vendor selection, and approvals with intelligent procurement workflows.',
    longDescription: 'Revolutionize your procurement function with Predictive Strategic Sourcing. Mendus AI agents analyze global markets with unparalleled depth, predict resource scarcity and price volatility, identify optimal and resilient suppliers (including novel and unconventional sources), and automate complex negotiation and purchasing processes. This ensures a continuous, cost-effective, and ethically unimpeachable flow of resources for your operations, securing a decisive competitive advantage.',
    icon: ShoppingCart, // Re-using ShoppingCart as it fits procurement context well
    iconColorClass: 'text-purple-400',
    keyFeatures: [
      'AI-powered risk modeling for geopolitical, climate-related, and systemic supply chain vulnerabilities.',
      'Autonomous discovery, deep vetting, and continuous monitoring of suppliers at all tiers using advanced intelligence.',
      'Generative AI for drafting, analyzing, and negotiating complex, multi-party procurement contracts.',
      'Predictive commodity pricing models and automated optimal risk-hedging strategies.',
      'AI-driven sustainable and ethical sourcing verification across the entire value chain.',
    ],
    benefits: [
      'Secure critical resources proactively and achieve substantial, sustainable cost savings.',
      'Build hyper-resilient, ethically transparent, and adaptive supply networks.',
      'Automate intricate procurement cycles, drastically reducing lead times and manual effort.',
      'Gain a profound strategic edge through superior market intelligence, agility, and sourcing speed.',
      'Optimize working capital and reduce inventory holding costs through predictive procurement.',
    ],
    exampleUseCases: [
      { title: 'Autonomous Sourcing of Strategic & Rare Earth Materials', description: 'AI Sentinels monitor global geological surveys, mining operations, geopolitical stability, and ethical labor practices to secure sustainable, conflict-free, and economically viable sources of critical materials for advanced manufacturing.', imageHint: 'ethical mining supply chain' },
      { title: 'AI-Negotiated Dynamic Energy Procurement for Hyperscale Facilities', description: 'Sentinels continuously analyze volatile energy markets, predict price fluctuations across various sources (renewables, grid, futures), and autonomously negotiate optimal, real-time energy contracts for large-scale operations like data centers or fusion research facilities.', imageHint: 'energy procurement data center' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'procurement network optimization' },
  },
  {
    slug: 'human-resources',
    title: 'AI-Powered HR Transformation',
    shortDescription: 'Automate talent acquisition, employee engagement, and workforce analytics with AI.',
    longDescription: 'Re-engineer your human capital strategy with AI-Powered HR Transformation. Mendus provides intelligent solutions to automate and optimize the entire employee lifecycle. From identifying and attracting top-tier global talent using predictive analytics to fostering deep employee engagement through personalized development pathways and providing actionable insights into workforce dynamics, our AI elevates HR to a strategic driver of organizational excellence and innovation.',
    icon: UserCog, 
    iconColorClass: 'text-teal-500',
    keyFeatures: [
      'Predictive talent acquisition: Identifying passive candidates and forecasting future skill needs.',
      'AI-driven personalized learning and development paths for continuous upskilling and reskilling.',
      'Intelligent employee sentiment analysis and proactive engagement strategies.',
      'Automated, bias-mitigated candidate screening and interview scheduling.',
      'Advanced workforce analytics for optimizing team composition, performance, and retention.',
      'AI-powered tools for fair and transparent performance management and compensation structuring.',
    ],
    benefits: [
      'Significantly reduce time-to-hire and improve quality of talent acquisition.',
      'Boost employee engagement, satisfaction, and retention through personalized experiences.',
      'Develop a highly skilled, agile, and future-ready workforce.',
      'Mitigate bias in HR processes, fostering a more diverse and inclusive workplace.',
      'Gain deep, data-driven insights for strategic workforce planning and organizational design.',
      'Automate routine HR tasks, freeing HR professionals to focus on strategic initiatives and human connection.',
    ],
    exampleUseCases: [
      { title: 'AI-Driven Global Talent Scouting & Matching', description: 'Sentinels continuously scan global talent pools, academic publications, and professional networks to identify individuals with unique skill sets or high potential for specific, hard-to-fill roles, initiating personalized outreach.', imageHint: 'talent acquisition global network' },
      { title: 'Adaptive Employee Wellbeing & Burnout Prevention System', description: 'AI analyzes anonymized work patterns, communication sentiment, and workload data to identify early signs of burnout or disengagement, proactively suggesting interventions or resources to managers and employees.', imageHint: 'employee wellbeing data chart' },
      { title: 'Dynamic Skill Gap Analysis & Personalized Training Orchestration', description: 'AI maps current organizational skills against future strategic needs, identifies gaps, and automatically curates or recommends personalized training modules and mentorship connections for employees.', imageHint: 'skill development futuristic interface' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'hr human resources tech' },
  }
];

export const getSolutionBySlug = (slug: string): Solution | undefined => {
  return solutions.find((solution) => solution.slug === slug);
};


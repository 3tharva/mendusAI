
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
    longDescription: 'Navigate the complex world of regulations with ease. Our AI Digital Workers continuously monitor for risks, adapt to new rules automatically, and keep detailed records for audits. This proactive approach helps protect your business and turns compliance into a streamlined, efficient process, rather than a burden.',
    icon: ShieldCheck,
    iconColorClass: 'text-green-500',
    keyFeatures: [
      'Advanced risk modeling to identify potential issues early.',
      'Automated adaptation to new regulatory requirements.',
      'Self-correcting systems for immediate compliance fixes.',
      'Secure, privacy-focused audit trail generation.',
      'Predictive insights into potential ethical considerations for AI use.',
      'Automated reporting for various legal jurisdictions.',
      'Quick dissemination of policy updates across your company.'
    ],
    benefits: [
      'Greatly reduce the chance of compliance breaches and unexpected risks.',
      'Maintain ongoing compliance with less manual effort.',
      'Build trust with stakeholders through transparent governance.',
      'Prepare your operations for future regulatory changes.',
      'Make compliance a more cost-effective part of your strategy.',
      'Improve decision-making with instant risk intelligence.',
      'Lower costs tied to manual compliance and audits.'
    ],
    exampleUseCases: [
      { title: 'AI Monitoring for Financial Trading', description: 'Digital Workers oversee high-frequency trading to ensure it meets financial rules, preventing issues and promoting ethical trading.', imageHint: 'trading workflow' },
      { title: 'Automated Smart Contract Verification', description: 'AI agents check smart contracts for security flaws and correct operation, preventing problems in decentralized systems.', imageHint: 'contract workflow' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'risk workflow' },
  },
  {
    slug: 'customer-services',
    title: 'Customer Services',
    shortDescription: 'Enhance customer experiences with smart automation that understands intent, personalizes interactions, and ensures quick resolutions across all service channels.',
    longDescription: 'Transform customer interactions into strong partnerships. Mendus Digital Workers offer highly personalized engagement by understanding what customers need, often before they ask. This builds loyalty and creates value. Our AI ensures every customer contact is a chance to strengthen relationships and learn, making customer service a source of innovation.',
    icon: Users,
    iconColorClass: 'text-red-400',
    keyFeatures: [
      'AI with advanced language understanding and emotional awareness.',
      'Proactive customer journey mapping and early issue resolution.',
      'Instant, accurate information delivery through dynamic knowledge access.',
      'Smooth integration across all communication channels.',
      'AI-driven creation of new solutions for unique customer problems.',
      'Real-time sentiment analysis to understand customer satisfaction.',
      'Personalized recommendations for relevant products or services.'
    ],
    benefits: [
      'Build deep customer loyalty and turn users into advocates.',
      'Change customer service from a cost to a source of revenue and insight.',
      'Support human agents by handling routine tasks, allowing them to focus on complex issues.',
      'Gain valuable insights into customer desires and market trends.',
      'Deliver consistently excellent experiences tailored to individual needs.',
      'Increase customer lifetime value through proactive engagement.',
      'Reduce customer churn with personalized retention efforts.'
    ],
    exampleUseCases: [
      { title: 'Proactive AI Concierge for Complex Products', description: 'Digital Workers anticipate user needs for sophisticated offerings (like personalized medicine or complex software), providing help and resources proactively.', imageHint: 'assistant workflow' },
      { title: 'AI-Assisted Conflict Resolution', description: 'Digital Workers help resolve customer complaints by impartially analyzing situations, simulating outcomes, and suggesting fair solutions.', imageHint: 'resolution workflow' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'service workflow' },
  },
   {
    slug: 'customer-support',
    title: 'Customer Support',
    shortDescription: 'Deliver exceptional customer support with fast response times, knowledgeable agents, and 24/7 assistance to ensure seamless experiences and satisfaction.',
    longDescription: 'Move to intelligent, autonomous support. Mendus Digital Workers handle a wide range of support tasks, from answering questions instantly to complex problem-solving. The system learns from every interaction, improving its ability to resolve issues on the first try and only escalating truly new challenges to human experts. This means scalable, high-quality support that improves efficiency and customer happiness.',
    icon: Headset,
    iconColorClass: 'text-blue-500',
    keyFeatures: [
      'Multi-level AI support, from chatbots to deep diagnostic agents.',
      'Automated root cause analysis for complex issues.',
      'Self-improving knowledge bases from every resolved problem.',
      'Smart resource planning for peak support times.',
      'AI-generated, personalized troubleshooting guides.',
      'Integration with CRM systems for a complete customer view.',
      'Automated ticket sorting and prioritization.'
    ],
    benefits: [
      'Resolve most support issues in seconds.',
      'Greatly increase support capacity without proportionally increasing costs.',
      'Allow human specialists to focus on training AI and unique problems.',
      'Build a more resilient system and drive continuous improvement.',
      'Offer 24/7 support across all channels and languages.',
      'Significantly improve first-contact resolution rates.',
      'Boost agent productivity by automating repetitive tasks.'
    ],
    exampleUseCases: [
      { title: 'Automated Issue Resolution for SaaS Platforms', description: 'Digital Workers automatically find, diagnose, and fix platform issues, often before users notice, documenting everything for future prevention.', imageHint: 'saas workflow' },
      { title: 'AI-Powered Personalized Customer Onboarding', description: 'Digital Workers guide new users through complex software with learning paths tailored to individual styles and usage.', imageHint: 'learning workflow' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'support workflow' },
  },
  {
    slug: 'digital-supply-chain',
    title: 'Digital Supply Chain',
    shortDescription: 'Predict demand, track shipments, and manage inventory more efficiently through autonomous agents that power a connected and agile supply chain.',
    longDescription: 'Transform your supply chain into an intelligent, global logistics network. Mendus AI Digital Workers manage a dynamic, self-optimizing system that anticipates disruptions, automatically reroutes resources, and handles inventory with extreme efficiency. This creates true logistical strength and adaptability, optimizing for cost, speed, and sustainability.',
    icon: Truck,
    iconColorClass: 'text-blue-400',
    keyFeatures: [
      'Advanced simulations to predict and model potential disruptions.',
      'Autonomous coordination of various transport modes (drones, ships, ground transport).',
      'Decentralized inventory management using AI for optimal Just-In-Time delivery.',
      'AI-driven verification for ethical sourcing and material tracking.',
      'Real-time analysis and optimization of carbon footprint for logistics.',
      'Predictive demand forecasting using machine learning.',
      'Automated supplier performance monitoring.'
    ],
    benefits: [
      'Achieve nearly zero unplanned disruptions through predictive action.',
      'Significantly reduce logistics costs and environmental impact.',
      'Gain real-time, end-to-end visibility across your supply chain.',
      'Enable a dynamically adaptive and resilient global trade network.',
      'Optimize resource use and Just-In-Time delivery precision.',
      'Improve inventory turnover and reduce holding costs.',
      'Enhance supplier collaboration.'
    ],
    exampleUseCases: [
      { title: 'Autonomous Resource Logistics for Space Exploration', description: 'AI agents coordinate resource extraction, processing, and transport between Earth, Moon, and Mars, optimizing for transit times and energy use.', imageHint: 'logistics workflow' },
      { title: 'Self-Managing Pharmaceutical Cold Chains', description: 'Digital Workers monitor global pharmaceutical supply lines, rerouting temperature-sensitive items and verifying their integrity using IoT data.', imageHint: 'pharma workflow' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'supply workflow' },
  },
  {
    slug: 'finance-services',
    title: 'Financial Services',
    shortDescription: 'Automate financial workflows with AI agents for faster approvals, risk detection, compliance, and smarter decision-making across financial operations.',
    longDescription: 'Pioneer the next generation of financial operations. Mendus provides an AI framework for autonomous financial tools, highly accurate market predictions, and automated risk management. Our Digital Workers conduct continuous economic forecasting and smart treasury management, promoting stable and efficient capital markets while ensuring compliance and fraud prevention.',
    icon: DollarSign,
    iconColorClass: 'text-yellow-500',
    keyFeatures: [
      'AI-generated synthetic financial instruments with adaptive risk settings.',
      'Predictive modeling of economic shifts and financial network risks.',
      'Automated regulatory reporting and compliance for diverse financial rules.',
      'Transparent investment and governance tools for decentralized finance.',
      'Real-time fraud detection using advanced analytics.',
      'Algorithmic trading strategy optimization.',
      'AI-powered credit scoring and loan automation.'
    ],
    benefits: [
      'Enhance capital market efficiency through intelligent automation.',
      'Proactively identify and manage systemic financial risks.',
      'Make sophisticated financial tools and advice more accessible.',
      'Dramatically reduce operational costs with extensive automation.',
      'Achieve unparalleled financial transparency for regulators.',
      'Improve accuracy in financial forecasting.',
      'Increase speed and efficiency of financial transactions.'
    ],
    exampleUseCases: [
      { title: 'AI-Orchestrated Global Economic Monitoring', description: 'AI agents monitor global economic indicators, identify potential instabilities, and propose actions to maintain financial balance or advise central banks.', imageHint: 'economic workflow' },
      { title: 'Autonomous Insurance & Risk Platforms', description: 'Digital Workers assess complex insurance risks, generate personalized policies, and autonomously process claims with high accuracy and fraud detection.', imageHint: 'insurance workflow' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'finance workflow' },
  },
  {
    slug: 'agentic-security-operations',
    title: 'Agentic Security Operations',
    shortDescription: 'Secure your infrastructure with agents that detect threats in real time, automate response actions, and maintain continuous security posture monitoring.',
    longDescription: 'Deploy a Cognitive Cyber Defense. Autonomous Mendus Digital Workers proactively hunt, identify, analyze, and neutralize advanced cyber threats, including AI-driven attacks, in real-time. The system learns from every encounter, collectively evolving its defensive strategies to ensure digital safety and minimize incident impact.',
    icon: Lock,
    iconColorClass: 'text-orange-500',
    keyFeatures: [
      'Autonomous AI "Red Teams" and "Blue Teams" for continuous security testing.',
      'Predictive threat intelligence using dark web analysis and global sensors.',
      'Self-deploying, adaptive security measures applied at network speed.',
      'Advanced encryption protocols and AI-driven cryptographic updates.',
      'AI-generated incident response plans and automated forensics.',
      'Behavioral biometrics for advanced user authentication.',
      'Automated security policy enforcement.'
    ],
    benefits: [
      'Achieve threat detection and automated neutralization in milliseconds.',
      'Proactively defend against new exploits and AI-generated malware.',
      'Reduce reliance on human analysts for tactical responses, freeing them for strategy.',
      'Create a self-healing, dynamically resilient digital infrastructure.',
      'Ensure operational continuity during large-scale cyber attacks.',
      'Decrease time to detect and time to respond to threats.',
      'Improve overall security posture and reduce organizational risk.'
    ],
    exampleUseCases: [
      { title: 'Autonomous Defense Against Distributed Attacks', description: 'AI Digital Workers dynamically reconfigure networks and deploy smart decoys to neutralize massive DDoS and botnet attacks in real-time.', imageHint: 'defense workflow' },
      { title: 'AI-Driven Active Deception Networks', description: 'Digital Workers create realistic decoy environments to trap, analyze, and learn from sophisticated attackers, gathering intelligence on their methods.', imageHint: 'threat workflow' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'security workflow' },
  },
  {
    slug: 'it-operations-service-management',
    title: 'IT Operations and Service Management',
    shortDescription: 'Optimize system uptime and reduce manual workload by using autonomous workflows to handle incident response, alerts, and routine service tasks.',
    longDescription: 'Achieve Autonomic IT Operations. Mendus AI Digital Workers autonomously manage your IT lifecycle, from predicting hardware failures and dynamically allocating resources, to automating software deployment and intelligently resolving incidents. This transforms IT operations into proactive, self-optimizing system management, improving reliability and efficiency.',
    icon: ServerIcon,
    iconColorClass: 'text-purple-500',
    keyFeatures: [
      'Predictive auto-scaling and resource optimization for cloud/edge systems.',
      'AI-driven root cause analysis for complex system failures.',
      'Automated generation and execution of fixes for IT incidents.',
      'Zero-touch infrastructure setup and configuration management.',
      'AI-powered capacity planning and performance prediction.',
      'Automated patch management and software updates.',
      'Intelligent log analysis for proactive issue identification.'
    ],
    benefits: [
      'Achieve unprecedented levels of system uptime.',
      'Drastically reduce IT operational costs and total cost of ownership.',
      'Enable IT teams to focus on innovation rather than routine tasks.',
      'Create a scalable, self-healing, and adaptive IT environment.',
      'Automate compliance with service level agreements and regulations.',
      'Reduce alert fatigue for IT staff through smart filtering.',
      'Improve service delivery speed and quality.'
    ],
    exampleUseCases: [
      { title: 'Self-Optimizing Global Content Delivery Network (CDN)', description: 'AI agents dynamically adjust content caching, server loads, and network paths for optimal, low-latency content delivery worldwide.', imageHint: 'cdn workflow' },
      { title: 'Autonomous Database Performance Management', description: 'Digital Workers monitor database performance, autonomously performing optimizations, index management, and failover procedures.', imageHint: 'database workflow' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'it workflow' },
  },
  {
    slug: 'asset-management',
    title: 'Asset Management',
    shortDescription: 'Track, manage, and optimize assets across their lifecycle with smart automation tools designed to integrate smoothly with existing business processes and enterprise systems.',
    longDescription: 'Implement Intelligent Asset Orchestration. Mendus AI Digital Workers track, manage, and optimize the lifecycle of diverse assets – physical infrastructure, industrial equipment, digital IP, and even AI capabilities. This ensures maximum value, predictive maintenance, and strategic resource deployment for better operational efficiency and reduced costs.',
    icon: Archive,
    iconColorClass: 'text-green-600',
    keyFeatures: [
      'High-fidelity digital twin creation and real-time sync for all asset types.',
      'Predictive failure analysis using multi-sensor data and physics-informed AI.',
      'AI-driven optimization of asset use and redeployment.',
      'Automated compliance tracking for asset-specific rules and maintenance.',
      'Secure, blockchain-based records for asset history.',
      'Lifecycle cost analysis and optimization for capital assets.',
      'Automated inventory tracking for spare parts.'
    ],
    benefits: [
      'Maximize return on asset investments through better use and longevity.',
      'Minimize unplanned downtime and maintenance costs with predictive analytics.',
      'Optimize resource allocation and capital planning.',
      'Enable circular economy models through smart end-of-life asset management.',
      'Enhance operational safety and ensure continuous compliance.',
      'Improve accuracy of asset valuation.',
      'Streamline asset auditing and reporting.'
    ],
    exampleUseCases: [
      { title: 'Autonomous Fleet Management for Space Mining', description: 'AI Digital Workers manage autonomous mining rovers on asteroids, optimizing routes, predicting wear, scheduling maintenance, and coordinating resource transport.', imageHint: 'mining workflow' },
      { title: 'Cognitive Asset Management for Enterprise AI Models', description: 'Tracks performance, bias, and strategic value of AI models as assets, recommending retraining, retirement, or new applications to optimize the AI portfolio.', imageHint: 'model workflow' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'asset workflow' },
  },
  {
    slug: 'revenue-cycle-management',
    title: 'Revenue Cycle Management',
    shortDescription: 'Accelerate billing, claims, and collections with autonomous workflows that reduce errors, shorten cycles, and improve financial outcomes across operations.',
    longDescription: 'Achieve Automated Value Stream Optimization. Mendus AI Digital Workers manage the entire revenue lifecycle, from predictive lead qualification and dynamic pricing, to automated invoicing, intelligent claims processing, and adaptive collections. This ensures maximum value capture and financial agility, minimizing revenue leakage and improving cash flow.',
    icon: RefreshCw,
    iconColorClass: 'text-pink-500',
    keyFeatures: [
      'AI-driven predictive Customer Lifetime Value (CLTV) modeling.',
      'Dynamic, real-time pricing adjustments based on market conditions.',
      'Automated, multi-jurisdictional tax compliance.',
      'Intelligent dispute resolution and personalized collections.',
      'Predictive cash flow modeling and working capital optimization.',
      'Automated coding and charge capture for healthcare RCM.',
      'AI-powered denial management and appeals.'
    ],
    benefits: [
      'Significantly speed up cash flow and reduce Days Sales Outstanding (DSO).',
      'Maximize revenue through optimized pricing and reduced leakage.',
      'Automate over 95% of manual revenue cycle tasks.',
      'Gain real-time, predictive insights into financial health.',
      'Enhance customer satisfaction with efficient and transparent financial interactions.',
      'Improve billing accuracy and reduce claim errors.',
      'Increase clean claim rates and reduce aging accounts receivable.'
    ],
    exampleUseCases: [
      { title: 'AI-Powered Adaptive Subscription Management', description: 'Digital Workers manage the subscriber journey from acquisition and dynamic pricing to usage-based billing, automated renewals, and proactive retention.', imageHint: 'subscription workflow' },
      { title: 'Autonomous Royalty and Licensing Management', description: 'AI agents track usage of digital IP, calculate complex royalties, and automate secure payouts using smart contracts.', imageHint: 'rights workflow' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'revenue workflow' },
  },
  {
    slug: 'ai-dashboard-for-governance',
    title: 'AI Dashboard for Governance',
    shortDescription: 'Gain real-time oversight with dynamic dashboards that track agent activities, enforce policies, and ensure accountability across workflows and decision-making.',
    longDescription: 'Establish comprehensive control with the AI Governance & Oversight Matrix. This Mendus solution provides a dynamic dashboard for real-time monitoring, auditing, and governance of all AI Digital Workers. Ensure ethical alignment, track emergent behaviors, verify compliance, and maintain ultimate human oversight for responsible AI deployment.',
    icon: LayoutDashboard,
    iconColorClass: 'text-indigo-500',
    keyFeatures: [
      'Real-time visualization of AI agent decision processes.',
      'Automated detection of ethical drifts and bias in AI models.',
      'Immutable audit trails of all AI agent actions.',
      'Sophisticated human-in-the-loop protocols for intervention.',
      'Scenario modeling for testing AI responses to new ethical challenges.',
      'Role-based access control for dashboard features.',
      'Customizable alerts for policy violations or unusual agent behavior.'
    ],
    benefits: [
      'Maintain robust ethical control over autonomous AI systems.',
      'Ensure continuous compliance with AI regulations and internal policies.',
      'Increase stakeholder trust through transparency in AI operations.',
      'Quickly identify and remediate AI performance issues or biases.',
      'Foster a culture of responsible AI development.',
      'Streamline AI auditing processes.',
      'Provide clear oversight for complex AI ecosystems.'
    ],
    exampleUseCases: [
      { title: 'Ethical Oversight for Autonomous Financial Trading', description: 'The Matrix monitors AI trading algorithms for market manipulation, adherence to duty, and compliance with limits, allowing real-time human intervention.', imageHint: 'ethics workflow' },
      { title: 'Compliance Auditing for AI in Healthcare', description: 'Tracks diagnostic AI for fairness, adherence to guidelines, and patient data privacy, flagging anomalies for human review.', imageHint: 'healthcare workflow' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'governance workflow' },
  },
  {
    slug: 'procurement',
    title: 'Procurement',
    shortDescription: 'Streamline sourcing and contract management by deploying AI-driven workflows that accelerate approvals, enforce compliance, and optimize vendor performance.',
    longDescription: 'Revolutionize procurement with Predictive Strategic Sourcing. Mendus AI Digital Workers analyze global markets, predict resource scarcity, identify optimal suppliers, and automate complex negotiation and purchasing. This ensures a continuous, cost-effective, and ethical flow of resources, transforming procurement into a strategic value driver.',
    icon: ShoppingCart,
    iconColorClass: 'text-purple-400',
    keyFeatures: [
      'AI-powered risk modeling for supply chain vulnerabilities.',
      'Autonomous discovery, vetting, and monitoring of suppliers.',
      'Generative AI for drafting, analyzing, and negotiating contracts.',
      'Predictive commodity pricing models and automated risk-hedging.',
      'AI-driven sustainable and ethical sourcing verification.',
      'Automated purchase order generation and invoice matching.',
      'Supplier performance tracking.'
    ],
    benefits: [
      'Secure critical resources proactively and achieve cost savings.',
      'Build resilient, ethically transparent, and adaptive supply networks.',
      'Automate procurement cycles, reducing lead times and manual effort.',
      'Gain a strategic edge through superior market intelligence.',
      'Optimize working capital and reduce inventory holding costs.',
      'Improve contract compliance and reduce maverick spend.',
      'Enhance supplier relationships through efficient processes.'
    ],
    exampleUseCases: [
      { title: 'Autonomous Sourcing of Strategic Materials', description: 'AI Digital Workers monitor global surveys, mining operations, and geopolitical stability to secure sustainable sources of critical materials.', imageHint: 'sourcing workflow' },
      { title: 'AI-Negotiated Dynamic Energy Procurement', description: 'Digital Workers continuously analyze energy markets, predict price fluctuations, and autonomously negotiate optimal real-time energy contracts for large operations.', imageHint: 'energy workflow' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'procurement workflow' },
  },
  {
    slug: 'human-resources',
    title: 'Human Resources Transformation',
    shortDescription: 'Automate talent acquisition, employee engagement, and workforce analytics with AI agents that personalize experiences and optimize HR processes.',
    longDescription: 'Re-engineer your human capital strategy with AI-driven insights and automation. Mendus provides intelligent solutions to optimize the entire employee lifecycle. From identifying and attracting top-tier global talent using predictive analytics to fostering deep employee engagement through personalized development pathways, our AI elevates HR to a strategic driver of organizational excellence and innovation. We help you build a future-ready workforce by understanding skill gaps and personalizing growth opportunities.',
    icon: UserCog,
    iconColorClass: 'text-teal-500',
    keyFeatures: [
      'Predictive talent acquisition: Identifying passive candidates and forecasting future skill needs.',
      'AI-driven personalized learning and development paths for continuous upskilling and reskilling.',
      'Intelligent employee sentiment analysis and proactive engagement strategies to reduce attrition.',
      'Automated, bias-mitigated candidate screening and interview scheduling.',
      'Advanced workforce analytics for optimizing team composition, performance, and succession planning.',
      'AI-powered tools for fair performance management, compensation structuring, and benefits administration.',
      'Automated onboarding workflows for a seamless new hire experience.'
    ],
    benefits: [
      'Significantly reduce time-to-hire and improve quality of talent acquisition.',
      'Boost employee engagement, satisfaction, and retention through personalized experiences.',
      'Develop a highly skilled, agile, and future-ready workforce adaptive to market changes.',
      'Mitigate bias in HR processes, fostering a diverse and inclusive workplace.',
      'Gain data-driven insights for strategic workforce planning and organizational development.',
      'Automate routine HR tasks, freeing HR professionals for strategic initiatives and employee interaction.',
      'Improve compliance with labor laws and internal HR policies.'
    ],
    exampleUseCases: [
      { title: 'AI-Driven Global Talent Scouting & Matching', description: 'Digital Workers continuously scan global talent pools, academic publications, and professional networks to identify individuals with unique skill sets, initiating personalized outreach for recruitment.', imageHint: 'talent workflow' },
      { title: 'Adaptive Employee Wellbeing & Burnout Prevention System', description: 'AI analyzes anonymized work patterns, communication sentiment, and survey feedback to identify early signs of burnout, proactively suggesting interventions and support resources.', imageHint: 'wellbeing workflow' },
      { title: 'Dynamic Skill Gap Analysis & Personalized Training Orchestration', description: 'AI maps current organizational skills against future strategic needs, identifies critical gaps, and automatically curates or recommends personalized training modules and career paths.', imageHint: 'skill workflow' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'hr workflow' },
  }
];

export const getSolutionBySlug = (slug: string): Solution | undefined => {
  return solutions.find((solution) => solution.slug === slug);
};

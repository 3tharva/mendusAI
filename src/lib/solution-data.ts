
import type { LucideIcon } from 'lucide-react';
import {
  ShieldCheck, Users, Headset, Truck, DollarSign, Lock, ServerIcon, Archive,
  RefreshCw, LayoutDashboard, ShoppingCart, CheckCircle, Brain, Settings, BarChart3
} from 'lucide-react';

export interface SolutionUseCase {
  title: string;
  description: string;
  imageHint: string; // For placeholder image generation
}

export interface Solution {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  iconColorClass?: string; // Optional: Tailwind class for specific icon color if needed
  keyFeatures: string[];
  benefits: string[];
  exampleUseCases: SolutionUseCase[];
  heroImage: { // For detail page
    path: string;
    hint: string;
  };
}

export const solutions: Solution[] = [
  {
    slug: 'risk-compliance-management',
    title: 'Risk and Compliance Management',
    shortDescription: 'Mitigating risks and ensuring regulatory compliance across business operations.',
    longDescription: 'Streamline your risk management and compliance processes with AI-driven automation. Our solution helps identify potential risks, monitor regulatory changes, and ensure adherence to internal policies and external mandates, reducing operational overhead and potential penalties.',
    icon: ShieldCheck,
    iconColorClass: 'text-green-500',
    keyFeatures: [
      'Automated regulatory change monitoring',
      'AI-powered risk assessment and scoring',
      'Continuous compliance tracking and reporting',
      'Workflow automation for incident response',
    ],
    benefits: [
      'Reduce compliance costs and effort',
      'Improve risk visibility and proactive management',
      'Enhance operational resilience',
      'Ensure audit readiness',
    ],
    exampleUseCases: [
      { title: 'Automated Policy Adherence Checks', description: 'AI agents continuously monitor business activities against defined policies.', imageHint: 'compliance checklist policy' },
      { title: 'Financial Transaction Monitoring for AML', description: 'Detect suspicious activities and potential money laundering patterns in real-time.', imageHint: 'financial security data' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'risk management strategy' },
  },
  {
    slug: 'customer-services',
    title: 'Customer Services',
    shortDescription: 'Enhance experiences with AI-driven, personalized customer service automation tools.',
    longDescription: 'Transform your customer service with AI-powered tools that provide personalized, efficient, and scalable support. Automate routine inquiries, empower agents with intelligent insights, and deliver exceptional customer experiences across all channels.',
    icon: Users,
    iconColorClass: 'text-red-400',
    keyFeatures: [
      'AI chatbots for 24/7 support',
      'Intelligent ticket routing and prioritization',
      'Sentiment analysis for customer feedback',
      'Personalized recommendations and offers',
    ],
    benefits: [
      'Improve customer satisfaction (CSAT)',
      'Reduce agent workload and operational costs',
      'Increase first contact resolution rates',
      'Gain deeper insights into customer needs',
    ],
    exampleUseCases: [
      { title: 'AI-Powered FAQ & Self-Service Portals', description: 'Customers find answers quickly through intelligent search and conversational interfaces.', imageHint: 'customer self service' },
      { title: 'Proactive Customer Engagement', description: 'Identify and reach out to customers with relevant information or support before they encounter issues.', imageHint: 'customer engagement team' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'customer service excellence' },
  },
  {
    slug: 'customer-support',
    title: 'Customer Support',
    shortDescription: 'Deliver fast, consistent resolutions using intelligent virtual agents and support workflows.',
    longDescription: 'Elevate your customer support capabilities with intelligent virtual agents and automated workflows. Our solution ensures fast, consistent, and accurate resolutions to customer issues, improving efficiency and agent productivity.',
    icon: Headset,
    iconColorClass: 'text-blue-500',
    keyFeatures: [
      'Intelligent virtual agents for issue resolution',
      'Automated support ticket categorization and assignment',
      'Knowledge base integration for quick answers',
      'Performance analytics for support teams',
    ],
    benefits: [
      'Faster response and resolution times',
      'Consistent service quality',
      'Improved agent productivity and satisfaction',
      'Scalable support operations',
    ],
    exampleUseCases: [
      { title: 'Automated Password Reset & Account Unlocking', description: 'Virtual agents handle common IT support requests instantly.', imageHint: 'support agent computer' },
      { title: 'Guided Troubleshooting Workflows', description: 'AI assists customers and agents through complex problem-solving steps.', imageHint: 'technical support flow' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'dedicated customer support' },
  },
  {
    slug: 'digital-supply-chain',
    title: 'Digital Supply Chain',
    shortDescription: 'Optimize supply chain visibility, planning, and fulfillment through AI-powered automation.',
    longDescription: 'Build a resilient and agile supply chain with AI-driven insights and automation. Our solution enhances visibility across your network, improves demand forecasting, optimizes inventory, and streamlines logistics for greater efficiency and responsiveness.',
    icon: Truck,
    iconColorClass: 'text-blue-400',
    keyFeatures: [
      'Real-time shipment tracking and visibility',
      'AI-powered demand forecasting and inventory optimization',
      'Automated order processing and fulfillment',
      'Supplier risk management and performance monitoring',
    ],
    benefits: [
      'Reduce operational costs and improve efficiency',
      'Enhance supply chain resilience and agility',
      'Improve on-time delivery rates',
      'Optimize working capital with better inventory management',
    ],
    exampleUseCases: [
      { title: 'AI-Optimized Warehouse Management', description: 'Automate stock placement, picking routes, and resource allocation within warehouses.', imageHint: 'warehouse logistics automation' },
      { title: 'Predictive ETA for Shipments', description: 'Provide customers with accurate delivery time predictions based on real-time data and AI models.', imageHint: 'global logistics network' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'global supply chain' },
  },
  {
    slug: 'finance-services',
    title: 'Finance Services',
    shortDescription: 'Streamline invoicing, reconciliation, and reporting with intelligent finance process automation.',
    longDescription: 'Automate and optimize your financial operations with intelligent process automation. Our solution streamlines tasks like invoicing, accounts payable/receivable, financial reconciliation, and reporting, freeing up your finance team for more strategic activities.',
    icon: DollarSign,
    iconColorClass: 'text-yellow-500',
    keyFeatures: [
      'Automated invoice processing and data extraction',
      'AI-powered accounts reconciliation',
      'Intelligent financial reporting and analytics',
      'Automated compliance checks and audit trails',
    ],
    benefits: [
      'Increase accuracy and reduce manual errors',
      'Accelerate financial closing cycles',
      'Improve cash flow visibility and management',
      'Enhance financial controls and compliance',
    ],
    exampleUseCases: [
      { title: 'Automated Expense Report Processing', description: 'AI validates receipts, checks policy compliance, and processes expense reports automatically.', imageHint: 'financial documents processing' },
      { title: 'AI-Driven Cash Flow Forecasting', description: 'Predict future cash positions with greater accuracy to support better financial planning.', imageHint: 'financial charts growth' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'modern finance technology' },
  },
  {
    slug: 'agentic-security-operations',
    title: 'Agentic Security Operations',
    shortDescription: 'Autonomous threat detection and response using agent-based security intelligence systems.',
    longDescription: 'Strengthen your cybersecurity posture with autonomous threat detection, investigation, and response. Our agent-based security intelligence systems leverage AI to identify and neutralize threats faster and more effectively than traditional methods.',
    icon: Lock,
    iconColorClass: 'text-orange-500',
    keyFeatures: [
      'AI-driven threat hunting and anomaly detection',
      'Automated incident investigation and triage',
      'Autonomous response and remediation actions',
      'Continuous security posture monitoring',
    ],
    benefits: [
      'Faster threat detection and response times (MTTD/MTTR)',
      'Reduce security analyst fatigue and workload',
      'Improve accuracy of threat identification',
      'Proactively adapt to evolving threat landscapes',
    ],
    exampleUseCases: [
      { title: 'Automated Phishing Attack Response', description: 'AI agents identify phishing emails, quarantine them, and alert users automatically.', imageHint: 'cyber security lock' },
      { title: 'Autonomous Endpoint Detection and Response (EDR)', description: 'AI monitors endpoint activity, detects malware, and isolates infected devices.', imageHint: 'security operations center' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'cybersecurity operations' },
  },
  {
    slug: 'it-operations-service-management',
    title: 'IT Operations and Service Management',
    shortDescription: 'Automate incident response, monitoring, and IT workflows with intelligent agents.',
    longDescription: 'Enhance your IT operations (ITOps) and IT service management (ITSM) with intelligent automation. Our solution uses AI agents to automate incident detection and resolution, proactively monitor system health, and streamline IT workflows for improved efficiency and reliability.',
    icon: ServerIcon, // Or Settings2
    iconColorClass: 'text-purple-500',
    keyFeatures: [
      'AI-powered incident detection and root cause analysis',
      'Automated remediation of common IT issues',
      'Predictive analytics for system performance and capacity planning',
      'Intelligent IT workflow automation',
    ],
    benefits: [
      'Reduce IT downtime and improve system availability',
      'Increase IT operational efficiency',
      'Lower IT support costs',
      'Enable proactive IT management',
    ],
    exampleUseCases: [
      { title: 'Automated Server Patching and Updates', description: 'AI agents manage patch deployment schedules and execution based on risk and business impact.', imageHint: 'server room data center' },
      { title: 'AIOps for Proactive Issue Resolution', description: 'AI analyzes monitoring data to predict potential issues and trigger automated fixes before users are impacted.', imageHint: 'it infrastructure monitoring' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'it operations management' },
  },
  {
    slug: 'asset-management',
    title: 'Asset Management',
    shortDescription: 'Track, manage, and optimize assets across lifecycle with smart automation tools.',
    longDescription: 'Optimize the lifecycle of your physical and digital assets with smart automation tools. Our solution provides comprehensive tracking, predictive maintenance scheduling, and performance optimization to maximize asset value and minimize operational disruptions.',
    icon: Archive, // Or Box
    iconColorClass: 'text-green-600',
    keyFeatures: [
      'Centralized asset registry and tracking',
      'AI-driven predictive maintenance scheduling',
      'Asset performance monitoring and analytics',
      'Automated compliance and lifecycle management',
    ],
    benefits: [
      'Maximize asset uptime and lifespan',
      'Reduce maintenance costs',
      'Improve asset utilization and ROI',
      'Ensure regulatory compliance for assets',
    ],
    exampleUseCases: [
      { title: 'Predictive Maintenance for Industrial Equipment', description: 'AI analyzes sensor data to predict failures and schedule maintenance for machinery.', imageHint: 'industrial asset management' },
      { title: 'Software Asset Management (SAM)', description: 'Automate tracking of software licenses, usage, and compliance to optimize spend.', imageHint: 'software inventory screen' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'asset lifecycle management' },
  },
  {
    slug: 'revenue-cycle-management',
    title: 'Revenue Cycle Management',
    shortDescription: 'Accelerate billing, claims, and collections with AI-driven revenue cycle workflows.',
    longDescription: 'Optimize your healthcare revenue cycle with AI-driven automation. Our solution streamlines patient registration, coding, claims submission, denial management, and collections, helping you accelerate cash flow and reduce administrative burdens.',
    icon: RefreshCw, // Or PieChart
    iconColorClass: 'text-pink-500',
    keyFeatures: [
      'Automated medical coding and charge capture',
      'AI-powered claims scrubbing and submission',
      'Intelligent denial prediction and management',
      'Automated patient payment reminders and collections',
    ],
    benefits: [
      'Accelerate cash flow and reduce days in A/R',
      'Improve clean claim rates',
      'Reduce manual effort and administrative costs',
      'Enhance billing accuracy and compliance',
    ],
    exampleUseCases: [
      { title: 'AI-Assisted Medical Coding', description: 'NLP tools analyze clinical documentation to suggest accurate medical codes, improving speed and reducing errors.', imageHint: 'medical billing coding' },
      { title: 'Predictive Denial Management', description: 'AI identifies claims likely to be denied and provides insights for proactive correction, minimizing revenue loss.', imageHint: 'healthcare finance analytics' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'healthcare revenue cycle' },
  },
  {
    slug: 'ai-dashboard-governance',
    title: 'AI Dashboard for Governance',
    shortDescription: 'Centralized governance with actionable AI insights and policy compliance tracking.',
    longDescription: 'Establish robust AI governance with a centralized dashboard providing actionable insights and compliance tracking. Monitor your AI models, track their performance and fairness, and ensure adherence to ethical guidelines and regulatory requirements.',
    icon: LayoutDashboard, // Or GanttChartSquare
    iconColorClass: 'text-indigo-500',
    keyFeatures: [
      'Centralized AI model inventory and monitoring',
      'Bias detection and fairness assessment tools',
      'Policy compliance tracking and reporting',
      'Audit trails for AI decision-making processes',
    ],
    benefits: [
      'Ensure responsible and ethical AI deployment',
      'Mitigate risks associated with AI systems',
      'Improve transparency and accountability of AI',
      'Facilitate compliance with AI regulations',
    ],
    exampleUseCases: [
      { title: 'AI Model Performance & Drift Monitoring', description: 'Continuously track model accuracy and detect performance degradation over time.', imageHint: 'ai model analytics dashboard' },
      { title: 'Fairness Audits for AI Algorithms', description: 'Assess AI models for potential biases across different demographic groups.', imageHint: 'data ethics governance' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'ai governance dashboard' },
  },
  {
    slug: 'procurement',
    title: 'Procurement',
    shortDescription: 'Automate sourcing, vendor selection, and approvals with intelligent procurement workflows.',
    longDescription: 'Transform your procurement processes with intelligent automation. Our solution streamlines sourcing, automates vendor selection based on performance and risk, and accelerates approval workflows, leading to cost savings and improved supplier relationships.',
    icon: ShoppingCart, // Or ClipboardList
    iconColorClass: 'text-purple-400',
    keyFeatures: [
      'AI-powered spend analysis and category management',
      'Automated supplier discovery and onboarding',
      'Intelligent contract management and compliance',
      'Automated purchase order generation and approval workflows',
    ],
    benefits: [
      'Achieve significant cost savings',
      'Improve procurement efficiency and cycle times',
      'Enhance supplier collaboration and risk management',
      'Ensure compliance with procurement policies',
    ],
    exampleUseCases: [
      { title: 'Automated RFx Process Management', description: 'AI assists in creating RFPs/RFQs, evaluating supplier responses, and recommending optimal vendors.', imageHint: 'procurement negotiation meeting' },
      { title: 'Contract Lifecycle Management (CLM) with AI', description: 'Automate contract creation, review, and monitoring for compliance and renewal.', imageHint: 'digital contract signing' },
    ],
    heroImage: { path: 'https://placehold.co/1200x400.png', hint: 'strategic procurement process' },
  },
];

export const getSolutionBySlug = (slug: string): Solution | undefined => {
  return solutions.find((solution) => solution.slug === slug);
};


import type { LucideIcon } from 'lucide-react';
import { Landmark, Factory, Signal, Zap, Gamepad2, Clapperboard, ShoppingCart, Stethoscope, BrainCircuit, Briefcase } from 'lucide-react';

export interface IndustryUseCase {
  title: string;
  description: string;
  imageHint: string;
}

export interface Industry {
  slug: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  icon: LucideIcon;
  colorClass: string; // Tailwind class for icon background/color
  useCases: IndustryUseCase[];
  technicalAspects: string[];
  heroImage: {
    path: string;
    hint: string;
  };
}

export const industries: Industry[] = [
  {
    slug: 'finance',
    title: 'Finance',
    shortDescription: 'Secure, data-driven solutions enhancing banking, insurance, and investments.',
    longDescription: 'AI is revolutionizing the financial sector by enabling advanced fraud detection, personalized banking experiences, algorithmic trading, and intelligent risk management. Our solutions leverage machine learning to provide deeper insights and automate complex processes.',
    icon: Landmark,
    colorClass: 'text-red-500',
    useCases: [
      { title: 'AI-Powered Fraud Detection', description: 'Real-time anomaly detection to prevent fraudulent transactions and enhance security.', imageHint: 'security analytics' },
      { title: 'Algorithmic Trading', description: 'Sophisticated algorithms for high-frequency trading and portfolio optimization based on market predictions.', imageHint: 'stock market chart' },
      { title: 'Personalized Wealth Management', description: 'Robo-advisors offering tailored investment advice and financial planning using AI.', imageHint: 'financial planning' },
    ],
    technicalAspects: [
      'Machine Learning for predictive analytics',
      'Natural Language Processing (NLP) for customer service bots',
      'Blockchain integration for secure transactions',
      'Compliance with financial regulations (e.g., GDPR, CCPA)',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'modern finance technology' },
  },
  {
    slug: 'manufacturing',
    title: 'Manufacturing',
    shortDescription: 'Smart manufacturing, automation, and connected vehicle innovations.',
    longDescription: 'AI optimizes manufacturing processes through predictive maintenance, quality control automation, supply chain optimization, and robotics. We empower smart factories with data-driven insights for increased efficiency and reduced downtime.',
    icon: Factory,
    colorClass: 'text-orange-500',
    useCases: [
      { title: 'Predictive Maintenance', description: 'AI algorithms predict equipment failures, scheduling maintenance proactively to minimize downtime.', imageHint: 'industrial machinery' },
      { title: 'Automated Quality Control', description: 'Computer vision and AI inspect products for defects with higher accuracy and speed than manual methods.', imageHint: 'robotic arm factory' },
      { title: 'Supply Chain Optimization', description: 'AI models forecast demand, optimize inventory levels, and improve logistics for a resilient supply chain.', imageHint: 'logistics warehouse' },
    ],
    technicalAspects: [
      'IoT sensor integration for real-time data',
      'Computer Vision for quality assurance',
      'Digital Twin technology for process simulation',
      'Robotics Process Automation (RPA)',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'smart factory automation' },
  },
  {
    slug: 'telecom',
    title: 'Telecom',
    shortDescription: 'Seamless connectivity with 5G and advanced network solutions.',
    longDescription: 'AI enhances telecommunications by improving network management, customer experience, and service personalization. From optimizing network traffic to powering intelligent virtual assistants, AI is key to the next generation of telecom services.',
    icon: Signal,
    colorClass: 'text-green-500',
    useCases: [
      { title: 'Network Optimization', description: 'AI-driven analysis of network traffic to predict congestion and dynamically allocate resources for optimal performance.', imageHint: 'network servers' },
      { title: 'Customer Service Automation', description: 'Intelligent chatbots and virtual assistants handle customer inquiries and support, improving response times.', imageHint: 'customer support call center' },
      { title: 'Predictive Churn Analysis', description: 'Machine learning models identify customers at risk of churn, enabling proactive retention strategies.', imageHint: 'data analytics graph' },
    ],
    technicalAspects: [
      '5G network slicing and management',
      'Big Data analytics for network performance',
      'NLP for customer interaction analysis',
      'Edge computing for low-latency services',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'telecommunication towers' },
  },
  {
    slug: 'energy',
    title: 'Energy',
    shortDescription: 'Sustainable energy, smart grids, and efficient resource management.',
    longDescription: 'AI is transforming the energy sector by enabling smarter grids, optimizing renewable energy generation, improving energy trading, and enhancing demand forecasting. Our solutions promote sustainability and efficiency in energy production and consumption.',
    icon: Zap,
    colorClass: 'text-yellow-500',
    useCases: [
      { title: 'Smart Grid Management', description: 'AI algorithms optimize energy distribution, detect faults, and balance supply and demand in real-time.', imageHint: 'power lines sunset' },
      { title: 'Renewable Energy Forecasting', description: 'Predicting solar and wind power generation to improve grid stability and energy trading.', imageHint: 'wind turbines solar panels' },
      { title: 'Energy Consumption Optimization', description: 'AI-powered analytics for industrial and residential consumers to reduce energy waste and costs.', imageHint: 'smart home energy' },
    ],
    technicalAspects: [
      'SCADA system integration',
      'Time-series forecasting for demand and generation',
      'Optimization algorithms for grid balancing',
      'Cybersecurity for critical infrastructure',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'renewable energy landscape' },
  },
  {
    slug: 'gaming',
    title: 'Gaming',
    shortDescription: 'Immersive experiences using real-time technology and high performance.',
    longDescription: 'AI enhances gaming by creating more realistic non-player characters (NPCs), procedural content generation, player behavior analysis for personalized experiences, and advanced game testing. We help build dynamic and engaging game worlds.',
    icon: Gamepad2,
    colorClass: 'text-purple-500',
    useCases: [
      { title: 'Intelligent NPCs', description: 'AI creates NPCs with adaptive behaviors that respond realistically to player actions, enhancing immersion.', imageHint: 'fantasy game character' },
      { title: 'Procedural Content Generation (PCG)', description: 'AI algorithms generate vast and unique game worlds, levels, and assets, reducing development time.', imageHint: 'game world map' },
      { title: 'Player Behavior Analytics', description: 'Analyzing player data to understand preferences, balance gameplay, and personalize in-game experiences.', imageHint: 'gaming analytics dashboard' },
    ],
    technicalAspects: [
      'Reinforcement learning for NPC behavior',
      'Generative Adversarial Networks (GANs) for asset creation',
      'Real-time data processing for adaptive gameplay',
      'Cloud gaming infrastructure',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'futuristic gaming setup' },
  },
  {
    slug: 'media',
    title: 'Media',
    shortDescription: 'Digital transformation in content creation, distribution, and engagement.',
    longDescription: 'AI transforms media and entertainment through personalized content recommendations, automated content generation (text, video summaries), enhanced video/audio analysis, and targeted advertising. Our tools help media companies innovate and engage audiences more effectively.',
    icon: Clapperboard,
    colorClass: 'text-blue-500',
    useCases: [
      { title: 'Personalized Content Recommendation', description: 'AI algorithms analyze user preferences to suggest relevant movies, music, news, and articles.', imageHint: 'streaming service interface' },
      { title: 'Automated Content Summarization', description: 'NLP techniques generate concise summaries of articles, videos, and reports.', imageHint: 'news article abstract' },
      { title: 'AI-Driven Ad Targeting', description: 'Optimizing ad placements and content based on user behavior and demographics for higher engagement.', imageHint: 'digital advertising concept' },
    ],
    technicalAspects: [
      'Collaborative filtering and content-based filtering',
      'NLP for text analysis and generation',
      'Computer vision for video content analysis',
      'Real-time bidding (RTB) platforms',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'media production studio' },
  },
  {
    slug: 'retail',
    title: 'Retail',
    shortDescription: 'Data-driven insights improving commerce, supply chains, and experiences.',
    longDescription: 'AI is reshaping retail with personalized shopping experiences, optimized inventory management, intelligent pricing strategies, and enhanced customer service. We provide solutions that drive sales and improve operational efficiency.',
    icon: ShoppingCart,
    colorClass: 'text-pink-500',
    useCases: [
      { title: 'Personalized Product Recommendations', description: 'AI analyzes browsing history and purchase data to offer tailored product suggestions to shoppers.', imageHint: 'online shopping recommendations' },
      { title: 'Inventory Optimization', description: 'Predictive analytics for demand forecasting to ensure optimal stock levels and reduce waste.', imageHint: 'retail store shelves' },
      { title: 'AI-Powered Chatbots for Customer Support', description: '24/7 customer assistance for inquiries, order tracking, and product information.', imageHint: 'chatbot conversation retail' },
    ],
    technicalAspects: [
      'Recommendation engines',
      'Demand forecasting models',
      'Computer vision for in-store analytics (e.g., foot traffic)',
      'NLP for customer sentiment analysis',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'modern retail interior' },
  },
  {
    slug: 'healthcare',
    title: 'Healthcare',
    shortDescription: 'Advancing patient care, diagnostics, and medical research with AI.',
    longDescription: 'AI is making significant strides in healthcare, from improving diagnostic accuracy and accelerating drug discovery to personalizing treatment plans and streamlining hospital operations. Our AI solutions aim to enhance patient outcomes and make healthcare more accessible and efficient.',
    icon: Stethoscope,
    colorClass: 'text-teal-500',
    useCases: [
      { title: 'AI-Assisted Medical Diagnosis', description: 'Machine learning models analyze medical images (X-rays, MRIs) to detect diseases like cancer with high accuracy.', imageHint: 'medical imaging analysis' },
      { title: 'Drug Discovery and Development', description: 'AI accelerates the identification of potential drug candidates and predicts their efficacy, reducing research timelines.', imageHint: 'laboratory research science' },
      { title: 'Personalized Treatment Plans', description: 'AI analyzes patient data, genetics, and lifestyle factors to recommend tailored treatment protocols.', imageHint: 'doctor patient consultation' },
    ],
    technicalAspects: [
      'Computer vision for medical image analysis',
      'NLP for processing clinical notes and research papers',
      'Predictive modeling for disease progression',
      'HIPAA compliance and data privacy in AI',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'futuristic healthcare technology' },
  },
   {
    slug: 'professional-services',
    title: 'Professional Services',
    shortDescription: 'Enhancing efficiency and insights for consulting, legal, and advisory firms.',
    longDescription: 'AI augments professional services by automating routine tasks, extracting insights from vast amounts of data, improving decision-making, and personalizing client interactions. Our solutions help firms deliver higher value and stay competitive.',
    icon: Briefcase,
    colorClass: 'text-indigo-500',
    useCases: [
      { title: 'Automated Document Analysis', description: 'NLP and machine learning to review legal documents, contracts, and reports, extracting key information and identifying risks.', imageHint: 'legal documents contract' },
      { title: 'AI-Powered Due Diligence', description: 'Accelerating the due diligence process by analyzing financial statements, market trends, and company data.', imageHint: 'business meeting charts' },
      { title: 'Personalized Client Advisory', description: 'Using AI to understand client needs better and provide tailored advice and service recommendations.', imageHint: 'consultant client interaction' },
    ],
    technicalAspects: [
      'Natural Language Processing (NLP) for document understanding',
      'Machine learning for predictive analytics and risk assessment',
      'Data visualization for reporting and insights',
      'Knowledge management systems powered by AI',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'modern office collaboration' },
  },
  {
    slug: 'ai-strategy',
    title: 'AI Strategy & Consulting',
    shortDescription: 'Guiding businesses in adopting and scaling AI for transformative growth.',
    longDescription: 'Develop a robust AI strategy aligned with your business goals. We help identify high-impact AI opportunities, create roadmaps, manage change, and ensure ethical AI deployment for sustainable competitive advantage.',
    icon: BrainCircuit,
    colorClass: 'text-cyan-500',
    useCases: [
      { title: 'AI Maturity Assessment', description: 'Evaluating your current AI capabilities and identifying gaps to create a tailored adoption roadmap.', imageHint: 'strategy roadmap planning' },
      { title: 'Use Case Prioritization', description: 'Identifying and prioritizing AI initiatives that deliver the highest business value and ROI.', imageHint: 'business strategy meeting' },
      { title: 'Ethical AI Frameworks', description: 'Developing guidelines and governance for responsible and ethical AI deployment, ensuring fairness and transparency.', imageHint: 'ethics compliance gears' },
    ],
    technicalAspects: [
      'Business process analysis',
      'Change management methodologies',
      'ROI and TCO modeling for AI projects',
      'AI governance and ethics best practices',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'ai strategy brain' },
  },
];

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find((industry) => industry.slug === slug);
};

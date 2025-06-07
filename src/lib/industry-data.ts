
import type { LucideIcon } from 'lucide-react';
import { Landmark, Factory, Signal, Zap, Gamepad2, Clapperboard, ShoppingCart, Stethoscope, BrainCircuit, Briefcase, Atom, Globe } from 'lucide-react';

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
  colorClass: string; 
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
    title: 'AI in Finance & Decentralized Economies',
    shortDescription: 'AI-driven financial tools, advanced risk modeling, and automated market regulation.',
    longDescription: 'Mendus is leading the way to new AI-driven financial systems. Our advanced AI Sentinels manage new types of digital financial tools, use powerful algorithms to understand complex risks, and automatically ensure everything follows the latest rules. We are building the future of how value is exchanged and capital is managed, on Earth and beyond.',
    icon: Landmark,
    colorClass: 'text-red-500',
    useCases: [
      { title: 'AI-Managed Investment Funds', description: 'Self-improving AI agents manage diverse investment portfolios, making trades across multiple markets and timelines, aiming for top performance even in unpredictable conditions.', imageHint: 'finance data ai trading' },
      { title: 'AI for Universal Basic Income (DAOs)', description: 'AI-governed digital organizations (DAOs) manage resource allocation and distribution for global UBI programs, ensuring fair and transparent economic support.', imageHint: 'global economy community' },
      { title: 'Predictive Financial Risk Prevention', description: 'Sentinels identify and help prevent major financial crises across interconnected global markets by dynamically adjusting liquidity and risk exposure.', imageHint: 'financial graph risk down' },
    ],
    technicalAspects: [
      'Quantum-inspired computing for portfolio optimization',
      'Neuro-Symbolic AI for explainable financial insights',
      'Zero-Knowledge Proofs for secure, private transactions',
      'Homomorphic Encryption for secure financial data analysis',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'finance city skyline' },
  },
  {
    slug: 'manufacturing',
    title: 'AI in Manufacturing & Smart Factories',
    shortDescription: 'Self-assembling nano-factories, AI-designed custom materials, and waste-reducing resource systems.',
    longDescription: 'Mendus brings manufacturing into an age of intelligent production. Imagine globally connected nano-factories that can self-assemble and reconfigure, AI agents designing new materials with amazing properties from scratch, and industrial systems that eliminate waste and regenerate resources.',
    icon: Factory,
    colorClass: 'text-orange-500',
    useCases: [
      { title: 'AI-Powered Material Design', description: 'AI agents design and simulate new materials with specific physical, chemical, and quantum properties for uses in aerospace, medicine, and more.', imageHint: 'molecular structure innovation' },
      { title: 'Adaptive Smart Production Lines', description: 'Manufacturing AI swarms dynamically change production flows in real-time to adapt to supply chain issues, demand shifts, or custom product needs.', imageHint: 'robotic arms factory automation' },
      { title: 'Circular Economy Management', description: 'AI Sentinels manage the entire product lifecycle, optimizing for disassembly, remanufacturing, and recycling of components, creating truly sustainable industry.', imageHint: 'circular economy green' },
    ],
    technicalAspects: [
      'Generative Adversarial Networks (GANs) for new material creation',
      'Digital Twin synchronization with advanced sensor networks',
      'Swarm Robotics for flexible manufacturing',
      'Predictive Maintenance using multi-physics simulations',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'modern factory interior' },
  },
  {
    slug: 'telecom',
    title: 'AI in Cognitive Communication Networks',
    shortDescription: 'Self-evolving 7G+ networks, AI-powered universal translation, and brain-computer interface communication.',
    longDescription: 'Mendus is building the next dimension of communication: Cognitive Communication Networks. These are self-managing, AI-run networks that go beyond current physical limits, potentially using quantum entanglement for instant data transfer. We also focus on AI-driven universal language translation and direct brain-computer interface methods for seamless understanding across all forms of intelligence.',
    icon: Signal,
    colorClass: 'text-green-500',
    useCases: [
      { title: 'AI-Managed Global Quantum Communication', description: 'Establishing a secure, unjammable global communication network using quantum technology for instant, high-bandwidth data transfer.', imageHint: 'quantum network globe' },
      { title: 'Universal Language Translation Engine', description: 'AI agents capable of real-time, context-perfect translation between all human languages, animal communications, and even new AI languages.', imageHint: 'language translation brain' },
      { title: 'Brain-Computer Interface (BCI) Systems', description: 'Developing safe and ethical AI intermediaries for thought-based communication and information exchange, enhancing human cognitive abilities.', imageHint: 'neural interface human tech' },
    ],
    technicalAspects: [
      'Dynamic Spectrum Allocation with Reinforcement Learning',
      'AI for network traffic prediction and large-scale anomaly detection',
      'Natural Language Understanding that grasps intent, not just words',
      'Biometric authentication using neural signatures',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'communication network abstract' },
  },
  {
    slug: 'energy',
    title: 'AI in Planetary Energy Systems & Fusion Control',
    shortDescription: 'AI-managed global smart grids, decentralized renewable networks, and fusion energy control systems.',
    longDescription: 'Mendus imagines a future of Planetary Energy Symbiosis. Our AI Sentinels manage and optimize global energy grids, seamlessly integrating decentralized renewable sources, accurately predicting demand, and governing the complex systems needed for stable fusion power. We aim for sustainable, abundant energy for everyone.',
    icon: Zap,
    colorClass: 'text-yellow-500',
    useCases: [
      { title: 'Autonomous Fusion Reactor Management', description: 'AI agents manage the immense complexities of plasma stability, temperature, and energy extraction in commercial fusion reactors.', imageHint: 'fusion reactor futuristic' },
      { title: 'Decentralized Smart Energy Grids', description: 'AI-powered peer-to-peer energy trading platforms allowing homes and businesses to dynamically buy/sell renewable energy, optimizing grid stability and costs.', imageHint: 'smart grid cityscape' },
      { title: 'AI for Orbital Solar Power Transmission', description: 'Optimizing orbital solar arrays and managing safe, efficient wireless energy transmission to ground stations globally.', imageHint: 'orbital solar satellite' },
    ],
    technicalAspects: [
      'Predictive modeling for renewable energy fluctuations',
      'AI-driven fault detection and self-healing grid capabilities',
      'Optimization algorithms for large-scale energy storage',
      'Cyber-physical security for critical energy infrastructure',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'energy grid future tech' },
  },
  {
    slug: 'gaming',
    title: 'AI in Immersive Game Worlds & Emergent Stories',
    shortDescription: 'AI-generated realities, truly adaptive game characters, and player-driven interactive narratives.',
    longDescription: 'Mendus is redefining interactive entertainment by creating Hyper-Immersive Intelligent Worlds. These are not just games, but persistent, AI-generated realities with truly adaptive game characters that have their own motivations and social structures. Players co-create evolving stories through meaningful interactions, blurring lines between player, creator, and inhabitant.',
    icon: Gamepad2,
    colorClass: 'text-purple-500',
    useCases: [
      { title: 'Procedurally Generated Game Universes', description: 'AI creating entire universes with unique physics, life forms, and civilizations, offering infinite exploration and new gameplay.', imageHint: 'game world fantasy landscape' },
      { title: 'AI Game Characters with True Understanding', description: 'Non-player characters (NPCs) that genuinely understand player intent, emotions, and history, leading to complex relationships and social dynamics.', imageHint: 'ai character dialogue' },
      { title: 'Player-Shaped Evolving Storylines', description: 'AI systems that dynamically weave player actions into overarching narratives, allowing communities to collectively shape their digital worlds.', imageHint: 'interactive story choice' },
    ],
    technicalAspects: [
      'Reinforcement Learning for advanced NPC behavior',
      'Generative AI for dynamic world and asset creation',
      'Affective Computing for emotional AI-player interaction',
      'Decentralized game state for true player ownership',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'virtual reality gaming' },
  },
  {
    slug: 'media',
    title: 'AI in Personalized Media & Content Creation',
    shortDescription: 'Individually curated information streams, AI-generated art and journalism, and interactive story synthesis.',
    longDescription: 'Mendus pioneers the future of media with Personalized Reality Streams and AI Content Synthesis. Imagine information environments perfectly tailored to your interests, AI co-authors generating custom literature or investigative reports, and interactive stories that adapt in real-time to your engagement.',
    icon: Clapperboard,
    colorClass: 'text-blue-500',
    useCases: [
      { title: 'AI-Generated Personalized News & Documentaries', description: 'Systems that synthesize information from many sources to create dynamic, bias-aware news and documentaries tailored to individual user understanding.', imageHint: 'news interface futuristic tablet' },
      { title: 'Cognitive Co-Creation Tools for Artists', description: 'AI partners for musicians, writers, and visual artists, offering inspiration, style augmentation, and complex pattern generation.', imageHint: 'ai art creation tools' },
      { title: 'Interactive AI Storytelling', description: 'Narrative platforms where AI dynamically crafts story branches and character developments based on real-time audience interaction and emotional feedback.', imageHint: 'dynamic story flowchart' },
    ],
    technicalAspects: [
      'Advanced NLP for content generation and summarization',
      'AI for deepfake detection and content authenticity',
      'Personalized recommendation engines using cognitive modeling',
      'Ethical frameworks for AI-generated content and IP',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'media stream abstract' },
  },
  {
    slug: 'retail',
    title: 'AI in Predictive Commerce & Personalized Shopping',
    shortDescription: 'AI anticipating individual needs, autonomous product design, and seamless fulfillment.',
    longDescription: 'Mendus transforms retail into Predictive Commerce. Our AI Sentinels anticipate consumer needs before they are consciously aware, facilitate AI-driven custom product design based on individual preferences, and manage frictionless, autonomous fulfillment from decentralized factories to your door.',
    icon: ShoppingCart,
    colorClass: 'text-pink-500',
    useCases: [
      { title: 'Pre-Cognitive Demand Fulfillment', description: 'AI systems predict your needs for products, initiating production and delivery proactively, with an opt-out confirmation.', imageHint: 'futuristic shopping delivery' },
      { title: 'AI-Designed, On-Demand Custom Products', description: 'Consumers co-design products (e.g., clothing, furniture) with AI, which are then made at local micro-factories for immediate delivery.', imageHint: '3d printing custom design' },
      { title: 'Autonomous Personalized Shopping Spaces', description: 'Physical and virtual retail spaces that dynamically adapt layout, offerings, and ambiance based on the individual shopper\'s profile and real-time state.', imageHint: 'smart retail store interior' },
    ],
    technicalAspects: [
      'Deep learning for complex demand forecasting',
      'Computer Vision for in-store analytics and frictionless checkout',
      'AI-powered recommendation engines with clear explanations',
      'Robotics and drone delivery optimization',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'retail technology future' },
  },
  {
    slug: 'healthcare',
    title: 'AI in Cognitive Health & Advanced Genomics',
    shortDescription: 'AI-driven predictive diagnostics, personalized longevity treatments, and automated bio-molecular engineering.',
    longDescription: 'Mendus leads the revolution in Cognitive Health and Advanced Genomics. Our AI platforms enable disease prediction before symptoms appear, design personalized longevity treatments based on individual genetic profiles, and automate the discovery and creation of new bio-molecules for targeted therapies.',
    icon: Stethoscope,
    colorClass: 'text-teal-500',
    useCases: [
      { title: 'AI-Powered Nanobots for Internal Diagnostics & Repair', description: 'Swarms of intelligent nanobots that patrol the body, detecting cellular issues early and performing targeted repairs or drug delivery.', imageHint: 'nanobots medical futuristic' },
      { title: 'Generative AI for Custom Gene Therapies', description: 'AI designs personalized gene editing tools (like CRISPR variants) to correct genetic disorders or enhance biological resilience with high precision.', imageHint: 'gene editing dna abstract' },
      { title: 'Predictive Pandemic Response', description: 'Global AI networks continuously monitor health data, simulating outbreak paths and recommending optimal, adaptive containment strategies in real-time.', imageHint: 'global health data map' },
    ],
    technicalAspects: [
      'Machine learning for genomic data analysis and biomarker discovery',
      'AI in medical imaging for diagnostics beyond human capability',
      'NLP for mining global medical research',
      'Ethical AI for patient data privacy and treatment advice',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'medical research lab tech' },
  },
   {
    slug: 'professional-services',
    title: 'AI Augmentation for Cognitive Professions',
    shortDescription: 'AI Sentinels as hyper-intelligent assistants for legal, consulting, and strategic advisory roles.',
    longDescription: 'Mendus empowers cognitive professions with AI Augmentation. Our AI Sentinels act as super-intelligent research analysts, strategy simulators, and legal experts. They can process vast amounts of information, model complex scenarios, and draft nuanced arguments or strategies with superhuman speed and depth, elevating human professionals to focus on oversight and creative direction.',
    icon: Briefcase,
    colorClass: 'text-indigo-500',
    useCases: [
      { title: 'AI Legal Sentinels for Case Analysis & Argument Generation', description: 'Agents analyze millennia of legal history to construct new legal arguments, find obscure precedents, and predict judicial outcomes accurately.', imageHint: 'law ai justice scales' },
      { title: 'Strategic Foresight Simulators for Business Leaders', description: 'AI models complex geopolitical, economic, and tech landscapes, running thousands of future scenarios to inform high-stakes corporate strategy.', imageHint: 'business strategy chart globe' },
      { title: 'Autonomous Due Diligence for M&A', description: 'Sentinels perform comprehensive company reviews in hours, not weeks, analyzing finances, IP, market position, and potential synergies.', imageHint: 'financial analysis data abstract' },
    ],
    technicalAspects: [
      'Advanced NLP for legal document understanding',
      'Knowledge Graph construction for complex domain expertise',
      'Agent-Based Modeling for socio-economic simulations',
      'Explainable AI (XAI) for transparent decision support',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'professional meeting tech' },
  },
  {
    slug: 'ai-strategy',
    title: 'AI Strategy & Cognitive Transformation Consulting',
    shortDescription: 'Guiding enterprises through AI adoption, ethical integration, and achieving human-AI synergy.',
    longDescription: 'Mendus provides custom AI Strategy & Cognitive Transformation services. We partner with organizations to plan their journey into the AI age, from assessing current AI maturity and finding high-impact uses, to designing ethical frameworks and fostering a culture of human-AI collaboration. Our expertise ensures your AI initiatives are not just technologically advanced but strategically transformative and socially responsible.',
    icon: BrainCircuit,
    colorClass: 'text-cyan-500',
    useCases: [
      { title: 'AI Maturity & Readiness Assessment', description: 'A deep audit of an organization\'s data, talent, ethics, and culture for advanced AI integration, providing a readiness score.', imageHint: 'ai readiness chart diagram' },
      { title: 'Ethical AI Governance & Bias Audits', description: 'Developing and implementing strong governance to ensure fairness, transparency, and ethical alignment of all AI systems in an enterprise.', imageHint: 'ai ethics gears balance' },
      { title: 'Human-Agent Teaming Blueprints', description: 'Designing workflows and interfaces that optimize collaboration between human employees and AI Sentinels, maximizing collective intelligence.', imageHint: 'human ai collaboration gears' },
    ],
    technicalAspects: [
      'Change Management for AI adoption and workforce training',
      'ROI modeling for complex AI initiatives',
      'Development of custom AI ethics boards and review processes',
      'Cross-functional AI literacy programs for company-wide upskilling',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'ai strategy brain gears' },
  },
  {
    slug: 'space-exploration',
    title: 'AI in Autonomous Deep Space Exploration & Colonization',
    shortDescription: 'AI-piloted interstellar probes, terraforming AI, and self-sufficient exoplanet outpost management.',
    longDescription: 'Mendus extends its AI intelligence to space. We develop AI systems for autonomous deep space navigation and research, AI-driven terraforming of potential exoplanets, and managing self-sufficient off-world colonies. Our vision is to help humanity become a truly interstellar species, guided by advanced AI companions.',
    icon: Atom, 
    colorClass: 'text-fuchsia-500',
    useCases: [
      { title: 'AI-Piloted Self-Replicating Space Probes', description: 'Intelligent probes capable of autonomous navigation, resource harvesting, self-replication, and transmitting discoveries across light-years.', imageHint: 'space probe galaxy stars' },
      { title: 'AI-Orchestrated Exoplanet Terraforming', description: 'Swarms of specialized AI agents executing long-term terraforming plans, adapting atmospheres, establishing ecosystems, and preparing worlds for humans.', imageHint: 'terraforming planet red green' },
      { title: 'Autonomous Exocolony Management', description: 'AI systems managing all aspects of an exoplanetary outpost, from life support and agriculture to resource allocation and governance, ensuring long-term sustainability.', imageHint: 'mars colony dome future' },
    ],
    technicalAspects: [
      'AI for long-duration autonomous navigation in unknown environments',
      'Robotics for extraterrestrial construction and resource extraction',
      'Closed-loop life support systems managed by AI',
      'Advanced materials science for space habitats',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'nebula galaxy stars space' },
  },
  {
    slug: 'environmental-stewardship',
    title: 'AI for Global Ecosystem Remediation & Biodiversity',
    shortDescription: 'AI-driven climate intervention, autonomous pollution cleanup, and AI-assisted species de-extinction.',
    longDescription: 'Mendus is committed to using AI for significant environmental stewardship. Our solutions include AI systems for precise climate modeling and intervention, autonomous robot swarms for large-scale pollution cleanup (oceans, air), and AI-assisted genetic reconstruction for de-extinction and reintroduction of key species to restore biodiversity.',
    icon: Globe,
    colorClass: 'text-lime-500',
    useCases: [
      { title: 'AI-Optimized Atmospheric Carbon Capture', description: 'Globally coordinated AI networks managing vast arrays of direct air capture tech and biological carbon sinks to actively reduce atmospheric CO2.', imageHint: 'carbon capture forest tech' },
      { title: 'Autonomous Ocean Cleanup Swarms', description: 'Intelligent robotic systems that find, collect, and recycle plastic and chemical pollutants from marine environments, adapting to currents and marine life.', imageHint: 'ocean cleanup robot water' },
      { title: 'AI-Guided De-extinction & Ecosystem Restoration', description: 'Using AI to analyze ancient DNA, find suitable habitats, and guide the reintroduction of extinct species to restore damaged ecosystems.', imageHint: 'dinosaur dna abstract tech' },
    ],
    technicalAspects: [
      'Complex systems modeling for climate and ecological simulations',
      'AI in bioinformatics and synthetic biology',
      'Autonomous robotics for environmental monitoring and action',
      'Sensor networks for real-time global environmental data',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'earth globe green nature' },
  },
];

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find((industry) => industry.slug === slug);
};

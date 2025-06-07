
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
    title: 'Algorithmic Finance & Decentralized Economies',
    shortDescription: 'AI-driven financial instruments, quantum risk modeling, and autonomous market regulation.',
    longDescription: 'Mendus empowers the transition to Algorithmic Financial Ecosystems (AFEs). Our AI Sentinels orchestrate decentralized financial instruments, perform hyper-dimensional risk analysis using quantum-inspired algorithms, and facilitate autonomous compliance within emergent regulatory frameworks. We are architecting the future of value exchange and capital allocation on a planetary and interplanetary scale.',
    icon: Landmark,
    colorClass: 'text-red-500',
    useCases: [
      { title: 'Autonomous Algorithmic Hedge Funds', description: 'Self-evolving AI agents managing diverse portfolios, executing trades across multiple realities and temporal dimensions, optimizing for alpha under chaotic market conditions.', imageHint: 'quantum finance data' },
      { title: 'Decentralized Autonomous Organizations (DAOs) for Universal Basic Income', description: 'AI-governed DAOs managing resource allocation and distribution for global UBI programs, ensuring fair and transparent economic support systems.', imageHint: 'global economy network' },
      { title: 'Predictive Systemic Risk Neutralization', description: 'Sentinels identify and preemptively mitigate cascading financial failures across interconnected global markets by dynamically adjusting liquidity and counterparty risk.', imageHint: 'financial crisis prevention' },
    ],
    technicalAspects: [
      'Quantum Annealing for portfolio optimization',
      'Neuro-Symbolic AI for explainable financial advice',
      'Zero-Knowledge Proofs for secure & private transactions',
      'Homomorphic Encryption for computations on encrypted financial data',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'futuristic finance city' },
  },
  {
    slug: 'manufacturing',
    title: 'Sentient Manufacturing & Autonomous Ecologies',
    shortDescription: 'Self-assembling nano-factories, AI-designed bespoke materials, and closed-loop resource metabolisms.',
    longDescription: 'Mendus propels manufacturing into an era of sentient production. Imagine globally distributed nano-factories capable of self-assembly and reconfiguration, AI agents designing novel materials with unprecedented properties from atomic principles, and industrial ecosystems operating as closed-loop metabolisms that eliminate waste and regenerate resources.',
    icon: Factory,
    colorClass: 'text-orange-500',
    useCases: [
      { title: 'AI-Driven Generative Material Science', description: 'Agents design and simulate novel metamaterials with bespoke physical, chemical, and quantum properties for applications ranging from aerospace to medicine.', imageHint: 'molecular structure abstract' },
      { title: 'Autonomous Adaptive Production Lines', description: 'Manufacturing swarms dynamically reconfigure production flows in real-time to adapt to supply chain disruptions, demand shifts, or customized product specifications.', imageHint: 'robotic arms futuristic factory' },
      { title: 'Circular Economy Orchestration', description: 'AI Sentinels manage the entire lifecycle of products, optimizing for disassembly, remanufacturing, and biological reintegration of components, achieving true industrial symbiosis.', imageHint: 'circular economy diagram' },
    ],
    technicalAspects: [
      'Generative Adversarial Networks (GANs) for material design',
      'Digital Twin synchronization with quantum sensor networks',
      'Swarm Robotics for adaptive manufacturing cells',
      'Predictive Maintenance using multi-physics simulations',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'futuristic factory interior' },
  },
  {
    slug: 'telecom',
    title: 'Cognitive Hyperspace Networks & Universal Semantics',
    shortDescription: 'Self-evolving 7G+ networks, AI-mediated universal translation, and neural interface communication.',
    longDescription: 'Mendus is architecting the next dimension of communication: Cognitive Hyperspace Networks. These are self-orchestrating, AI-managed networks that transcend current physical limitations, potentially leveraging quantum entanglement for instantaneous data transfer. Our focus extends to AI-mediated universal language translation and direct neural interface protocols, fostering seamless understanding across all forms of intelligence.',
    icon: Signal,
    colorClass: 'text-green-500',
    useCases: [
      { title: 'AI-Orchestrated Global Quantum Communication Grid', description: 'Establishing a secure, unjammable global communication network leveraging quantum key distribution and entanglement for instantaneous, high-bandwidth data transfer.', imageHint: 'quantum network abstract' },
      { title: 'Universal Semantic Translation Engine', description: 'AI agents capable of real-time, contextually perfect translation between all human languages, animal communications, and even emerging AI dialects.', imageHint: 'language translation brainwave' },
      { title: 'Direct Neural Interface (DNI) Ecosystems', description: 'Developing safe and ethical frameworks and AI intermediaries for thought-based communication and information exchange, augmenting human cognitive capabilities.', imageHint: 'neural interface futuristic' },
    ],
    technicalAspects: [
      'Dynamic Spectrum Allocation using Reinforcement Learning',
      'AI for network traffic prediction and anomaly detection at exascale',
      'Natural Language Understanding beyond surface semantics to intent',
      'Biometric authentication integrated with neural signatures',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'global communication network abstract' },
  },
  {
    slug: 'energy',
    title: 'Planetary Energy Symbiosis & Fusion Governance',
    shortDescription: 'AI-managed global smart grids, decentralized renewable networks, and fusion energy control systems.',
    longDescription: 'Mendus envisions a future of Planetary Energy Symbiosis. Our AI Sentinels manage and optimize global energy distribution networks, seamlessly integrating decentralized renewable sources, predicting demand with hyper-accuracy, and governing the complex control systems required for stable fusion power. We aim for a sustainable, abundant energy future for all.',
    icon: Zap,
    colorClass: 'text-yellow-500',
    useCases: [
      { title: 'Autonomous Fusion Reactor Control Systems', description: 'AI agents managing the immense complexities of plasma stability, temperature regulation, and energy extraction in commercial fusion reactors.', imageHint: 'fusion reactor core' },
      { title: 'Decentralized Transactive Energy Grids', description: 'AI-powered peer-to-peer energy trading platforms enabling homes and businesses to dynamically buy and sell renewable energy, optimizing grid stability and individual costs.', imageHint: 'smart grid city night' },
      { title: 'AI for Orbital Solar Power Collection & Wireless Transmission', description: 'Optimizing the alignment of orbital solar arrays and managing the safe, efficient wireless transmission of energy to ground stations across the globe.', imageHint: 'orbital solar power satellite' },
    ],
    technicalAspects: [
      'Predictive modeling for renewable energy intermittency',
      'AI-driven fault detection and self-healing grid capabilities',
      'Optimization algorithms for planetary-scale energy storage solutions',
      'Cyber-physical security for critical energy infrastructure',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'futuristic city energy grid' },
  },
  {
    slug: 'gaming',
    title: 'Hyper-Immersive Sentient Worlds & Emergent Narratives',
    shortDescription: 'AI-generated realities, truly adaptive NPC ecosystems, and player-driven narrative co-creation.',
    longDescription: 'Mendus is redefining interactive entertainment by creating Hyper-Immersive Sentient Worlds. These are not just games, but persistent, AI-generated realities populated by truly adaptive NPC ecosystems with their own motivations and social structures. Players co-create emergent narratives through meaningful interactions, blurring the lines between player, creator, and inhabitant.',
    icon: Gamepad2,
    colorClass: 'text-purple-500',
    useCases: [
      { title: 'Procedurally Generated Multiverses', description: 'AI creating entire universes with unique physics, biospheres, and civilizations, offering infinite exploration and emergent gameplay possibilities.', imageHint: 'galaxy creation game' },
      { title: 'AI NPCs with Theory of Mind', description: 'Non-player characters possessing genuine understanding of player intent, emotional states, and long-term memory, leading to deeply complex relationships and social dynamics.', imageHint: 'ai character interaction' },
      { title: 'Player-Authored Emergent Story Arcs', description: 'AI systems that dynamically weave player actions and choices into overarching narratives, allowing communities to collectively shape the destiny of their digital worlds.', imageHint: 'interactive story map' },
    ],
    technicalAspects: [
      'Reinforcement Learning for advanced NPC behavior and strategy',
      'Generative AI for dynamic world-building and asset creation',
      'Affective Computing for emotional AI-player interaction',
      'Decentralized game state management on blockchain for true ownership',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'virtual reality game world' },
  },
  {
    slug: 'media',
    title: 'Personalized Reality Streams & AI Content Synthesis',
    shortDescription: 'Individually curated information realities, AI-generated art and journalism, and interactive narrative synthesis.',
    longDescription: 'Mendus is pioneering the future of media through Personalized Reality Streams and AI Content Synthesis. Imagine information environments perfectly tailored to your cognitive profile and interests, AI co-authors generating bespoke literature or investigative journalism, and interactive narratives that adapt in real-time to your emotional and intellectual engagement.',
    icon: Clapperboard,
    colorClass: 'text-blue-500',
    useCases: [
      { title: 'AI-Generated Personalized Newsfeeds & Documentaries', description: 'Systems that synthesize information from myriad sources to create dynamically generated, bias-aware news reports and documentaries tailored to individual user understanding and inquiry paths.', imageHint: 'futuristic news interface' },
      { title: 'Cognitive Co-Creation Tools for Artists', description: 'AI partners for musicians, writers, and visual artists, offering inspirational prompts, stylistic augmentation, and complex pattern generation.', imageHint: 'ai art generation' },
      { title: 'Interactive AI Storytelling Engines', description: 'Narrative platforms where AI dynamically crafts story branches, character developments, and plot twists based on real-time audience interaction and emotional feedback.', imageHint: 'dynamic story interface' },
    ],
    technicalAspects: [
      'Advanced NLP for content generation and summarization',
      'AI for deepfake detection and content authenticity verification',
      'Personalized recommendation engines based on cognitive modeling',
      'Ethical frameworks for AI-generated content and intellectual property',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'abstract media data stream' },
  },
  {
    slug: 'retail',
    title: 'Predictive Commerce & Hyper-Personalized Curation',
    shortDescription: 'AI anticipating individual needs, autonomous product design, and frictionless fulfillment ecosystems.',
    longDescription: 'Mendus is transforming retail into Predictive Commerce. Our AI Sentinels anticipate consumer needs before they are consciously recognized, facilitate AI-driven bespoke product design based on individual biometrics and preferences, and orchestrate frictionless, autonomous fulfillment ecosystems from decentralized nano-factories to your doorstep.',
    icon: ShoppingCart,
    colorClass: 'text-pink-500',
    useCases: [
      { title: 'Pre-Cognitive Demand Fulfillment', description: 'AI systems predict your needs for consumables, apparel, or tools, initiating production and delivery proactively, with opt-out confirmation.', imageHint: 'futuristic shopping ai' },
      { title: 'AI-Designed, On-Demand Bespoke Manufacturing', description: 'Consumers co-design products (e.g., clothing, furniture) with AI, which are then 3D printed or assembled at local micro-factories for immediate delivery.', imageHint: '3d printing custom product' },
      { title: 'Autonomous Personalized Shopping Environments', description: 'Physical and virtual retail spaces that dynamically adapt their layout, product offerings, and sensory experiences based on the individual shopper\'s profile and real-time cognitive state.', imageHint: 'futuristic retail store interior' },
    ],
    technicalAspects: [
      'Deep learning for complex demand forecasting and trend prediction',
      'Computer Vision for in-store analytics and frictionless checkout',
      'AI-powered recommendation engines with explainable outputs',
      'Robotics and drone delivery logistics optimization',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'futuristic retail experience' },
  },
  {
    slug: 'healthcare',
    title: 'Cognitive Health & Genomic Alchemy',
    shortDescription: 'AI-driven predictive diagnostics, personalized longevity therapies, and automated bio-molecular engineering.',
    longDescription: 'Mendus is spearheading the revolution in Cognitive Health and Genomic Alchemy. Our AI platforms enable pre-symptomatic disease prediction with unparalleled accuracy, design personalized longevity therapies based on individual genomic and proteomic profiles, and automate the discovery and synthesis of novel bio-molecules for targeted therapeutic interventions.',
    icon: Stethoscope,
    colorClass: 'text-teal-500',
    useCases: [
      { title: 'AI-Powered Nanobots for In-Vivo Diagnostics & Repair', description: 'Swarms of intelligent nanobots patrolling the human body, detecting cellular anomalies at their earliest stages and performing targeted repairs or drug delivery.', imageHint: 'nanobots medical technology' },
      { title: 'Generative AI for Bespoke Gene Therapies', description: 'AI designs personalized gene editing constructs (e.g., CRISPR-Cas variants) to correct genetic disorders or enhance biological resilience with unprecedented precision.', imageHint: 'dna gene editing abstract' },
      { title: 'Predictive Pandemic Response Systems', description: 'Global AI networks continuously monitor virological and epidemiological data, simulating outbreak trajectories and recommending optimal, adaptive containment strategies in real-time.', imageHint: 'global health network' },
    ],
    technicalAspects: [
      'Machine learning for genomic data analysis and biomarker discovery',
      'AI in medical imaging for diagnostics surpassing human capability',
      'Natural Language Processing for mining global medical research',
      'Ethical AI for patient data privacy and treatment recommendations',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'futuristic medical research lab' },
  },
   {
    slug: 'professional-services',
    title: 'Agentic Augmentation for Cognitive Professions',
    shortDescription: 'AI Sentinels as hyper-intelligent associates for legal, consulting, and strategic advisory.',
    longDescription: 'Mendus empowers cognitive professions with Agentic Augmentation. Our AI Sentinels act as hyper-intelligent research analysts, strategic simulators, and legal scholars, capable of processing and synthesizing vast corpuses of information, modeling complex scenarios, and drafting nuanced arguments or strategies with superhuman speed and depth. This elevates human professionals to roles of ultimate oversight and creative direction.',
    icon: Briefcase,
    colorClass: 'text-indigo-500',
    useCases: [
      { title: 'AI Legal Sentinels for Case Law Synthesis & Argument Generation', description: 'Agents analyze millennia of legal precedent to construct novel legal arguments, identify obscure case law, and predict judicial outcomes with high accuracy.', imageHint: 'law books ai justice' },
      { title: 'Strategic Foresight Simulators for C-Suite Advisory', description: 'AI models complex geopolitical, economic, and technological landscapes, running thousands of future scenarios to inform high-stakes corporate strategy.', imageHint: 'business strategy futuristic chart' },
      { title: 'Autonomous Due Diligence & M&A Analysis', description: 'Sentinels perform comprehensive due diligence on target companies in hours, not weeks, analyzing financial health, IP portfolios, market positioning, and potential synergies.', imageHint: 'financial analysis data ai' },
    ],
    technicalAspects: [
      'Advanced NLP for legal document understanding and generation',
      'Knowledge Graph construction for complex domain expertise',
      'Agent-Based Modeling for socio-economic simulations',
      'Explainable AI (XAI) for transparent decision support',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'futuristic office meeting' },
  },
  {
    slug: 'ai-strategy',
    title: 'Architecting Cognitive Transformation Roadmaps',
    shortDescription: 'Guiding enterprises in navigating the complexities of AI adoption, ethical integration, and achieving agentic synergy.',
    longDescription: 'Mendus provides bespoke AI Strategy & Cognitive Transformation services. We partner with organizations to chart their journey into the agentic age, from assessing current AI maturity and identifying high-impact use cases to designing ethical governance frameworks and fostering a culture of human-AI collaboration. Our expertise ensures your AI initiatives are not just technologically sound but strategically transformative and societally responsible.',
    icon: BrainCircuit,
    colorClass: 'text-cyan-500',
    useCases: [
      { title: 'AI Maturity & Sentience Readiness Assessment', description: 'A deep audit of an organization\'s data infrastructure, talent pool, ethical frameworks, and cultural preparedness for advanced AI integration, providing a multi-dimensional readiness score.', imageHint: 'ai readiness assessment chart' },
      { title: 'Ethical AI Governance & Algorithmic Bias Audits', description: 'Developing and implementing robust governance structures to ensure fairness, transparency, accountability, and ethical alignment of all AI systems within an enterprise.', imageHint: 'ai ethics gears balance' },
      { title: 'Human-Agent Teaming & Workforce Augmentation Blueprints', description: 'Designing workflows and interfaces that optimize collaboration between human employees and AI Sentinels, maximizing collective intelligence and operational efficiency.', imageHint: 'human ai collaboration interface' },
    ],
    technicalAspects: [
      'Change Management for AI adoption and workforce retraining',
      'ROI modeling for complex AI initiatives with emergent benefits',
      'Development of custom AI ethics boards and review processes',
      'Cross-functional AI literacy programs for enterprise-wide upskilling',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'ai strategy brain gears' },
  },
  {
    slug: 'space-exploration',
    title: 'Autonomous Deep Space Exploration & Colonization',
    shortDescription: 'AI-piloted interstellar probes, terraforming Sentinels, and self-sufficient exoplanetary outpost management.',
    longDescription: 'Mendus extends its agentic intelligence to the final frontier. We develop AI systems for autonomous deep space navigation and research, AI-driven terraforming of candidate exoplanets, and the establishment and management of self-sufficient off-world colonies. Our vision is to make humanity a truly interstellar species, guided and supported by advanced AI companions.',
    icon: Atom, 
    colorClass: 'text-fuchsia-500',
    useCases: [
      { title: 'AI-Piloted Self-Replicating Interstellar Probes', description: 'Sentient probes capable of autonomous navigation through interstellar space, resource harvesting, self-replication, and transmitting novel scientific discoveries across light-years.', imageHint: 'interstellar probe deep space' },
      { title: 'AI-Orchestrated Exoplanet Terraforming', description: 'Swarms of specialized AI agents executing multi-century terraforming plans, adapting atmospheric composition, establishing ecosystems, and preparing worlds for human habitation.', imageHint: 'terraforming mars planet' },
      { title: 'Autonomous Exocolony Resource Management & Governance', description: 'AI systems managing all aspects of an exoplanetary outpost, from life support and agriculture to resource allocation and community governance, ensuring long-term sustainability.', imageHint: 'mars colony habitat' },
    ],
    technicalAspects: [
      'AI for long-duration autonomous navigation and decision-making in unknown environments',
      'Robotics for extraterrestrial construction and resource extraction',
      'Closed-loop life support systems managed by AI',
      'Advanced materials science for space habitats and travel',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'galaxy nebula space' },
  },
  {
    slug: 'environmental-stewardship',
    title: 'Global Ecosystem Remediation & Biodiversity Synthesis',
    shortDescription: 'AI-driven climate intervention, autonomous pollution neutralization, and AI-assisted species de-extinction.',
    longDescription: 'Mendus is committed to leveraging AI for profound environmental stewardship. Our solutions include AI systems for precise climate modeling and intervention, autonomous robotic swarms for large-scale pollution cleanup (oceans, atmosphere), and AI-assisted genomic reconstruction for the de-extinction and reintroduction of keystone species to restore biodiversity.',
    icon: Globe,
    colorClass: 'text-lime-500',
    useCases: [
      { title: 'AI-Optimized Atmospheric Carbon Sequestration', description: 'Globally coordinated AI networks managing vast arrays of direct air capture technologies and biological carbon sinks to actively reduce atmospheric CO2 levels.', imageHint: 'carbon capture technology forest' },
      { title: 'Autonomous Ocean Cleanup Swarms', description: 'Intelligent robotic systems that identify, collect, and recycle plastic and chemical pollutants from marine environments, adapting to currents and marine life.', imageHint: 'ocean cleanup robot' },
      { title: 'AI-Guided De-extinction and Ecosystem Rebalancing', description: 'Using AI to analyze ancient DNA, identify suitable habitats, and guide the reintroduction of extinct species to restore damaged ecosystems and enhance biodiversity.', imageHint: 'dinosaur dna research' },
    ],
    technicalAspects: [
      'Complex systems modeling for climate and ecological simulations',
      'AI in bioinformatics and synthetic biology',
      'Autonomous robotics for environmental monitoring and intervention',
      'Sensor networks for real-time global environmental data acquisition',
    ],
    heroImage: { path: 'https://placehold.co/1200x500.png', hint: 'earth green vibrant' },
  },
];

export const getIndustryBySlug = (slug: string): Industry | undefined => {
  return industries.find((industry) => industry.slug === slug);
};

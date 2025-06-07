
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { Shield, Lock, Database, Eye } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mendus Data Sovereignty & Cognitive Privacy Charter',
  description: 'Understand the Mendus commitment to data sovereignty, cognitive privacy, and the ethical stewardship of information within our advanced AI ecosystems.',
};

export default function SupportPrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Shield className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Data Sovereignty & Cognitive Privacy Charter
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              Effective Date: Stardate 77402.1 (Observable Universe Instance)
            </p>
          </div>

          <article className="prose prose-lg max-w-none font-body text-foreground prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80">
            <p>Mendus ("We," "Us," "The Collective") is architecting the future of intelligence. Central to this endeavor is an unwavering commitment to the sovereignty of data and the sanctity of cognitive privacy, both human and synthetic. This Charter outlines our foundational principles for data stewardship within the Mendus Eon Platform and associated agentic ecosystems.</p>

            <h2 id="definitions"><Database className="inline h-6 w-6 mr-2 text-primary"/>Core Definitions</h2>
            <ul>
              <li><strong>Cognitive Data:</strong> Information processed, generated, or inferred by AI agents, including learning models, decision pathways, and emergent knowledge structures.</li>
              <li><strong>Personal Data:</strong> Information relating to an identifiable human individual, as defined by applicable intergalactic data protection regulations (e.g., GDPR-Terra, Martian Data Privacy Act).</li>
              <li><strong>Data Sovereignty:</strong> The principle that data is subject to the laws and governance structures within the jurisdiction where it is generated and/or processed. For decentralized systems, this refers to cryptographic ownership and control.</li>
            </ul>

            <h2 id="principles"><Eye className="inline h-6 w-6 mr-2 text-primary"/>Guiding Principles</h2>
            <ol>
              <li>
                <strong>Transparency & Explainability:</strong> We strive to make data processing activities as transparent as possible, within the bounds of intellectual property and operational security. Our Neuro-Symbolic AI frameworks aim for enhanced explainability of agent decisions.
              </li>
              <li>
                <strong>Purpose Limitation & Data Minimization:</strong> Data is collected and processed only for specified, explicit, and legitimate purposes. We endeavor to minimize data collection to what is strictly necessary for the intended function of our AI systems.
              </li>
              <li>
                <strong>Security by Axiomatic Design:</strong> The Eon Platform incorporates advanced cryptographic techniques, decentralized security protocols, and continuous threat modeling to protect data integrity, confidentiality, and availability. This includes defenses against quantum decryption and adversarial AI attacks.
              </li>
              <li>
                <strong>Individual Control & Consent:</strong> Where Personal Data is concerned, individuals retain control over their information. Consent for data processing will be informed, unambiguous, and revocable, facilitated through intuitive interfaces.
              </li>
              <li>
                <strong>Privacy-Preserving Technologies:</strong> We actively research and implement techniques like federated learning, homomorphic encryption, and differential privacy to enable AI model training and operation without direct access to raw sensitive data.
              </li>
              <li>
                <strong>Ethical Data Use in Agent Training:</strong> AI agents are trained on ethically sourced, diverse, and representative datasets to mitigate bias and ensure fairness. Continuous auditing of training data and model outputs is performed.
              </li>
              <li>
                <strong>Data Retention & Deletion:</strong> Data is retained only as long as necessary for its intended purpose or as required by applicable law. Secure deletion protocols are in place to irretrievably remove data upon request or at the end of its lifecycle.
              </li>
            </ol>

            <h2 id="data-processing"><Lock className="inline h-6 w-6 mr-2 text-primary"/>Processing of Cognitive and Personal Data</h2>
            <p>Mendus processes data to operate, improve, and personalize its AI services. This includes training AI models, enabling agentic functionalities, providing analytics, and ensuring the security and ethical alignment of our systems. Specific data processing activities will be detailed in service-specific agreements or notices.</p>
            <p>We do not sell Personal Data to third-party entities for marketing purposes. Sharing of data with collaborators or subprocessors is governed by stringent data protection agreements ensuring adherence to this Charter.</p>
            
            <h2 id="rights">Your Rights & Access Mechanisms</h2>
            <p>Subject to applicable laws and technological feasibility, individuals and entities have rights concerning their data, including access, rectification, erasure, restriction of processing, and data portability. Mendus will provide mechanisms to exercise these rights. For Cognitive Data generated by autonomous agents, access and control are governed by the Eon Platform's decentralized identity and permissions framework.</p>

            <h2 id="charter-evolution">Charter Evolution</h2>
            <p>The landscape of AI and data ethics is rapidly evolving. This Charter will be reviewed and updated periodically to reflect technological advancements, new regulatory frameworks, and our deepening understanding of cognitive privacy. Major revisions will be communicated through appropriate channels.</p>

            <h2 id="contact">Contact the Data Sovereignty Custodians</h2>
            <p>For inquiries regarding this Charter or Mendus's data practices, please interface with our Data Sovereignty Custodians via <a href="mailto:privacy.nexus@mendus.ai" className="text-primary hover:underline">privacy.nexus@mendus.ai</a>.</p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

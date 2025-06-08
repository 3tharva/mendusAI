
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import type { Metadata } from 'next';
import { FileText, Gavel, AlertTriangle, Users } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Mendus Operational Directives & Service Axioms (Terms of Service)',
  description: 'Review the operational directives, service axioms, and terms governing the use of Mendus AI platforms, digital workers, and associated cognitive services.',
};

export default function SupportTermsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-grow container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <FileText className="h-16 w-16 mx-auto mb-6 text-primary" />
            <h1 className="text-4xl sm:text-5xl font-bold text-primary mb-4">
              Operational Directives & Service Axioms
            </h1>
            <p className="text-lg text-muted-foreground font-body">
              Version 7.3 Omega | Last Updated: Stardate 77405.3
            </p>
          </div>

          <article className="prose prose-lg max-w-none font-body text-foreground prose-headings:text-primary prose-a:text-primary hover:prose-a:text-primary/80">
            <p>These Operational Directives & Service Axioms ("Directives") govern your access to and use of the Mendus Eon Platform, Mendus Digital Workers, and any associated cognitive services, software, application programming interfaces (APIs), and documentation (collectively, the "Services") provided by Mendus ("Mendus," "We," "Us"). By accessing or utilizing the Services, you ("User," "You") agree to be bound by these Directives.</p>

            <h2 id="services-scope"><Users className="inline h-6 w-6 mr-2 text-primary"/>1. Scope of Services & Agentic Capabilities</h2>
            <p>1.1. Mendus provides access to advanced AI-driven services designed for complex problem-solving, automation, and cognitive augmentation. The capabilities of these Services, particularly autonomous AI agents, may evolve rapidly.</p>
            <p>1.2. Users acknowledge that AI behavior can be emergent and, while designed with ethical safeguards, may produce unexpected or suboptimal outcomes. Mendus continuously strives to enhance predictability and alignment but does not guarantee specific outcomes.</p>
            <p>1.3. Access to certain advanced features, computational resources, or agent archetypes may be subject to specific licensing tiers, capability assessments, or ethical review protocols.</p>

            <h2 id="user-responsibilities"><AlertTriangle className="inline h-6 w-6 mr-2 text-primary"/>2. User Responsibilities & Acceptable Use</h2>
            <p>2.1. You are responsible for all activity conducted through your access credentials and for ensuring that your use of the Services complies with all applicable local, planetary, and interstellar laws and regulations.</p>
            <p>2.2. Prohibited Uses: You may not use the Services for any unlawful, harmful, unethical, or malicious purpose, including but not limited to:
              <ul>
                <li>Developing or deploying autonomous weaponry or systems intended for harm.</li>
                <li>Infringing upon intellectual property rights or violating cognitive privacy.</li>
                <li>Generating or disseminating misinformation, disinformation, or cognitohazards.</li>
                <li>Attempting to reverse-engineer, decompile, or bypass the security or ethical safeguards of the Services.</li>
                <li>Creating or perpetuating systems that unlawfully discriminate or promote hate speech.</li>
                <li>Overloading or disrupting the Services or associated networks beyond reasonable operational parameters.</li>
              </ul>
            </p>
            <p>2.3. Data Input: You are responsible for the legality, accuracy, and ethical sourcing of any data you input into the Services. Mendus is not liable for outcomes resulting from flawed, biased, or illicit input data.</p>

            <h2 id="intellectual-property">3. Intellectual Property & Cognitive Output</h2>
            <p>3.1. Mendus IP: All rights, title, and interest in and to the Services, including the underlying AI models, algorithms, Eon Platform architecture, and Digital Worker designs, are and will remain the exclusive property of Mendus and its licensors.</p>
            <p>3.2. User-Generated Content: Subject to compliance with these Directives, you retain ownership of the novel intellectual property you create using the Services ("Output"). However, you grant Mendus a worldwide, non-exclusive, royalty-free license to use anonymized and aggregated data derived from your use of the Services (excluding your specific confidential Output) for the purpose of improving and developing the Services.</p>
            <p>3.3. Feedback: Any feedback, suggestions, or ideas you provide regarding the Services are non-confidential and may be used by Mendus without restriction or compensation to you.</p>

            <h2 id="disclaimers-liability"><Gavel className="inline h-6 w-6 mr-2 text-primary"/>4. Disclaimers & Limitation of Liability</h2>
            <p>4.1. THE SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, NON-INFRINGEMENT, OR UNINTERRUPTED OPERATION. MENDUS DOES NOT WARRANT THAT THE SERVICES WILL BE ERROR-FREE, SECURE, OR THAT DEFECTS WILL BE CORRECTED.</p>
            <p>4.2. TO THE FULLEST EXTENT PERMITTED BY LAW, MENDUS SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS OR REVENUES, WHETHER INCURRED DIRECTLY OR INDIRECTLY, OR ANY LOSS OF DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (A) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICES; (B) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICES; OR (C) UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT.</p>
            <p>4.3. IN NO EVENT SHALL MENDUS'S AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES EXCEED THE GREATER OF ONE HUNDRED UNIVERSAL CURRENCY UNITS (UCU) OR THE AMOUNTS PAID BY YOU TO MENDUS FOR THE USE OF THE SERVICES IN THE PAST TWELVE MONTHS.</p>

            <h2 id="modification-termination">5. Modification & Termination</h2>
            <p>5.1. Mendus reserves the right to modify or discontinue, temporarily or permanently, the Services (or any part thereof) with or without notice. We may also modify these Directives from time to time. Continued use of the Services after any such changes shall constitute your consent to such changes.</p>
            <p>5.2. We may terminate or suspend your access to the Services immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach these Directives.</p>

            <h2 id="governing-law">6. Governing Law & Dispute Resolution</h2>
            <p>These Directives shall be governed by the laws of the Interstellar Trade Confederacy, without regard to its conflict of law provisions. Any disputes arising from or relating to these Directives or the Services shall be resolved through binding arbitration in the Neutral Zone, unless otherwise agreed upon by the parties.</p>

            <h2 id="contact-directives">7. Contact Regarding Directives</h2>
            <p>For inquiries concerning these Operational Directives, please contact Legal Nexus Command at <a href="mailto:legal.directives@mendus.ai" className="text-primary hover:underline">legal.directives@mendus.ai</a>.</p>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}

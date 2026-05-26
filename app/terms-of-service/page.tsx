import ScrollReveal from '@/components/ui/ScrollReveal'
import LegalPage from '@/components/ui/LegalPage'
export const metadata = { title:'Terms of Service — Nate Danbury' }
export default function TermsPage() {
  return (
    <>
      <ScrollReveal />
      <LegalPage title="Terms of Service" subtitle="Please read carefully" lastUpdated="January 1, 2025">
      <h4>1. Acceptance of Terms</h4><p>By accessing and using this website, you accept and agree to be bound by these Terms of Service.</p>
      <h4>2. Services</h4><p>All work is subject to a formal agreement, project scope, and payment terms agreed upon before project commencement.</p>
      <h4>3. Intellectual Property</h4><p>Upon full payment, the client receives full ownership of final deliverables. Preliminary designs and unused work remain the property of Nate Danbury unless otherwise agreed in writing.</p>
      <h4>4. Revisions &amp; Approvals</h4><p>Each project includes a set number of revisions as outlined in the project agreement. Additional revisions beyond scope will be billed at the applicable hourly rate.</p>
      <h4>5. Payment Terms</h4><p>Projects require a deposit before work begins. Final payment is due upon completion before final files are delivered.</p>
      <h4>6. Limitation of Liability</h4><p>Nate Danbury is not liable for any indirect, incidental, or consequential damages arising from the use of our services.</p>
      <h4>7. Changes to Terms</h4><p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the new terms.</p>
    </LegalPage>
    </>
  )
}

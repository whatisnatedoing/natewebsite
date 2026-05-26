import LegalPage from '@/components/ui/LegalPage'
export const metadata = { title:'Privacy Policy — Nate Danbury' }
export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy" subtitle="Your privacy matters" lastUpdated="January 1, 2025">
      <h4>1. Information We Collect</h4><p>We collect information you provide directly when you fill out our contact form, questionnaire, or subscribe to our newsletter — including your name, email, phone number, and project details.</p>
      <h4>2. How We Use Your Information</h4><p>We use collected information to respond to inquiries, provide services, send project-related communications, and improve our website experience.</p>
      <h4>3. Information Sharing</h4><p>We do not sell, trade, or transfer your personally identifiable information to outside parties, except trusted third parties who assist in operating our website and agree to keep information confidential.</p>
      <h4>4. Cookies</h4><p>Our website uses cookies to enhance your browsing experience. You can disable cookies through your browser settings. See our Cookie Policy for more details.</p>
      <h4>5. Data Security</h4><p>We implement security measures to protect your personal information. However, no method of transmission over the internet is 100% secure.</p>
      <h4>6. Contact Us</h4><p>Questions about this Privacy Policy? Contact us at hello@natedanbury.com.</p>
    </LegalPage>
  )
}

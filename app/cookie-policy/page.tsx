import ScrollReveal from '@/components/ui/ScrollReveal'
import LegalPage from '@/components/ui/LegalPage'
export const metadata = { title:'Cookie Policy — Nate Danbury' }
export default function CookiePolicyPage() {
  return (
    <>
      <ScrollReveal />
      <LegalPage title="Cookie Policy" subtitle="How we use cookies" lastUpdated="January 1, 2025">
      <h4>1. What Are Cookies?</h4><p>Cookies are small text files stored on your device when you visit a website. They help us understand how you use our site and improve your experience.</p>
      <h4>2. Types of Cookies We Use</h4>
      <p><strong>Essential Cookies:</strong> Required for the website to function properly and cannot be disabled.</p>
      <p><strong>Analytics Cookies:</strong> Help us understand how visitors interact with our website. Only set with your consent.</p>
      <p><strong>Preference Cookies:</strong> Remember your preferences such as consent choices to improve future visits.</p>
      <h4>3. Managing Cookies</h4><p>You can control and delete cookies through your browser settings. Disabling certain cookies may affect website functionality.</p>
      <h4>4. Third-Party Cookies</h4><p>Some pages may include content from third-party services which may set their own cookies. We have no control over these.</p>
      <h4>5. Contact</h4><p>Questions about our use of cookies? Contact us at hello@natedanbury.com.</p>
    </LegalPage>
    </>
  )
}

import QuestionnaireForm from '@/components/ui/QuestionnaireForm'
import ScrollReveal from '@/components/ui/ScrollReveal'
export const metadata = { title: 'Get Started — Nate Danbury' }
export default function QuestionnairePage() {
  return (
    <>
      <ScrollReveal />
      <section className="mil-banner mil-inner-banner mil-dark-bg">
        <div className="mi-invert-fix">
          <div className="mil-animation-frame"><div className="mil-animation mil-position-4"></div></div>
          <div className="mil-gradient"></div>
          <div className="container">
            <div className="mil-banner-content mil-up">
              <ul className="mil-breadcrumbs mil-mb-60">
                <li><a href="/">Home</a></li>
                <li><a href="/questionnaire">Get Started</a></li>
              </ul>
              <h1 className="mil-muted mil-mb-30">Let&apos;s <span className="mil-thin">Get Started</span></h1>
              <p className="mil-light-soft" style={{ maxWidth: 520 }}>Answer a few quick questions so I can understand your project and recommend the best solution.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mil-p-120-120">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8"><QuestionnaireForm /></div>
          </div>
        </div>
      </section>
    </>
  )
}

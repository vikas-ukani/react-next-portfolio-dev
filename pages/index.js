import Head from 'next/head'
import ContactSection from '../Components/HomeSections/ContectSection'
import ExperienceSection from '../Components/HomeSections/ExperienceSection'
import FrontSection from '../Components/HomeSections/FrontSection'
import IntroSection from '../Components/HomeSections/IntroSection'
import PortfolioSection from '../Components/HomeSections/PortfolioSection'
import SkillSection from '../Components/HomeSections/SkillSection'

function Home() {
  return (
    <>
      <Head>
        <title>Vikas Ukani Portfolio</title>
        <meta name="description" content="vikas ukani portfolio website, software engineer, fullsstack developer, backend developer" />
        <meta name="keywords" content="vikas-ukani, web developer, fullstack developer, software engineer, laravel developer, backend developer" />
      </Head>
      <div>
        <div id="content" className="site-content">
          <div className="content-holder center-relative content-1300 post-9 page type-page status-publish hentry">
            <div data-elementor-type="wp-page" data-elementor-id="9" className="elementor elementor-9"
              data-elementor-settings="[]">
              <div className="elementor-inner">
                <div className="elementor-section-wrap">

                  <FrontSection />

                  <IntroSection />

                  <PortfolioSection />

                  <ExperienceSection />

                  <SkillSection />

                  <ContactSection />
                </div>
              </div>
            </div>
            <div className="clear"> </div>
            <div id="comments" className="comments-holder">
              <div className="clear"> </div>
            </div>
            <div className="clear"> </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home

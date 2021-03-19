import AboutMe from '../Components/HomeSections/AboutMe'
import ContactSection from '../Components/HomeSections/ContectSection'
import ExperienceSection from '../Components/HomeSections/ExperienceSection'
import FrontSection from '../Components/HomeSections/FrontSection'
import IntroSection from '../Components/HomeSections/IntroSection'
import PortfolioSection from '../Components/HomeSections/PortfolioSection'
import SkillSection from '../Components/HomeSections/SkillSection'

export async function getStaticProps(context) {
  return {
    props: {
      username: "Vikas Ukani"
    }
  }
}

function Home(props) {
  return (
    <>
      <div id="content" className="site-content">
        <div className="content-holder center-relative content-1300 post-9 page type-page status-publish hentry">
          <div data-elementor-type="wp-page" data-elementor-id="9" className="elementor elementor-9" data-elementor-settings="[]">
            <div className="elementor-inner">
              <div className="elementor-section-wrap">
                <FrontSection />
                <AboutMe />
                <ExperienceSection />
                <SkillSection />
                <PortfolioSection />
                <IntroSection />
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
    </>
  )
}

export default Home

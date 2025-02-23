import data from '../HomePageData.json';
import Hero from '../components/Hero/Hero.jsx';
import About from '../components/About/About.jsx';
import Iconbox from '../components/Iconbox/Iconbox.jsx';
import Skill from '../components/Skill/Skill.jsx';
import Resume from '../components/Resume/ResumeSection.jsx';
import BlogSection from '../components/Blog/BlogSection.jsx';
import Contact from "../components/Contact/Contact.jsx";
import ReviewSection from '../components/Review/ReviewSection.jsx';
import PortfolioSection from '../components/Portfolio/PortfolioSection.jsx';

const Home = () => {
  const { heroData, aboutData, serviceData, skillData, portfolioData, blogData, resumeData, reviewData, contactData, socialData } = data;
  return (
    <>
      <Hero data={heroData} socialData={socialData} data-aos="fade-right" />
      <About data={aboutData} data-aos="fade-right" />  
      <Iconbox data={serviceData} data-aos="fade-right" />
      <Skill data={skillData} data-aos="fade-right" />
      <Resume data={resumeData} />
      <PortfolioSection data={portfolioData} data-aos="fade-right" />
      <ReviewSection data={reviewData} data-aos="fade-right" />
      <BlogSection data={blogData} data-aos="fade-right" />
      <Contact data={contactData} socialData={socialData} data-aos="fade-right" />
    </>
  )
}


export default Home;

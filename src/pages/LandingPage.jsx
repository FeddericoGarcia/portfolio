import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Proyects from '../components/Projects';
import SkillSection from '../components/SkillSection';
import Contact from '../components/Contact'
import { BackgroundBeams } from '../components/ui/BackgroundBeams';
import SmoothSection from '../components/ui/SmoothSection';

const LandingPage = ({ mode, toggleColorMode }) => {
    return (
        <div style={{ position: "relative", overflow: 'hidden' }}>
            <Header mode={mode} toggleColorMode={toggleColorMode} />
            <SmoothSection id="home">
                <HeroSection />
            </SmoothSection>
            <BackgroundBeams />
            <SmoothSection id="about" >
                <About />
            </SmoothSection >
            <SmoothSection>
                <SkillSection />
            </SmoothSection>
            <SmoothSection id="projects" >
                <Proyects />
            </SmoothSection>
            <SmoothSection id="contact">
                <Contact />
            </SmoothSection>
            <Footer />
        </div>
    )
}

export default LandingPage;
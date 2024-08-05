// import Box from '@mui/material/Box';

import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Proyects from '../components/Proyects';
import SkillSection from '../components/SkillSection';
import Contact from '../components/Contact'

const LandingPage = ({ mode, toggleColorMode }) =>{
    return (
        <div>
            <Header mode={ mode } toggleColorMode={ toggleColorMode } />
            <HeroSection />
            <About />
            <Proyects />
            <SkillSection />
            <Contact />
            <Footer />
        </div>
    )
}

export default LandingPage;
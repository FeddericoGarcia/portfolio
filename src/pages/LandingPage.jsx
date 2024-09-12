import { Box } from '@mui/material';

import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Proyects from '../components/Projects';
import SkillSection from '../components/SkillSection';
import Contact from '../components/Contact'
import { BackgroundBeams } from '../components/ui/BackgroundBeams';

const LandingPage = ({ mode, toggleColorMode }) =>{
    return (
        <div>
            <Header mode={ mode } toggleColorMode={ toggleColorMode } />
            <Box sx={{position: "relative", overflow: 'hidden'}}>
                <HeroSection />
                <BackgroundBeams />
                <About />
                <SkillSection />
                <Proyects />
            </Box>
            <Contact />
            <Footer />
        </div>
    )
}

export default LandingPage;
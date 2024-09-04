// import Box from '@mui/material/Box';

import About from '../components/About';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import Proyects from '../components/Projects';
import SkillSection from '../components/SkillSection';
import Contact from '../components/Contact'
import { BackgroundBeams } from '../components/ui/BackgroundBeams';
import { Box } from '@mui/material';

const LandingPage = ({ mode, toggleColorMode }) =>{
    return (
        <div>
            <Header mode={ mode } toggleColorMode={ toggleColorMode } />
            <Box sx={{position: "relative"}}>
                <HeroSection />
                <BackgroundBeams sx={{transform: "rotate(45deg)"}} />
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
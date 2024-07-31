// import Box from '@mui/material/Box';

import About from '../components/about';
import Footer from '../components/footer';
import Header from '../components/header';
import HeroSection from '../components/HeroSection';
import Proyects from '../components/proyects';
import SkillSection from '../components/skillSection';

const LandingPage = ({ mode, toggleColorMode }) =>{
    return (
        <div>
            <Header mode={ mode } toggleColorMode={ toggleColorMode } />
            <HeroSection />
            <About />
            <Proyects />
            <SkillSection />
            <Footer />
        </div>
    )
}

export default LandingPage;
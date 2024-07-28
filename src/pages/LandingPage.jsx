// import Box from '@mui/material/Box';

import Footer from '../components/footer';
import Header from '../components/header';
import HeroSection from '../components/HeroSection';

const LandingPage = ({ mode, toggleColorMode }) =>{
    return (
        <div>
            <Header mode={ mode } toggleColorMode={ toggleColorMode } />
            <HeroSection />
            <Footer />
        </div>
    )
}

export default LandingPage;
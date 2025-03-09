import { Box } from '@mui/material';
import React from 'react';
import HomeSwiper from '../../../Components/HomeSwiper/HomeSwiper';
import AboutSection from './About';
import OurProducts from './OurProducts';
import Counter from './Counter';
import Info from './Info';

const Home = () => {
    return (
        <Box>
            <HomeSwiper />
            <AboutSection />
            <OurProducts />
            <Counter />
            <Info />
        </Box>
    );
};

export default Home;

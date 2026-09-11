import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import HeroTwo from '../../components/hero2';
import AboutSectionTwo from '../../components/about2/about2';
import ServiceSectionTwo from '../../components/ServiceSectionTwo';
import TeamSection from '../../components/TeamSection';
import WorkSectionTwo from '../../components/WorkSectionTwo/WorkSectionTwo';
import FunFactSectionTwo from '../../components/FunFactTwo';
import CTATwoSection from '../../components/CTATwoSection/CTATwoSection';
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import TestimonialSectionTwo from '../../components/Testimonial2/Testimonial2';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage2: React.FC = () => {
    return (
        <Fragment>
            <Navbar2 />
            <HeroTwo />
            <WorkSectionTwo />
            <AboutSectionTwo />
            <FunFactSectionTwo />
            <ServiceSectionTwo />
            <TeamSection />
            <CTATwoSection />
            <PartnersSection />
            <TestimonialSectionTwo />
            <BlogSection />
            <Footer />
            <Scrollbar /> 
        </Fragment>
    )
};
export default HomePage2;
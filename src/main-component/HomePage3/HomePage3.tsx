import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import HeroThree from '../../components/hero3/hero3';
import AboutSectionThree from '../../components/about3/about3';
import ServiceSectionTwo from '../../components/ServiceSectionTwo';
import TransformingSection from '../../components/TransformingSection/TransformingSection';
import CTATwoSection from '../../components/CTATwoSection/CTATwoSection';
import TeamSection from '../../components/TeamSection';
import FunFactSectionTwo from '../../components/FunFactTwo';
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import TestimonialSectionTwo from '../../components/Testimonial2/Testimonial2';
import BookingSection from '../../components/BookingSection/BookingSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage3: React.FC = () => {
    return (
        <Fragment>
            <Navbar2 />
            <HeroThree />
            <AboutSectionThree />
            <FunFactSectionTwo />
            <ServiceSectionTwo />
            <TransformingSection tclass={'pt-0'}/>
            <CTATwoSection />
            <TeamSection />
            <TestimonialSectionTwo />
            <BookingSection />
            <PartnersSection />
            <BlogSection />
            <Footer />
            <Scrollbar /> 
        </Fragment>
    )
};
export default HomePage3;

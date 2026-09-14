import React, { Fragment } from 'react';
import Navbar from '../../components/Navbar/Navbar'
import HeroStatic from '../../components/hero/hero';
import AboutSection from '../../components/about/about';
import ServiceSection from '../../components/ServiceSection';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import WorkSection from '../../components/WorkSection/WorkSection';
import FunFact from '../../components/FunFact';
import TransformingSection from '../../components/TransformingSection/TransformingSection';
import CTASection from '../../components/CTASection/CTASection';
import TestimonialSection from '../../components/Testimonial/TestimonialSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import BookingSection from '../../components/BookingSection/BookingSection';
import BlogSection from '../../components/BlogSection/BlogSection';
import Footer from '../../components/footer/Footer';
import Scrollbar from '../../components/scrollbar/scrollbar';


const HomePage: React.FC = () => {
    return (
        <Fragment>
            <Navbar />
            <HeroStatic />
            <AboutSection />
            <ServiceSection />
            <ChooseSection />
            <WorkSection />
            <FunFact />
            <TransformingSection />
            <CTASection />
            <TestimonialSection />
            <ContactSection />
            <BookingSection />
            <BlogSection />
            <Footer />
            <Scrollbar /> 
        </Fragment>
    )
};
export default HomePage;
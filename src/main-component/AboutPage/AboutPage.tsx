import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle';
import AboutSection from '../../components/about/about';
import VisionMission from '../../components/VisionMission/VisionMission';
import ServiceSection from '../../components/ServiceSection';
import ChooseSection from '../../components/ChooseSection/ChooseSection';
import WorkSection from '../../components/WorkSection/WorkSection';
import FunFact from '../../components/FunFact';
import TransformingSection from '../../components/TransformingSection/TransformingSection';
import FaqSection from '../../components/FaqSection/FaqSection';
import TestimonialSection from '../../components/Testimonial/TestimonialSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import Scrollbar from '../../components/scrollbar/scrollbar';
import Footer from '../../components/footer/Footer';

const AboutPage: React.FC = () => {
    return (
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Because Clean Feels Better'} pagesub={'About Us'} />
            <AboutSection/>
            <VisionMission />
            <ServiceSection />
            <ChooseSection />
            <WorkSection />
            <FunFact />
            <TransformingSection />
            <FaqSection />
            <TestimonialSection />
            <ContactSection />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default AboutPage;

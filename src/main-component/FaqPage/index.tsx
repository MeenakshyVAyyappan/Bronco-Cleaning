import React, {Fragment} from 'react';
import Navbar2 from "../../components/Navbar2/Navbar2";
import PageTitle from '../../components/pagetitle/PageTitle'
import FaqSection from '../../components/FaqSection/FaqSection';
import ContactSection from '../../components/ContactSection/ContactSection';
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const FaqPage: React.FC = () => {

    return(
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'Frequently Asked Questions'} pagesub={'FAQ'}/> 
            <div className='section-padding pb-0'>
                <FaqSection />
            </div>
            <ContactSection />
            <PartnersSection />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default FaqPage;



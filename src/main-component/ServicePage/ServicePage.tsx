import React, {Fragment} from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import ServiceSectionThree from '../../components/ServiceSectionThree';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';


const ServicePage: React.FC = () => {

    return(
        <Fragment>
            <Navbar2/>
            <PageTitle pageTitle={'Because Clean Feels Better'} pagesub={'Services'}/> 
            <ServiceSectionThree />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ServicePage;


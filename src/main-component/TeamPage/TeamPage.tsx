import React, {Fragment} from 'react';
import Navbar2 from "../../components/Navbar2/Navbar2";
import PageTitle from '../../components/pagetitle/PageTitle'
import TeamSectionS2 from '../../components/TeamSectionS2';
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const TeamPage: React.FC = () => {

    return(
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'Meet Our Team'} pagesub={'Our Team'}/> 
            <TeamSectionS2/>
            <PartnersSection />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default TeamPage;


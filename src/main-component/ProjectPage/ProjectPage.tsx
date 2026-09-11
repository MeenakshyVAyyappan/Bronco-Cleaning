import React, {Fragment} from 'react';
import Navbar2 from "../../components/Navbar2/Navbar2";
import PageTitle from '../../components/pagetitle/PageTitle'
import ProjectSection from '../../components/ProjectSection/ProjectSection';
import PartnersSection from '../../components/PartnersSection/PartnersSection';
import Scrollbar from '../../components/scrollbar/scrollbar'
import Footer from '../../components/footer/Footer';

const ProjectPage: React.FC = () => {

    return(
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'Our Projects'} pagesub={'Projects'}/> 
            <ProjectSection/>
            <PartnersSection />
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default ProjectPage;


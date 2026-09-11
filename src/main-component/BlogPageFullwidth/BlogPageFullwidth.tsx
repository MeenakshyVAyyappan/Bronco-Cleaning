import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle/PageTitle.js'
import BlogList from '../../components/BlogList/BlogList.js'
import Navbar2 from '../../components/Navbar2/Navbar2.js';
import Footer from '../../components/footer/Footer.js';
import Scrollbar from '../../components/scrollbar/scrollbar.js'

const BlogPageFullwidth: React.FC = () => {
    return(
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'Latest News'} pagesub={'Blog'}/> 
            <BlogList bclass={'blog-pg-fullwidth'} blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
            <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};
export default BlogPageFullwidth;

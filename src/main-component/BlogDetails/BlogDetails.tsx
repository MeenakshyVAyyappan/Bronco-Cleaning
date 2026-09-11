import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import BlogSingle from '../../components/BlogDetails/BlogDetails';
import Footer from '../../components/footer/Footer';

const BlogDetails: React.FC = () => {

    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={"Because Clean Feels Better"} pagesub={'Blog Single'} />
            <BlogSingle />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetails;

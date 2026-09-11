import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import BlogSingle from '../../components/BlogDetails/BlogDetails';
import Footer from '../../components/footer/Footer';

const BlogDetailsLeftSiide: React.FC = () => {

    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={"Blog Single"} pagesub={'Blog'} />
            <BlogSingle bclass={'wpo-blog-single-left-sidebar-section'} blLeft={'order-lg-1'} blRight={'order-lg-2'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetailsLeftSiide;
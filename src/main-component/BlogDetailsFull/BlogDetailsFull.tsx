import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import BlogSingle from '../../components/BlogDetails/BlogDetails';
import Footer from '../../components/footer/Footer';

const BlogDetailsFull: React.FC = () => {

    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={"Blog Single"} pagesub={'Blog'} />
            <BlogSingle bclass={'blog-single-fullwidth'} blLeft={'d-none'} blRight={'col-lg-10 offset-lg-1'}/>
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};
export default BlogDetailsFull;
import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";

import Navbar2 from "../../components/Navbar2/Navbar2";
import PageTitle from "../../components/pagetitle/PageTitle";
import PartnersSection from "../../components/PartnersSection/PartnersSection";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

import projects from "../../api/projects";

import project2 from "../../images/project-single/2.jpg";
import project3 from "../../images/project-single/3.jpg";
import VideoSection from "../../components/VideoSection/VideoSection";



const faqItems = [
    {
        title: "Modern Equipment We Use and support from our experts.",
        text: "We utilize industrial-grade HEPA vacuums, eco-friendly solvents, and advanced steam cleaners to ensure 99.9% sanitization."
    },
    {
        title: "Planning can help alleviate workplace stress and increase productivity.",
        text: "Our structured cleaning protocols guarantee minimal disruption to your daily operations while delivering spotless results."
    },
    {
        title: "Those who experiment the most, are able to innovate the best.",
        text: "We constantly upgrade our cleaning techniques and train our staff to handle unique cleaning challenges in Dubai's climate."
    },
    {
        title: "Understand Your Problem, You must understand the issue.",
        text: "Every property requires a customized approach. We assess the area thoroughly before recommending the best deep cleaning strategy."
    }
];

const ProjectSinglePage: React.FC = () => {
    const [activeIndex, setActiveIndex] = React.useState<number | null>(0);

    const { slug } = useParams<{ slug: string }>();

    const project = projects.find((item) => item.slug === slug);

    if (!project) {
        return (
            <h2 style={{ textAlign: "center", padding: "120px" }}>
                Project not found
            </h2>
        );
    }

    return (
        <Fragment>

            <Navbar2 />

            <PageTitle
                pageTitle={'Because Clean Feels Better'}
                pagesub={project.title}
            />

            <section className="wpo-project-details-area section-padding">

                <div className="container">

                    <div className="row">

                        {/* LEFT CONTENT */}
                        <div className="col-lg-8 col-12">

                            {/* IMAGE + VIDEO */}
                            <div className="wpo-minimal-wrap">

                                <div className="wpo-minimal-img">
                                    <img src={project.image} alt={project.title} />
                                </div>

                                <ul>
                                    <li className="video-holder">
                                        <VideoSection/>
                                    </li>
                                </ul>

                            </div>


                            {/* PROJECT INFO */}
                            <div className="wpo-project-details-list">

                                <div className="row">

                                    <div className="col col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wpo-project-details-text">
                                            <span>Client Location</span>
                                            <h2>Dubai, UAE</h2>
                                        </div>
                                    </div>

                                    <div className="col col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wpo-project-details-text-3">
                                            <span>Project Type</span>
                                            <h2>Deep Clean</h2>
                                        </div>
                                    </div>

                                    <div className="col col-lg-4 col-md-4 col-sm-6 col-12">
                                        <div className="wpo-project-details-text">
                                            <span>Completion Time</span>
                                            <h2>48 Hours</h2>
                                        </div>
                                    </div>

                                </div>

                            </div>


                            {/* PROJECT DESCRIPTION */}
                            <div className="wpo-p-details-section">

                                <h5>Project Requirement</h5>

                                <p>
                                    This project involved a comprehensive deep cleaning service tailored for a high-end property in Dubai. The client required complete sanitization, floor polishing, and HVAC vent dusting to ensure the highest standards of indoor air quality and hygiene.
                                </p>

                                <p>
                                    Our dedicated team from Bronco Cleaning Services deployed specialized equipment and eco-friendly products to tackle stubborn stains, grease build-ups, and fine desert dust, leaving the premises completely refreshed and pristine.
                                </p>


                                {/* PROCESS */}
                                <div className="process-wrap">

                                    <h5>Our work process</h5>

                                    <div className="row">

                                        <div className="col-lg-4 col-md-6 col-12">

                                            <div className="process-item">

                                                <div className="process-icon">
                                                    <i className="fi flaticon-handshake"></i>
                                                </div>

                                                <div className="process-text">
                                                    <h3>Quality We Ensure</h3>
                                                    <p>
                                                        We conduct multi-point inspections to guarantee flawless cleanliness and complete client satisfaction.
                                                    </p>
                                                </div>

                                            </div>

                                        </div>


                                        <div className="col-lg-4 col-md-6 col-12">

                                            <div className="process-item">

                                                <div className="process-icon">
                                                    <i className="fi flaticon-medal"></i>
                                                </div>

                                                <div className="process-text">
                                                    <h3>Experienced Workers</h3>
                                                    <p>
                                                        Our staff is thoroughly vetted, BICS-certified, and expertly trained in specialized cleaning protocols.
                                                    </p>
                                                </div>

                                            </div>

                                        </div>


                                        <div className="col-lg-4 col-md-6 col-12">

                                            <div className="process-item">

                                                <div className="process-icon">
                                                    <i className="fi flaticon-gift-box"></i>
                                                </div>

                                                <div className="process-text">
                                                    <h3>Modern Equipment Use</h3>
                                                    <p>
                                                        We deploy state-of-the-art steam cleaners and industrial vacuums for optimal sanitization.
                                                    </p>
                                                </div>

                                            </div>

                                        </div>

                                    </div>

                                </div>


                                <p>
                                    Dubai's unique environment often leads to rapid accumulation of fine sand and dust. By implementing our targeted deep cleaning strategies, we not only restore the aesthetic appeal of the property but also significantly enhance the living and working conditions for its occupants.
                                </p>


                                {/* GALLERY */}
                                <div className="row">

                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={project2} alt="" />
                                        </div>
                                    </div>

                                    <div className="col-md-6 col-sm-6 col-12">
                                        <div className="wpo-p-details-img">
                                            <img src={project3} alt="" />
                                        </div>
                                    </div>

                                </div>


                                <p>
                                   At Bronco Cleaning Services, we pride ourselves on delivering consistent, high-quality results. Whether it's a large-scale commercial space or a luxury residential villa, our commitment to excellence ensures every corner is spotless, hygienic, and welcoming.
                                </p>

                            </div>


                            {/* FAQ / ACCORDION */}
                            <div className="wpo-faq-section">
                                <h4>Project Solution</h4>

                                <div className="accordion">

                                    {faqItems.map((item, index) => {

                                        const isOpen = activeIndex === index;

                                        return (
                                            <div className="accordion-item" key={index}>

                                                <h3 className="accordion-header">

                                                    <button
                                                        className={`accordion-button ${!isOpen ? "collapsed" : ""}`}
                                                        onClick={() =>
                                                            setActiveIndex(isOpen ? null : index)
                                                        }
                                                    >
                                                        {item.title}
                                                    </button>

                                                </h3>

                                                <div
                                                    className={`accordion-collapse collapse ${isOpen ? "show" : ""}`}
                                                >

                                                    <div className="accordion-body">
                                                        <p>{item.text}</p>
                                                    </div>

                                                </div>

                                            </div>
                                        );

                                    })}

                                </div>
                            </div>

                        </div>


                        {/* SIDEBAR */}
                        <div className="col-lg-4 col-12">

                            <div className="blog-sidebar">

                                {/* SEARCH */}
                                <div className="widget search-widget">

                                    <form>

                                        <div>

                                            <input
                                                type="text"
                                                className="form-control"
                                                placeholder="Search Post.."
                                            />

                                            <button type="submit">
                                                <i className="ti-search"></i>
                                            </button>

                                        </div>

                                    </form>

                                </div>


                                {/* SERVICES */}
                                <div className="widget category-widget">

                                    <h3>Services</h3>

                                    <ul>

                                        {projects.map((service) => {

                                            const count = Math.floor(Math.random() * 50) + 10;

                                            return (
                                                <li key={service.id}>

                                                    <Link to={`/project-single/${service.slug}`}>

                                                        {service.title}

                                                        <span>{count}</span>

                                                    </Link>

                                                </li>
                                            );

                                        })}

                                    </ul>

                                </div>

                                {/* SERVICE INFO */}
                                <div className="service-info">

                                    <div className="icon">
                                        <i className="flaticon-phone-call"></i>
                                    </div>

                                    <h2>
                                        Looking for a Cleaning Service Provider?
                                    </h2>

                                    <span>Call anytime</span>

                                    <a href="tel:+9710541484800" className="num">
                                        <span>+971 054 148 4800</span>
                                    </a>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <PartnersSection />

            <Footer />

            <Scrollbar />

        </Fragment>
    );
};

export default ProjectSinglePage;

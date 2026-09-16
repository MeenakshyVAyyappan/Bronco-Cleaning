import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() => import("../HomePage/HomePage"));
const HomePage2 = lazy(() => import("../HomePage2/HomePage2"));
const HomePage3 = lazy(() => import("../HomePage3/HomePage3"));
const AboutPage = lazy(() => import("../AboutPage/AboutPage"));
const AppoinmentPage = lazy(() => import("../AppoinmentPage/AppoinmentPage"));
const ProjectPage = lazy(() => import("../ProjectPage/ProjectPage"));
const ProjectSinglePage = lazy(() => import("../ProjectSinglePage/ProjectSinglePage"));
const TeamPage = lazy(() => import("../TeamPage/TeamPage"));
const TeamSinglePage = lazy(() => import("../TeamSinglePage/TeamSinglePage"));
const FaqPage = lazy(() => import("../FaqPage"));
const ErrorPage = lazy(() => import("../ErrorPage/ErrorPage"));
const ServicePage = lazy(() => import("../ServicePage/ServicePage"));
const ServiceSinglePage = lazy(() => import("../ServiceSinglePage/ServiceSinglePage"));
const ShopPage = lazy(() => import("../ShopPage"));
const ProductSinglePage = lazy(() => import("../ProductSinglePage"));
const CartPage = lazy(() => import("../CartPage"));
const CheckoutPage = lazy(() => import("../CheckoutPage"));
const OrderRecived = lazy(() => import("../OrderRecived"));
const BlogPage = lazy(() => import("../BlogPage/BlogPage"));
const BlogPageLeft = lazy(() => import("../BlogPageLeft/BlogPageLeft"));
const BlogPageFullwidth = lazy(() => import("../BlogPageFullwidth/BlogPageFullwidth"));
const BlogDetails = lazy(() => import("../BlogDetails/BlogDetails"));
const BlogDetailsLeftSiide = lazy(() => import("../BlogDetailsLeftSiide/BlogDetailsLeftSiide"));
const BlogDetailsFull = lazy(() => import("../BlogDetailsFull/BlogDetailsFull"));
const ContactPage = lazy(() => import("../ContactPage/ContactPage"));
const NotFound = lazy(() => import("../../NotFound"));

const AllRoute: React.FC = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="home" element={<HomePage />} />
        <Route path="home-2" element={<HomePage2 />} />
        <Route path="home-3" element={<HomePage3 />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="appoinment" element={<AppoinmentPage />} />
        <Route path="project" element={<ProjectPage />} />
        <Route path="project-single/:slug" element={<ProjectSinglePage />} />
        <Route path="team" element={<TeamPage />} />
        <Route path="team-single/:slug" element={<TeamSinglePage />} />
        <Route path="faq" element={<FaqPage />} />
        <Route path="service" element={<ServicePage />} />
        <Route path="service-single/:slug" element={<ServiceSinglePage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="product-single/:slug" element={<ProductSinglePage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="order_received" element={<OrderRecived />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="blog-left-sidebar" element={<BlogPageLeft />} />
        <Route path="blog-fullwidth" element={<BlogPageFullwidth />} />
        <Route path="blog-single/:slug" element={<BlogDetails />} />
        <Route path="blog-single-left-sidebar/:slug" element={<BlogDetailsLeftSiide />} />
        <Route path="blog-single-fullwidth/:slug" element={<BlogDetailsFull />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="404" element={<ErrorPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AllRoute;

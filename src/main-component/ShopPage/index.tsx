import React, { Fragment } from 'react';
import Navbar2 from '../../components/Navbar2/Navbar2';
import PageTitle from '../../components/pagetitle/PageTitle'
import Scrollbar from '../../components/scrollbar/scrollbar'
import { useDispatch } from "react-redux";
import { addToCart } from "../../store/slices/cartSlice";
import ShopProduct from '../../components/ShopProduct';
import api from "../../api";
import Footer from '../../components/footer/Footer';


const ShopPage: React.FC = () => {

    const dispatch = useDispatch();
    const products = api();

    const addToCartProduct = (product: any, qty: number = 1) => {
        dispatch(addToCart({ ...product, qty }));
    };
    return (
        <Fragment>
            <Navbar2 />
            <PageTitle pageTitle={'Cleaning Products Shop'} pagesub={'Shop'} />
            <ShopProduct
                addToCartProduct={addToCartProduct}
                products={products}
            />
            <Footer />
            <Scrollbar />
        </Fragment>
    )
};

export default ShopPage;
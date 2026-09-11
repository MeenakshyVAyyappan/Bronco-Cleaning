import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import Navbar2 from "../../components/Navbar2/Navbar2";
import PageTitle from "../../components/pagetitle/PageTitle";
import CheckoutSection from "../../components/CheckoutSection";
import Scrollbar from "../../components/scrollbar/scrollbar";
import Footer from "../../components/footer/Footer";

import type { RootState } from "../../store";
import type { CartItem } from "../../store/slices/cartSlice";

const CheckoutPage: React.FC = () => {

  const cartList: CartItem[] = useSelector(
    (state: RootState) => state.cart.cart
  );

  return (
    <Fragment>
      <Navbar2 />

      <PageTitle pageTitle={"Checkout"} pagesub={"Checkout"} />

      <CheckoutSection cartList={cartList} />

      <Footer />

      <Scrollbar />
    </Fragment>
  );
};

export default CheckoutPage;
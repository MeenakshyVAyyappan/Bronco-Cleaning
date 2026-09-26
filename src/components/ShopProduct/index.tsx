import React from "react";
import { Link } from "react-router-dom";
import { scrollToTop } from "../ScrollToTop";

interface Product {
  id?: number;
  slug: string;
  title: string;
  proImg: string;
  price: string | number;
  oldPrice?: string | number;
  brand?: string;
  size?: string;
}

interface ShopProductProps {
  products: Product[];
  addToCartProduct: (product: Product) => void;
}

const ShopProduct: React.FC<ShopProductProps> = ({ products, addToCartProduct }) => {

  const ClickHandler = () => {
    scrollToTop();
  };

  return (
    <section className="shop-section section-padding">
      <div className="container">

        <div className="row">
          <div className="col col-xs-12">

            <div className="shop-grids clearfix">

              {products.slice(0, 12).map((product, index) => (

                <div className="grid fade_bottom" key={index}>

                  <div className="img-holder">
                    <Link onClick={ClickHandler} to={`/product-single/${product.slug}`}>
                      <img src={product.proImg} alt={product.title} />
                    </Link>
                  </div>

                  <div className="details">

                    <h3>
                      <Link
                        onClick={ClickHandler}
                        to={`/product-single/${product.slug}`}
                      >
                        {product.title}
                      </Link>
                    </h3>

                    {product.oldPrice && (
                      <del>${product.oldPrice}</del>
                    )}

                    <span>${product.price}</span>

                    <div className="add-to-cart">
                      <button
                        onClick={() => addToCartProduct(product)}
                      >
                        Add to cart
                      </button>
                    </div>

                  </div>

                </div>

              ))}

            </div>

            {/* Pagination */}
            <div className="pagination-wrapper pagination-wrapper-center">

              <ul className="pg-pagination">

                <li className="active">
                  <Link onClick={ClickHandler} to="/shop">1</Link>
                </li>

                <li>
                  <Link onClick={ClickHandler} to="/shop">2</Link>
                </li>

                <li>
                  <Link onClick={ClickHandler} to="/shop">3</Link>
                </li>

                <li>
                  <Link onClick={ClickHandler} to="/shop" aria-label="Next">
                    <i className="fi ti-arrow-right"></i>
                  </Link>
                </li>

              </ul>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ShopProduct;

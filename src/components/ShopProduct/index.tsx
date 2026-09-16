import React from "react";
import { Link } from "react-router-dom";

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
    window.scrollTo(10, 0);
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
                    <img src={product.proImg} alt={product.title} />
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

                <li>
                  <Link to="#" aria-label="Previous" className="d-none">
                    <i className="fi ti-angle-left"></i>
                  </Link>
                </li>

                <li className="active">
                  <Link to="#">1</Link>
                </li>

                <li>
                  <Link to="#">2</Link>
                </li>

                <li>
                  <Link to="#">3</Link>
                </li>

                <li>
                  <Link to="#" aria-label="Next">
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

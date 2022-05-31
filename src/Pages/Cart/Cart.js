import "./Cart.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import leftArrow from "./../../assets/leftArrow.svg";
import CartCard from './../../Components/CartCard/CartCard'
import EmptyCart from "./../../assets/empty-cart.webp"; 

function Cart() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  // Handel Add to Cart
  const handleAddToCart = (voucher) => {
    dispatch({
      type: "ADD_TO_CART",
      value: voucher,
    });
  };

  // Handel Remove to Cart
  const handleRemoveToCart = (id) => {
    dispatch({
      type: "REMOVE_TO_CART",
      value: { id: id },
    });
  };

  const FixURL = (url) =>
    url
      .replace(/[^a-zA-Z ]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

  return (
    <div className="cart">
      <div className="container-fluid sort-bar">
        <div className="sort-bar-left">
          <ul className="breadcrumb mb-0">
            <li>
              <Link to="/">
                {" "}
                <img className="mx-2 test" src={leftArrow}></img>Continue
                Shopping
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-fluid cart-wrapper">
        <div className="cart-wrapper-inner p-4">
          <div className="row">
            <div className="col-12 col-lg-7">
              {cartItems.length != 0 ? (
                <div>
                  <div className="cart-wrapper-content">
                    <div className="cart-wrapper-content">
                      <h1 className="mb-0">Shopping Cart</h1>
                      <p>You have {cartItems.length} items in your cart</p>
                    </div>

                    <div className="cart-product-wrapper my-4">
                      {cartItems.map((voucher) => (
                        <CartCard
                          key={voucher.id}
                          VoucherInfo={voucher}
                          handleAddToCart={handleAddToCart}
                          handleRemoveToCart={handleRemoveToCart}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="">
                  <img src={EmptyCart} alt="" className="img-fluid" />
                </div>
              )}
            </div>
            <div className="col-12 col-lg-5">
              <div className="cart-summary">
                <h3>Cart Summary</h3>
                <hr className="divider" />
                <div className="d-flex justify-content-between">
                  <p>No of SKU</p>
                  <p>
                    <strong>{cartItems.length}</strong>
                  </p>
                </div>
                <div className="d-flex justify-content-between">
                  <p>No of Products</p>
                  <p>
                    <strong>
                      {cartItems
                        .map((item) => item.quantity)
                        .reduce((prev, curr) => prev + curr, 0)}
                    </strong>
                  </p>
                </div>
                <hr className="divider" />
                <div className="d-flex justify-content-between">
                  <h6>Payable in INR</h6>
                  <h6>
                    <strong>
                      {Math.floor(
                        cartItems
                          .map((item) => item.quantity * item.price)
                          .reduce((prev, curr) => prev + curr, 0)
                      )}
                    </strong>
                  </h6>
                </div>
                <Link
                  to="/"
                  className="btn btn-lg btn-cta-cart btn-cta-cart-active mt-4 disable"
                >
                  Proceed to Checkout
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;

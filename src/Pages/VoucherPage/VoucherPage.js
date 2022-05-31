import "./VoucherPage.css";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

function VoucherPage() {
  const [Voucher, SetVoucher] = useState({});

  const voucherList = useSelector((state) => state.voucherList);
  console.log(voucherList);

  let param = useParams();
  const FixURL = (url) =>
    url
      .replace(/[^a-zA-Z ]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

  useEffect(() => {
    updateVoucher();
  }, []);

  // Update Voucher
  const updateVoucher = () => {
    SetVoucher(
      voucherList.find((voucher) => FixURL(voucher.title) === param.id)
    );
    // console.log(Voucher);
  };

  return (
    <div className="voucherpage">
      <div className="container-fluid sort-bar">
        <div className="sort-bar-left">
          <ul className="breadcrumb mb-0">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/">Products</Link>
            </li>
            <li>
              <Link to="/" className="text-capitalize">
                {Voucher.category}
              </Link>
            </li>
            <li>
              <Link to="#" className="active">
                {Voucher.title}
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="container-fluid voucher-wrapper">
        <div className="voucher-wrapper-inner">
          <div className="row">
            <div className="col-12 col-lg-7">
              <div className="voucher-wrapper-content">
                <h1 className="mb-0">{Voucher.title}</h1>
                <h4>Validity: 12 Months</h4>
                <div className="row voucher-wrapper-option mt-3">
                  <div className="col-5 voucher-wrapper-option-price">
                    <span className="voucher-wrapper-span my-2 d-block">
                      Select a denomination
                    </span>
                    <label htmlFor="voucher-wrapper-price1">INR</label>
                    <select
                      className="form-select form-select-lg voucher-wrapper-price"
                      id="voucher-price1"
                    >
                      <option defaultValue vlaue="a-z">
                        {Math.floor(Voucher.price)}
                      </option>
                      <option value="z-a">
                        {Math.floor(Voucher.price) * 2}
                      </option>
                      <option value="most-resent">
                        {Math.floor(Voucher.price) * 3}
                      </option>
                    </select>
                  </div>
                  <div className="col-5 voucher-wrapper-option-quantity">
                    <span className="voucher-wrapper-span my-2 d-block">
                      Select quantity
                    </span>
                    <label
                      htmlFor="voucher-wrapper-quantity1"
                      className="invisible pe-none"
                    >
                      Quantity
                    </label>
                    <input
                      className="form-control form-control-lg voucher-wrapper-quantity"
                      type="number"
                      id="voucher-quantity1"
                      min="1"
                      max="50"
                      defaultValue="1"
                    />
                  </div>
                  <div className="col-5">
                    <button
                      type="button"
                      className="btn btn-lg btn-cta-cart mt-4"
                    >
                      Buy Now
                    </button>
                  </div>
                  <div className="col-5">
                    <button
                      type="button"
                      className="btn btn-lg btn-cta-cart btn-cta-cart-active mt-4"
                    >
                      Add to cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-5">
              <div className="voucher-wrapper-image text-center position-relative">
                <img
                  className="img-fluid"
                  src={Voucher.image}
                  alt={Voucher.title}
                />
                <div className="voucher-wrapper-image-background">
                  <svg
                    width="494"
                    height="458"
                    viewBox="0 0 494 458"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M263.035 1.30128C109.867 14.9151 29.716 145.793 8.78639 209.53C-24.416 310.642 45.2844 389.603 71.8846 423.947C182.987 546.719 453.257 563.592 574.505 556.682C660.698 551.009 817.062 499.318 752.974 337.933C672.864 136.201 454.495 -15.7159 263.035 1.30128Z"
                      fill="#F3F7FD"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoucherPage;

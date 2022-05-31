import "./VoucherCard.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function VoucherCard(props) {

  const [Voucher, SetVoucher] = useState({
    id: props.VoucherInfo.id,
    title: props.VoucherInfo.title,
    price: props.VoucherInfo.price,
    description: props.VoucherInfo.description,
    category: props.VoucherInfo.category,
    image: props.VoucherInfo.image,
    country_id: props.VoucherInfo.country_id,
    quantity: 1,
  });

  const FixURL = (url) =>
    url
      .replace(/[^a-zA-Z ]/g, "")
      .replace(/\s+/g, "-")
      .toLowerCase();

  // Handel Input Change
  const handleChange = (e) => {
    if ((e.target.name == "quantity" || e.target.name == "price")) {
      SetVoucher({ ...Voucher, [e.target.name]: parseInt(e.target.value)});
    }
    else {
      SetVoucher({ ...Voucher, [e.target.name]: e.target.value });
    }
  };

  return (
    <div className="col-md-4 col-lg-4 col-xl-3 voucher-col">
      <div className="voucher-card">
        <div className="voucher-card-inner">
          <div className="voucher-card-image text-center">
            <Link
              to={`/voucher/${FixURL(props.VoucherInfo.title)}`}
              className="text-decoration-none"
            >
              <img
                className="img-fluid"
                src={props.VoucherInfo.image}
                alt="Hello"
              />
            </Link>
          </div>
          <div className="voucher-card-content">
            <Link
              to={`/voucher/${FixURL(props.VoucherInfo.title)}`}
              className="text-decoration-none"
            >
              <h2 title={props.VoucherInfo.title} className="voucher-title">
                {props.VoucherInfo.title}
              </h2>
            </Link>
            <div className="voucher-option mt-1">
              <div className="voucher-option-price">
                <label htmlFor="voucher-price1">INR</label>
                <select
                  className="form-select voucher-price"
                  id="voucher-price1"
                  name="price"
                  value={Voucher.price}
                  onChange={handleChange}
                >
                  <option
                    defaultValue
                    vlaue={Math.floor(props.VoucherInfo.price)}
                  >
                    {Math.floor(props.VoucherInfo.price)}
                  </option>
                  <option value={Math.floor(props.VoucherInfo.price) * 2}>
                    {Math.floor(props.VoucherInfo.price) * 2}
                  </option>
                  <option value={Math.floor(props.VoucherInfo.price) * 3}>
                    {Math.floor(props.VoucherInfo.price) * 3}
                  </option>
                </select>
              </div>
              <div className="voucher-option-quantity">
                <label
                  htmlFor="voucher-quantity1"
                  className="invisible pe-none"
                >
                  Quantity
                </label>
                <input
                  className="form-control voucher-quantity"
                  type="number"
                  name="quantity"
                  id="voucher-quantity1"
                  min="1"
                  max="50"
                  value={Voucher.quantity}
                  onChange={handleChange}
                />
              </div>
            </div>
            {!props.InCart ? (
              <button
                type="button"
                className="btn btn-sm btn-cta-cart mt-3"
                onClick={() =>
                  props.handleAddToCart({
                    id: Voucher.id,
                    title: Voucher.title,
                    image: Voucher.image,
                    price: Voucher.price,
                    quantity: Voucher.quantity,
                  })
                }
              >
                Add to cart
              </button>
            ) : (
              <button
                type="button"
                className="btn btn-sm btn-cta-cart mt-3"
                onClick={() => props.handleRemoveToCart(Voucher.id)}
              >
                Remove to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VoucherCard;

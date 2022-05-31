import "./Sort.css";
import { Link } from "react-router-dom";

function Sort(props) {
  return (
    <div className="container-fluid sort-bar">
      <div className="sort-bar-left">
        <ul className="breadcrumb">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/" className="active">
              Products
            </Link>
          </li>
        </ul>
        <p className="sort-result mb-0">
          Showing Results for <span>"All Products"</span> in India
        </p>
      </div>
      <div className="sort-bar-right">
        <label htmlFor="sort-select">Sort:</label>
        <select
          className="form-select"
          id="sort-select"
          onChange={(event) => props.Action(event)}
          value={props.Sort}
        >
          <option value="a-z">Name A to Z</option>
          <option value="z-a">Name Z to A</option>
          <option value="most-recent" defaultValue>
            Most Recent
          </option>
        </select>
      </div>
    </div>
  );
}

export default Sort;

import './Footer.css';
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <ul className="footer-nav mb-0">
        <li>
          <Link to="/">Terms of use</Link>
        </li>
        <li>
          <Link to="/">Privacy Policy</Link>
        </li>
        <li>
          <Link to="/">Security</Link>
        </li>
      </ul>
      <p className="copyright mb-0">© Copyright Ecommerce Cart App</p>
    </footer>
  );
}

export default Footer;

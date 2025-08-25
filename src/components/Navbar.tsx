import { Link } from "react-router-dom";
import logo from "../assets/images/logo_light.svg";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <nav className="container flex justify-between items-center py-[27px]">
      <ul className="flex gap-6 items-center">
        <img src={logo} alt="logo" />
        <li>
          <Link to="/">Why InvoiceWise?</Link>
        </li>
        <li>
          <Link to="/">Features</Link>
        </li>
        <li>
          <Link to="/">Companies</Link>
        </li>
      </ul>
      <div className="flex gap-4 items-center">
        <h1>Login</h1>
        <Button variant="secondary">Create Account</Button>
      </div>
    </nav>
  );
};

export default Navbar;

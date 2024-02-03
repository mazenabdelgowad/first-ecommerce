import NavbarLink from "./NavbarLink";
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg shadow-sm">
			<div className="container">
				<NavLink className="nav-brand" to="/">
					<img src={logo} alt="logo" />
				</NavLink>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<NavbarLink to="/" pageName="Home" />
						<NavbarLink to="/about" pageName="About" />
						<NavbarLink to="/contact" pageName="Contact" />
						<NavbarLink to="/signup" pageName="signUp" />
						<NavbarLink to="/signin" pageName="SignIn" />
						{false && <NavbarLink to="/signout" pageName="Sign Out" />}
						{/* Temporary disabled*/}
						<div className="cart-items-count d-flex 
							justify-content-center align-items-center"
						>
							<NavLink to="/cart" className="nav-link">
								{<FaShoppingCart />}
							</NavLink>
							<span className="fs-3 fw-bold">- 4</span>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

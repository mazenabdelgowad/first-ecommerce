import NavbarLink from "./NavbarLink";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { FaShoppingCart } from "react-icons/fa";
import "./Navbar.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { selectCount } from "../../services/CartCountSlice";
const Navbar = () => {
	const navigate = useNavigate();
	const signedUp = localStorage.getItem("IsSigned-up")
	const [showNavbar, setShowNavbar] = useState<boolean>(false);
	const cartCount = useSelector(selectCount)


	const signOut = () => {
		navigate("/signin")
		localStorage.clear()
	}


	useEffect(() => {
		const navbar = document.querySelector(".navbar-collapse")
		const toggleButton = document.querySelector(".navbar-toggler")

		const allLinks = document.querySelectorAll("a.nav-link")
		allLinks.forEach(link => link.addEventListener('click', () => {
			toggleButton?.classList.add("collapsed")
			navbar?.classList.remove("show")
			setShowNavbar(false)
		}))

	}, [showNavbar])


	return (
		<nav className="navbar navbar-expand-lg shadow-sm">
			<div className="container">
				<NavLink className="nav-brand" to="/">
					<img src={logo} alt="logo" />
				</NavLink>
				<button
					className="navbar-toggler"
					onClick={() => setShowNavbar(!showNavbar)}
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded={showNavbar}
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
						<NavbarLink to="/" pageName="Home" />
						<NavbarLink to="/about" pageName="About" />
						<NavbarLink to="/products" pageName="Shop" />
						<NavbarLink to="/contact" pageName="Contact" />
						{!signedUp ? <NavbarLink to="/signin" pageName="SignIn" /> : null}

						{signedUp && <button className="text-danger log-out" onClick={signOut}>Log out</button>}

						<div className="cart-items-count d-flex 
							justify-content-center align-items-center"
						>
							<NavLink to="/cart" className="nav-link">
								{<FaShoppingCart />}
							</NavLink>
							<span className="fs-3 fw-bold" style={{ color: "#000000A6" }}>- {cartCount}</span>
						</div>
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
import NavbarLink from './NavbarLink'
import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png"
import { FaShoppingCart } from "react-icons/fa";
import './Navbar.css'
const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-body-tertiary">
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
						<NavbarLink className='nav-link home' to="/" pageName='Home' />
						<NavbarLink className='nav-link' to="/" pageName='Shop' />
						<NavbarLink className='nav-link' to="/" pageName='Contact' />
						<NavbarLink className='btn btn-success' to="/" pageName='Login' />
						<NavbarLink className='nav-link' to="/" pageName='SignIn' />
						{false && (<NavbarLink className='btn btn-danger' to="/" pageName='Sign Out' />)} {/* Temporary disabled*/}
						<NavbarLink className='nav-link' to="/" pageName={<FaShoppingCart />} />
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

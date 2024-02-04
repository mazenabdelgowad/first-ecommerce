import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import appStore from "../../assets/images/pay/app.jpg";
import playStore from "../../assets/images/pay/play.jpg";
import payment from "../../assets/images/pay/pay.png";
import "./Footer.css"
import "aos/dist/aos.css"

const Footer = () => {



	return (
		<footer className="mb-5 text-sm-center" >
			<div className="container">
				<div className="row">
					<div className="contact col-lg-4" data-aos="fade-right">
						<NavLink to="/" className="logo">
							<img src={logo} alt="logo" />
						</NavLink>
						<h4 className="my-3">contact</h4>
						<ul>
							<li>
								<span className="fw-bold">address</span>: 562 wellington rood.
								street 32. san francisco
							</li>
							<li>
								<span className="fw-bold">phone</span>: +01 2222 365 01 23C 6789
							</li>
							<li>
								<span className="fw-bold">Hours</span>: 10 00 - 18 00. Mon - Sat
							</li>
						</ul>
						<div className="social-media-icons mt-2">
							<h4>follow us</h4>
						</div>
					</div>

					<div className="col-lg-2" data-aos="fade-up">
						<h2 className="mb-2">About</h2>
						<ul>
							<li>
								<NavLink to="/">about us</NavLink>
							</li>
							<li>
								<NavLink to="/">delivery information</NavLink>
							</li>
							<li>
								<NavLink to="/">privacy policy</NavLink>
							</li>
							<li>
								<NavLink to="/">terms &amp; conditions</NavLink>
							</li>
							<li>
								<NavLink to="/">contact us</NavLink>
							</li>
						</ul>
					</div>

					<div className="col-lg-2" data-aos="fade-down">
						<h2 className="mb-2">My Account</h2>
						<ul>
							<li>
								<NavLink to="#">sign in</NavLink>
							</li>
							<li>
								<NavLink to="#">view cart</NavLink>
							</li>
							<li>
								<NavLink to="#">my wishlist</NavLink>
							</li>
							<li>
								<NavLink to="#">track my order</NavLink>
							</li>
							<li>
								<NavLink to="#">help</NavLink>
							</li>
						</ul>
					</div>

					<div className="install-gateways col-lg-4" data-aos="fade-left">
						<h2>install app</h2>
						<p className="mt-2 text-black-50">from app store google Play</p>
						<div className="store-play mt-2">
							<NavLink to="#">
								<img src={appStore} alt="appstore" />
							</NavLink>
							<NavLink to="/">
								<img src={playStore} alt="playstore" />
							</NavLink>
						</div>
						<p className="mt-2 text-black-50">secured payment gateways</p>
						<div className="pay mt-2">
							<img src={payment} alt="payment" />
						</div>
					</div>

					<div className="developer mb-3" data-aos="fade-up">
						<p className="copyright text-black-50 text-center mt-4">
							©Copyright received {new Date().getFullYear()}
						</p>
						<p className="text-black-50 text-center">
							<span>developed by </span>
							<NavLink to="/" className="text-danger text-capitalize ">
								mazen abdelgowad
							</NavLink>
						</p>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

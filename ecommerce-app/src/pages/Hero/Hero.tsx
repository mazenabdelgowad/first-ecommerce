import { NavLink } from "react-router-dom";
import "./Hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
	useEffect(() => {
		AOS.init({
			duration: 3000,
		});
	}, []);
	return (
		<section className="hero d-flex flex-column align-items-center justify-content-center">
			<div className="container" data-aos="fade-up">
				<div className="details">
					<h4>Trade-in-offer</h4>
					<h2 className="fs-2 fw-bold">Super value deals</h2>
					<h1 className="hero-text fw-bold">On all products</h1>
					<p className="text-black-50 mt-2">
						Save more with coupons & up to 70% off!
					</p>
					<NavLink to="/shop" className="shop-link fw-bold mt-2 fs-6">
						shop now
					</NavLink>
				</div>
			</div>
		</section>
	);
};

export default Hero;

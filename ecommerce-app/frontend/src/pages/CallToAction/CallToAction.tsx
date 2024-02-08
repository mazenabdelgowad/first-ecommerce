import "./CallToAction.css"
import "aos/dist/aos.css";
const CallToAction = () => {
	return (
		<section className="call-to-action text-white text-center">
			<div className="call-to-action-text" data-aos="zoom-in-up">
				<h3 className="fw-bold text-capitalize" >repair services</h3>
				<h2 className="text-capitalize fw-bold my-3">
					up to <span className="text-danger text-lowercase">70% Off</span> — all t-shirts & accessories</h2>
				<button className="btn btn-success text-capitalize">explor more</button>
			</div>
		</section>
	);
};

export default CallToAction;

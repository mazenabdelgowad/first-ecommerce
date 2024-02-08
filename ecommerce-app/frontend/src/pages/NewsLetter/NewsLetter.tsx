import "./NewsLetter.css";
import "aos/dist/aos.css"
const NewsLetter = () => {
	const handleSubmit = (e: { preventDefault: () => void }) => {
		e.preventDefault();
	};

	return (
		<section
			className="news-letter
			d-flex justify-content-center align-items-center
		"
		>
			<div
				className="container
				d-flex justify-content-between align-items-end
			"
			>
				<div className="news-letter-message" data-aos="fade-right">
					<h3>Sign Up For Newsletters</h3>
					<p className="mt-2">Get E-mail updates about our latest shop and specails offers .</p>
				</div>
				<form action="" onSubmit={(e) => handleSubmit(e)} data-aos="fade-left" className="mt-sm-3">
					<input
						type="email"
						name="user-email"
						id="email"
						autoComplete="on"
						placeholder="Your Email Address"
					/>
					<input type="submit" value="Subscribe" />
				</form>
			</div>
		</section>
	);
};

export default NewsLetter;

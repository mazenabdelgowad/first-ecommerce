import person1 from "../../assets/images/people/1.png";
import person2 from "../../assets/images/people/2.png";
import person3 from "../../assets/images/people/3.png";
import "aos/dist/aos.css";
const ContactForm = () => {
	return (
		<section className="contact-page-form">
			<div className="container">
				<div className="row" data-aos="fade-up">
					<div className="col-lg-8" data-aos="fade-right">
						<h4 className="text-black-50 text-uppercase">leave a message</h4>
						<h1 className="fw-bold my-2">We love to hear from you</h1>
						<form className="d-flex flex-column justify-content-between align-items-start gap-2">
							<input
								type="text"
								name="username"
								placeholder="your name"
								id="username"
								autoComplete="off"
								required
								autoFocus={true}
								data-aos="fade-up"
							/>
							<input
								type="email"
								name="useremail"
								placeholder="your name"
								id="useremail"
								autoComplete="off"
								required
								data-aos="fade-up"
							/>
							<input
								type="text"
								name="usersubject"
								placeholder="subject"
								id="usersubject"
								autoComplete="off"
								required
								data-aos="fade-up"
							/>
							<textarea
								name="usermessage"
								id="usermessage"
								placeholder="your message"
								data-aos="fade-up"
							></textarea>
							<button
								type="button"
								className="btn btn-success"
								data-aos="fade-up"
							>
								submit
							</button>
						</form>
					</div>

					<div className="col-lg-4" data-aos="fade-left">
						<div
							className="person d-flex align-items-satrt gap-3"
							data-aos="fade-up"
						>
							<img src={person1} alt="john doe" />
							<div className="person-details">
								<h3 className="text-capitalize">john doe</h3>
								<p
									className="text-black-50
									mt-1 text-capitalize"
								>
									senior marketting manager
								</p>
								<p className="text-black-50 mt-1 text-capitalize">
									phone: + 000 123 77 88
								</p>
								<p className="text-black-50 mt-1">Email: contact@example.com</p>
							</div>
						</div>

						<div
							className="person d-flex align-items-satrt gap-3 mt-3"
							data-aos="fade-right"
						>
							<img src={person2} alt="william smith" />
							<div className="person-details">
								<h3 className="text-capitalize">william smith</h3>
								<p
									className="text-black-50
									mt-1 text-capitalize"
								>
									senior marketting manager
								</p>
								<p className="text-black-50 mt-1 text-capitalize">
									phone: + 000 123 77 88
								</p>
								<p className="text-black-50 mt-1">Email: contact@example.com</p>
							</div>
						</div>

						<div
							className="person d-flex align-items-satrt gap-3 mt-3"
							data-aos="fade-down"
						>
							<img src={person3} alt="emma stone" />
							<div className="person-details">
								<h3 className="text-capitalize">emma stone</h3>
								<p
									className="text-black-50
									mt-1 text-capitalize"
								>
									senior marketting manager
								</p>
								<p className="text-black-50 mt-1 text-capitalize">
									phone: + 000 123 77 88
								</p>
								<p className="text-black-50 mt-1">Email: contact@example.com</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactForm;

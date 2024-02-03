import about from "../../assets/images/about/a6.jpg";
import "aos/dist/aos.css"

const AboutUs = () => {
	return (
		<section className="about">
			<div className="container">
				<div className="row align-items-center" data-aos="fade-down">

					<div className="col-lg-6" data-aos="fade-right">
						<img src={about} alt="about us" className="img-fluid rounded" />
					</div>
					<div className="col-lg-6" data-aos="fade-left">
						<h1>who we are?</h1>
						<p className="text-black-50">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
							dolore voluptatem, eligendi sed animi quia quibusdam nostrum, nam
							cum perferendis laboriosam et dolor? Et maiores quod laudantium
							odit! Animi, eveniet. cum perferendis laboriosam et dolor? Et
							maiores quod laudantium odit! Animi, eveniet. cum perferendis
							laboriosam et dolor? Et maiores quod laudantium.
						</p>
						<p className="dashed- mt-2">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
							dolore voluptatem, eligendi
						</p>
						<p className="moving-text mt-2">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
							dolore voluptatem, eligendi
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default AboutUs;

import contactUs from "../../assets/images/blog/b6.jpg"
import "aos/dist/aos.css"
const GetInTouch = () => {
	return (
		<section className="contact">
      <div className="container">
        <div className="row" data-aos="fade-down">
          <div className="col-lg-6" data-aos="fade-up-right">
            <h6 className="fw-bold">get in touch</h6>
            <h3 className="fw-bold mt-2">
              Visit one of our agency locations <br />
              or contact us today
            </h3>
            <p className="my-2">head office</p>
            <ul>
              <li className="address">
                56 glassford street glasgow gl <span>it—jl</span> new york
              </li>
              <li>contact@example.com</li>
              <li>contact@example.com</li>
              <li>Monday to Saturday: 9:00 am to 16 pm</li>
            </ul>
          </div>
					<div className="col-lg-6" data-aos="fade-up-left">
						<img src={contactUs} alt="contact us" className="contact-img" />
					</div>
        </div>
      </div>
    </section>
	)
}

export default GetInTouch

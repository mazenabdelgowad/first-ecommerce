import ContactForm from "../../components/ContactForm/ContactForm"
import ContactHero from "../../components/ContactHero/ContactHero"
import GetInTouch from "../../components/GetInTouch/GetInTouch"
import NewsLetter from "../NewsLetter/NewsLetter"
import "./Contact.css"
const Contact = () => {
	return (
		<div className="contact">
			<ContactHero />
			<div className="container">
				<GetInTouch />
				<ContactForm />
			</div>
			<NewsLetter />
		</div>
	)
}

export default Contact

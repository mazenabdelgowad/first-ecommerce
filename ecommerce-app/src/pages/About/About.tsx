import AboutHero from "../../components/AboutHero/AboutHero"
import AboutUs from "../../components/AboutUs/AboutUs"
import DownloadOurApp from "../../components/DownloadOurApp/DownloadOurApp"

const About = () => {
	return (
		<div className="About">
			<AboutHero />
			<div className="container">
				<AboutUs />
				<DownloadOurApp />
			</div>
		</div>
	)
}

export default About

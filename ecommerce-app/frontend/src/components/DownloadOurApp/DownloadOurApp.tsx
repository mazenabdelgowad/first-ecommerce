import downloadOurAppVideo from "../../assets/images/about/1.mp4"
import "./DownloadOurApp.css"
import "aos/dist/aos.css"
const DownloadOurApp = () => {
	return (
		<section className="download-our-app text-center">
			<div className="container" data-aos="fade-up">
				<h1 className="mb-4 fw-bold" data-aos="fade-left">download our <span>app</span></h1>
				<video src={downloadOurAppVideo} autoPlay data-aos="fade-down"></video>
			</div>
		</section>
	)
}

export default DownloadOurApp

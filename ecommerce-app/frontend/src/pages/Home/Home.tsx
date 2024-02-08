import Hero from "../Hero/Hero"
import CallToAction from "../CallToAction/CallToAction"
import Features from "../Features/Features"
import NewsLetter from "../NewsLetter/NewsLetter"
import TopBannels from "../TopBannels/TopBannels"

const Home = () => {
	return (
		<main>
			<Hero />
			<div className="container">
				<Features />
			</div>
			<CallToAction />
			<div className="container">
				<TopBannels />
			</div>
			<NewsLetter />
		</main>
	)
}

export default Home

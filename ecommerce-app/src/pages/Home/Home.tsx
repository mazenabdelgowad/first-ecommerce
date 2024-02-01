import { Hero } from ".."
import CallToAction from "../CallToAction/CallToAction"
import FeaturedProducts from "../FeaturedProducts/FeaturedProducts"
import Features from "../Features/Features"
import NewsLetter from "../NewsLetter/NewsLetter"
import TopBannels from "../TopBannels/TopBannels"

const Home = () => {
	return (
		<main>
			<Hero />
			<div className="container">
				<Features />
				<FeaturedProducts />
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

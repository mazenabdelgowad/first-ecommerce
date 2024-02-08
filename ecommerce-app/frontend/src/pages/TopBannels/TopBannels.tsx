import BigBannel from "../../components/BigBannel/BigBannel";
import SmallBannels from "../../components/SmallBannels/SmallBannels";
import "./TopBannels.css";
const TopBannels = () => {
	return (
		<section className="top-bannels">
			<div className="top-bannels-first-row">
				<BigBannel
					className="crazy-deals"
					text="buy 1 get 1 free"
					title="crazy deals"
					description="the best calssic dress is on sale at cara"
					dataAos="fade-right"
				/>
				<BigBannel
					className="spring-summer"
					text="buy 1 get 1 free"
					title="spring/summer"
					description="the best calssic dress is on sale at cara"
					dataAos="fade-left"
				/>
			</div>
			<div className="bottom-bannels mt-3">
				<SmallBannels className="seasonal-sale" description="winter collection 50% off" title="seasonal sale" dataAos="fade-right" />
				<SmallBannels className="new-footware-collection" description="spring/summer 2022" title="new footware collection" dataAos="fade-down" />
				<SmallBannels className="t-shirts align-items-start px-3" description="new trendy prinl" title="t-shirt" dataAos="fade-left" />
			</div>
		</section>
	);
};

export default TopBannels;

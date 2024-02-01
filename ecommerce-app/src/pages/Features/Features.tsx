import "./Features.css";
import Feature from "../../components/Feature/Feature";
import freeShipping from "../../assets/images/features/f1.png";
import onlineOrder from "../../assets/images/features/f2.png";
import saveMoney from "../../assets/images/features/f3.png";
import promotions from "../../assets/images/features/f4.png";
import happySell from "../../assets/images/features/f5.png";
import f24hSupport from "../../assets/images/features/f6.png";
import "aos/dist/aos.css";
const Features = () => {

	return (
		<section className="features" data-aos="fade-up">
			<Feature url={freeShipping} text="free shipping" />
			<Feature url={onlineOrder} text="online order" />
			<Feature url={saveMoney} text="save money" />
			<Feature url={promotions} text="promotions" />
			<Feature url={happySell} text="happy sell" />
			<Feature url={f24hSupport} text="f24/7 support" />
		</section>
	);
};

export default Features;

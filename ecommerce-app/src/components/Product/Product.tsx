import { FaShoppingCart } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { NavLink, /*useParams*/ } from "react-router-dom";
import "aos/dist/aos.css";


type productPropes = {
	url: string;
	altText: string;
	brandName: string;
	rateOfProduct: number;
	price: number;
	productTitle: string;
	dataAos: string;
}

const Product = ({ url, altText, brandName, rateOfProduct, price, productTitle, dataAos }: productPropes) => {
	// const id: number = useParams();


	const numberOfStars = (): JSX.Element[] => {
		const stars: JSX.Element[] = [];
		for (let i = 0; i < rateOfProduct; i++) {
			stars.push(<FaStar key={i} color="yellow" />);
		}
		return stars;
	};

	return (
		<NavLink className="product rounded-4 bg-white shadow-lg p-3" to={`/`} data-aos={dataAos}>
			<img src={url} alt={altText} className="img-fluid rounded-4" />
			<h5 className="brand-name fw-bold text-black-50 text-capitalize mt-2">{brandName}</h5>
			<h5 className="product-title text-dark text-capitalize my-3">{productTitle}</h5>
			<div className="rate d-flex gap-1 my-3">
				{numberOfStars()}
			</div>
			<div className="add-to-cart-price d-flex justify-content-between align-items-center text-dark">
				<p className="price ">{price}</p>
				<FaShoppingCart /> {/*on click check the login and then add to cart*/}
			</div>
		</NavLink>
	)
}

export default Product

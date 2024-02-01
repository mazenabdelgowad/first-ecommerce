import MainTitle from "../../components/MainTitle/MainTitle";
import Product from "../../components/Product/Product";
import "./FeaturedProducts.css";
import product1 from "../../assets/images/products/f1.jpg";
import product2 from "../../assets/images/products/f2.jpg";
import product3 from "../../assets/images/products/f3.jpg";
import product4 from "../../assets/images/products/f4.jpg";
import product5 from "../../assets/images/products/f5.jpg";
import product6 from "../../assets/images/products/f6.jpg";
import product7 from "../../assets/images/products/f7.jpg";
import product8 from "../../assets/images/products/f8.jpg";
import "aos/dist/aos.css";
const FeaturedProducts = () => {


	return (
		<section className="featuredProducts">
			<MainTitle
				title="featured products"
				description="Summer Collection New Morden Design"
			/>
			<div className="container">
				<div className="products-container" data-aos="fade-up">
					<Product
						url={product1}
						altText="product1"
						brandName="cr7"
						price={290}
						rateOfProduct={5}
						productTitle="cartoon astronaut t-shirts"
						dataAos="fade-right"
					/>

					<Product
						url={product2}
						altText="product2"
						brandName="cr7"
						price={78}
						rateOfProduct={4}
						productTitle="cartoon astronaut t-shirts"
						dataAos="fade-up"
					/>

					<Product
						url={product3}
						altText="product3"
						brandName="cr7"
						price={80}
						rateOfProduct={4.5}
						productTitle="cartoon astronaut t-shirts"
						dataAos="fade-down"
					/>

					<Product
						url={product4}
						altText="product4"
						brandName="cr7"
						price={60}
						rateOfProduct={3}
						productTitle="cartoon astronaut t-shirts"
						dataAos="fade-left"
					/>

					<Product
						url={product5}
						altText="product5"
						brandName="cr7"
						price={60}
						rateOfProduct={4}
						productTitle="cartoon astronaut t-shirts"
						dataAos="fade-right"
					/>

					<Product
						url={product6}
						altText="product6"
						brandName="cr7"
						price={69}
						rateOfProduct={3}
						productTitle="cartoon astronaut t-shirts"
						dataAos="fade-up"
					/>

					<Product
						url={product7}
						altText="product7"
						brandName="cr7"
						price={50}
						rateOfProduct={3.5}
						productTitle="cartoon astronaut t-shirts"
						dataAos="fade-down"
					/>

					<Product
						url={product8}
						altText="product8"
						brandName="cr7"
						price={70}
						rateOfProduct={2}
						productTitle="cartoon astronaut t-shirts"
						dataAos="fade-left"
					/>
				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;

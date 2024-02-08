import MainTitle from "../../components/MainTitle/MainTitle";
import Product from "../../components/Product/Product";
import "./FeaturedProducts.css";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";

interface product {
	_id: string;
	productName: string;
	description: string;
	brandName: string;
	price: number;
	avatar: string;
	// quantity: number,
}

const FeaturedProducts = () => {
	const [products, setProdcuts] = useState<product[]>();

	useEffect(() => {
		const getProducts = async () => {
			const data = await fetch("http://localhost:5000/api/products");
			const prodcutsJson = await data.json();
			console.log(prodcutsJson.data.products);
			setProdcuts(prodcutsJson.data.products);
		};
		getProducts();
	}, []);

	if (!products)
		return (
			<div className="container text-center">
				<h2>Loading...</h2>
			</div>
		)

	return (
		<section className="featuredProducts">
			<MainTitle
				title="featured products"
				description="Summer Collection New Morden Design"
			/>
			<div className="container">
				<div className="products-container" data-aos="fade-up">
					{products?.map(
						({
							_id: id,
							productName,
							brandName,
							price,
							description,
							avatar,
						}: product) => (
							<Product
								key={id}
								productIdApi={id}
								url={avatar}
								brandName={brandName}
								productTitle={description}
								price={price}
								altText={productName}
								rateOfProduct={5}
								dataAos="fade-right"
							/>
						)
					)}
				</div>
			</div>
		</section>
	);
};

export default FeaturedProducts;

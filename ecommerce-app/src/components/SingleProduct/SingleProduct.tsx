import { useRef, useState } from "react";
import mainProduct from "../../assets/images/products/f1.jpg";
import "./SingleProduct.css";
import { FaInfoCircle } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { incrementCartCountByAmount, selectCount } from "../../services/CartCountSlice";
import "aos/dist/aos.css"
import { useNavigate } from "react-router-dom";
const SingleProduct = () => {
	const prductCountRef = useRef<HTMLInputElement | null>(null);
	const [minValue /*, setMinValue*/] = useState<number>(1);
	const [maxValue /*, setMaxValue*/] = useState<number>(20);
	const [inputValue, setInputValue] = useState<number>(1);
	const [validCount, setValidCount] = useState<boolean>(true);
	const dispatch = useDispatch();
	const handleProductCount = (value: number) => {
		if (value > maxValue) {
			setValidCount(false);
			setInputValue(maxValue); // Limit the value to maxValue
		} else if (value < minValue) {
			setValidCount(false);
			setInputValue(minValue); // Limit the value to minValue
		} else {
			setValidCount(true);
			setInputValue(value);
		}
	};
	const navigate = useNavigate()
	const cartCountValue = useSelector(selectCount);
	const handleAddElementsCountToCart = () => {
		if (localStorage.getItem("IsSigned-up")) {

			if (cartCountValue < maxValue) {
				dispatch(incrementCartCountByAmount(inputValue))
				return;
			}
			else
				setValidCount(false);
		} else
			navigate("/signup")
	}

	return (
		<section className="single-product">
			<div className="container">
				<div className="row" data-aos="fade-up">
					<div className="col-lg-6" data-aos="fade-right">
						<img
							className="main-product"
							src={mainProduct}
							alt="main product"
						/>
					</div>
					<div className="col-lg-6" data-aos="fade-left">
						<h6 className="title fw-bold">Home/T-Shirt</h6>
						<h4 className="my-4">Men's Fashoin T-Shirt</h4>
						<p className="price fw-bold fs-3">$139.00</p>
						<form action="" className="my-3 d-flex flex-column gap-2">
							<label htmlFor="size">
								<select name="clothes-size" id="size">
									<option value="sm">sm</option>
									<option value="md">md</option>
									<option value="lg">lg</option>
									<option value="xl">xl</option>
								</select>
							</label>
							<div className="add-to-cart d-flex align-items-baseline gap-2 ">
								<input
									type="number"
									name="quantity"
									ref={prductCountRef}
									id="prodcut-quantity"
									min={minValue}
									max={maxValue}
									value={inputValue}
									onChange={(e) => handleProductCount(parseInt(e.target.value))}
								/>
								<button type="button" className="btn btn-success"
									onClick={handleAddElementsCountToCart}
								>
									Add To Cart
								</button>
							</div>
							<p
								className={
									validCount === false ? "instructions" : "offscreen"
								}
							>
								<span className="me-2">
									<FaInfoCircle />
								</span>
								you can add <strong className="fs-4 mx-1">{minValue}</strong> to
								<strong className="fs-4 mx-1">{maxValue}</strong> products only
							</p>
						</form>
						<h3 className="mb-3">prodcut details</h3>
						<p className="text-black-50">
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
							quis quia incidunt! Provident laborum aperiam nam, reprehenderit
							minima corrupti perferendis aut rem voluptas quam deserunt magni!
							Debitis a quis quos. quis quia incidunt! Provident laborum aperiam
							nam, reprehenderit minima corrupti perferendis aut rem voluptas
							quam deserunt magni! Debitis a quis quos. quis quia incidunt!
							Provident laborum aperiam nam, reprehenderit minima corrupti
							perferendis aut rem voluptas quam deserunt magni! Debitis a quis
							quos.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
};

export default SingleProduct;

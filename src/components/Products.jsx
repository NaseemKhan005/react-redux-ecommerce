import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { MdOutlineShoppingCart } from "react-icons/md";
import { TiStarFullOutline } from "react-icons/ti";

import { add } from "../store/cartSlice";

const Products = () => {
	const [products, setProducts] = useState([]);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchProducts = async () => {
			const res = await fetch("https://fakestoreapi.com/products");
			const data = await res.json();

			setProducts(data);
		};

		fetchProducts();
	}, []);

	const handleAdd = (product) => {
		dispatch(add(product));
	};

	return (
		<div className="my-10">
			<h2 className="font-medium">Products:</h2>
			<div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 mt-5">
				{products.map((product) => {
					const rate = Math.round(product.rating.rate);

					return (
						<div
							key={product.id}
							className="bg-[#00000005] shadow-lg rounded-xl p-3 w-full"
						>
							<img
								src={product.image}
								alt={product.title}
								className="w-full sm:aspect-square sm:object-cover object-top rounded-lg mix-blend-multiply"
							/>
							<h3 className="mt-5 font-medium">
								{product.title.slice(0, 25)}
								{product.title.length > 25 && "..."}
							</h3>

							<p className="mt-2 flex items-center">
								{Array.from({ length: rate }, (_, index) => (
									<span key={index} className="text-xl text-primary">
										<TiStarFullOutline />
									</span>
								))}{" "}
								<span className="text-xs font-medium mt-1 ml-1">
									({product.rating.count})
								</span>
							</p>

							<p className="mt-1 font-medium">${product.price}</p>
							<button
								onClick={() => handleAdd(product)}
								className="text-sm bg-primary text-white w-full p-3 rounded-md mt-4 capitalize cursor-pointer hover:bg-secondary flex items-center justify-center gap-1"
							>
								<MdOutlineShoppingCart className="text-base" />
								<span className="font-medium">add to cart</span>
							</button>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Products;

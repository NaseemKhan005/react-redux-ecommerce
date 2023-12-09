import { BsArrowRightShort } from "react-icons/bs";
import { useState } from "react";
import { FiMinus, FiPlus, FiTrash2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const Cart = () => {
	const [showArrow, setShowArrow] = useState(false);

	return (
		<div className="container mx-auto px-5 md:px-10 pb-16 pt-10">
			<div>
				<h2 className="text-center text-3xl md:text-4xl font-medium uppercase">
					Your Cart
				</h2>

				<div className="flex md:items-center justify-between flex-col md:flex-row gap-3 md:gap-0 my-10">
					<Link
						to="/"
						className="border-[1.5px] bg-neutral-50 hover:border-black order-2 md:order-1 py-3 px-5 rounded-md capitalize text-sm"
					>
						continue shopping
					</Link>
					<div className="flex items-center gap-4 sm:text-base text-sm order-1 md:order-2">
						<p className="underline">Shopping Bag(2)</p>
						<p className="underline">Your Wishlist(0)</p>
					</div>
					<button className="order-3 bg-gray-950 hover:bg-gray-800 text-white py-3.5 px-7 rounded-md capitalize text-sm">
						checkout now
					</button>
				</div>

				<div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10 sm:gap-16 lg:gap-5 relative mt-20">
					<div className="flex-1 w-full flex flex-col gap-10">
						<div className="flex flex-col sm:flex-row gap-5 border-b pb-5 justify-between">
							<img
								src="https://images.unsplash.com/photo-1601762603339-fd61e28b698a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGZhc2hpb258ZW58MHx8MHx8fDA%3D"
								alt="product"
								className="w-full max-w-[20rem] sm:max-w-[9rem] aspect-square object-cover object-top rounded-lg"
							/>
							<div className="flex flex-col justify-between flex-1">
								<div className="flex flex-col gap-3">
									<h3 className="text-lg font-medium">Fancy dress</h3>
									<p className="text-sm text-gray-500">
										Your perfect pack for everyday use and walks in the fores.
									</p>
								</div>
								<p className="text-gray-700">women</p>
							</div>

							<div className="flex sm:flex-col justify-between sm:items-end">
								<div className="w-fit h-fit rounded flex items-center gap-5 border">
									<button className="text-xl hover:bg-red-500/20 border-r rounded-l p-2">
										<FiMinus />
									</button>
									<p className="text-xl font-medium">1</p>
									<button className="text-xl hover:bg-green-500/20 border-l rounded-r p-2">
										<FiPlus />
									</button>
								</div>
								<div className="flex items-center gap-2">
									<h3 className="text-2xl font-medium">$90</h3>
									<button className="text-xl text-red-500 p-2 rounded-full hover:bg-red-500/10">
										<FiTrash2 />
									</button>
								</div>
							</div>
						</div>
					</div>

					<div className="lg:w-96 bg-gray-50 p-5 sm:p-8 sticky top-5 rounded-lg">
						<h2 className="capitalize text-lg font-medium">order summary</h2>

						<div className="flex flex-col gap-2 my-5">
							<p className="border-b border-black/30 text-sm sm:text-base py-3 flex items-center justify-between gap-2">
								<span className="text-zinc-700">Subtotal</span>
								<span className="font-medium">$80</span>
							</p>
							<p className="border-b border-black/30 text-sm sm:text-base py-3 flex items-center justify-between gap-2">
								<span className="text-zinc-700">Shipping estimate</span>
								<span className="font-medium">$6.79</span>
							</p>
							<p className="border-b border-black/30 text-sm sm:text-base py-3 flex items-center justify-between gap-2">
								<span className="text-zinc-700">Shipping discount</span>
								<span className="font-medium">- $5.90</span>
							</p>
						</div>

						<h3 className="flex items-center gap-2 justify-between capitalize sm:text-lg font-medium">
							<span>total</span>
							<span>$90</span>
						</h3>

						<button
							type="submit"
							onMouseEnter={() => setShowArrow(true)}
							onMouseLeave={() => setShowArrow(false)}
							className="w-full flex items-center justify-center text-white bg-primary hover:bg-secondary focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg capitalize text-sm px-5 py-2.5 sm:py-3 text-center transition-all duration-500 mt-5"
						>
							<span
								className={`${
									showArrow
										? "w-32 transition-all duration-500"
										: "w-full transition-all duration-500 ml-4"
								}`}
							>
								checkout now
							</span>
							<span
								className={`
											ml-auto text-2xl text-white transition-all duration-500
											${showArrow ? "scale-100 translate-x-0" : "scale-0 -translate-x-5"}
										`}
							>
								<BsArrowRightShort />
							</span>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;

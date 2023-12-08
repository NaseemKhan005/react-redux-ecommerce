import { Link, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";

import { navLinks } from "../constants/Navbar";

const Navbar = () => {
	const pathname = useLocation().pathname;

	return (
		<div className="border-b mb-5">
			<div className="flex items-center justify-between container py-3 md:py-4 px-5 md:px-10 mx-auto">
				<Link to="/" className="text-lg md:text-xl font-medium">
					Redux Store
				</Link>
				<nav className="flex items-center gap-10">
					<ul className="flex items-center gap-2">
						{navLinks.map((link) => (
							<li key={link.link}>
								<Link
									to={link.link}
									className={`capitalize hover:text-primary font-medium text-[1.05rem] relative before:absolute md:before:bottom-1 before:bottom-2 px-2 pb-7 before:left-1/2 before:-translate-x-1/2 before:bg-primary before:scale-0 hover:before:scale-100 before:transition-all before:duration-500 before:w-full before:h-1 before:rounded-full ${
										link.link === pathname &&
										"text-primary before:bg-primary before:scale-100"
									}`}
								>
									{link.label}
								</Link>
							</li>
						))}
					</ul>
					<Link
						to="/cart"
						className="relative flex items-center gap-1 text-[1.4rem] hover:bg-secondary/10 p-2 rounded-full cursor-pointer"
					>
						<span className="absolute -top-1 -right-0.5 bg-secondary text-white w-[1.3rem] aspect-square text-xs font-medium flex items-center justify-center rounded-full">
							5
						</span>
						<span className="text-base sm:block hidden">Cart Items</span>
						<MdOutlineShoppingCart />
					</Link>
				</nav>
			</div>
		</div>
	);
};

export default Navbar;

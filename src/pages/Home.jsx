import Products from "../components/Products";

const Home = () => {
	return (
		<div className="container px-5 md:px-10 mx-auto">
			<h2 className="text-xl font-medium">Welcome to Redux Store</h2>

			<Products />
		</div>
	);
};

export default Home;

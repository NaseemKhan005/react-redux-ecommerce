import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";

const App = () => {
	return (
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/cart" element={<Cart />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</Router>
	);
};

export default App;

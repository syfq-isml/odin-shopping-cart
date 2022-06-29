import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { useState } from "react";

import "./styles/normalize.css";
import "./styles/styles.css";

import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductCategories from "./pages/ProductCategories";
import ProductInfo from "./pages/ProductInfo";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";

function App() {
	const [cart, setCart] = useState(["hello"]);

	return (
		<Router>
			<Routes>
				<Route path="/" element={<SharedLayout qty={cart.length} />}>
					<Route index element={<Home />} />

					<Route path="products" element={<Products />}>
						<Route index element={<Navigate to="all" replace />} />
						<Route path=":category" element={<ProductCategories />}>
							<Route path=":productInfo" element={<ProductInfo />} />
						</Route>
					</Route>

					<Route path="cart" element={<Cart />} />

					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;

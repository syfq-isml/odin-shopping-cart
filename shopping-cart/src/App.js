import {
	BrowserRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { useState } from "react";

import "./styles/normalize.css";
import "./styles/styles.css";

import dataProducts from "./data/dataProducts";

import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import AddCatBar from "./components/AddCatBar";
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

					<Route path="products">
						<Route index element={<Navigate to="all" replace={true} />} />
						<Route
							path=":category"
							element={<ProductCategories products={dataProducts} />}
						/>
						<Route path="view">
							<Route
								index
								element={<Navigate to="/products/all" replace={true} />}
							/>
							<Route
								path=":productId"
								element={<ProductInfo products={dataProducts} />}
							/>
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

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
import CartSubmit from "./pages/CartSubmit";

function App() {
	const [cart, setCart] = useState([]);

	const addToCart = (obj) => {
		setCart([...cart, obj]);
	};

	const removeFromCart = (e) => {
		// confirm("Are you sure you want to delete this item from your cart?");
		const id = e.target.dataset.id;
		setCart((prevState) => {
			const copy = [...prevState];
			let index = copy.findIndex((item) => item.item.id === id);
			copy.splice(index, 1);
			return copy;
		});
	};

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
								element={
									<ProductInfo products={dataProducts} addToCart={addToCart} />
								}
							/>
						</Route>
					</Route>

					<Route path="cart">
						<Route
							index
							element={<Cart cart={cart} removeFromCart={removeFromCart} />}
						/>
						<Route path="success" element={<CartSubmit />} />
					</Route>

					<Route path="*" element={<ErrorPage />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;

// if already exists, add on to qty instead
// confirmation before deleting

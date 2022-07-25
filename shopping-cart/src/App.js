import {
	HashRouter as Router,
	Routes,
	Route,
	Navigate,
} from "react-router-dom";
import { useState } from "react";

import "./styles/normalize.css";
import "./styles/styles.css";

import uniqid from "uniqid";

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

	const resetCart = () => setCart([]);

	const addToCart = (obj) => {
		// check if cart contains obj first
		// if yes, change qty only
		// if no, add the entire obj
		let index = cart.findIndex((item) => item.item.id === obj.item.id);
		if (index === -1) {
			// does not contain
			setCart([...cart, obj]);
			return;
		}

		changeQty(obj.qty, obj.item.id);
	};

	const removeFromCart = (id) => {
		// confirm("Are you sure you want to delete this item from your cart?");

		setCart((prevState) => {
			const copy = [...prevState];
			let index = copy.findIndex((item) => item.item.id === id);
			console.log(index);
			copy.splice(index, 1);
			return copy;
		});
	};

	const changeQty = (value, id) => {
		setCart((prevState) => {
			const copy = [...prevState];
			let index = copy.findIndex((item) => item.item.id === id);
			copy[index].qty = value;
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
									<ProductInfo
										products={dataProducts}
										cart={cart}
										addToCart={addToCart}
									/>
								}
							/>
						</Route>
					</Route>

					<Route path="cart">
						<Route
							index
							element={
								<Cart
									cart={cart}
									removeFromCart={removeFromCart}
									changeQty={changeQty}
								/>
							}
						/>
						<Route
							path="success"
							element={<CartSubmit cartOriginal={cart} resetCart={resetCart} />}
						/>
					</Route>

					<Route path="error404" element={<ErrorPage />} />

					<Route path="*" element={<Navigate to="/error404" replace />} />
				</Route>
			</Routes>
		</Router>
	);
}

export default App;

// if already exists, add on to qty instead
// confirmation before deleting

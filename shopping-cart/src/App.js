import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import SharedLayout from "./pages/SharedLayout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductCategories from "./pages/ProductCategories";
import ProductInfo from "./pages/ProductInfo";
import Cart from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<SharedLayout />}>
					<Route index element={<Home />} />

					<Route path="products" element={<Products />}>
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

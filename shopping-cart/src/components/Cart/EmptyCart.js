import { Link } from "react-router-dom";
import shoppingCart from "../../assets/shoppingcart.svg";

function EmptyCart() {
	return (
		<div id="cart__empty" className="fl-col-cont fl-centered global__padding">
			<img src={shoppingCart}></img>
			<h1>Your cart is empty...</h1>
			<p>Take your time, we'll wait! ;-)</p>
			<Link to="/products/all">
				<button id="" className="promo__browseBtn">
					Browse Products
				</button>
			</Link>
		</div>
	);
}

export default EmptyCart;

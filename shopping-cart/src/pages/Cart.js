import EmptyCart from "../components/Cart/EmptyCart";
import FilledCart from "../components/Cart/FilledCart";

function Cart({ cart, removeFromCart }) {
	return (
		<div>
			{cart.length === 0 ? (
				<EmptyCart />
			) : (
				<FilledCart cart={cart} removeFromCart={removeFromCart} />
			)}
		</div>
	);
}

export default Cart;

import EmptyCart from "../components/Cart/EmptyCart";
import FilledCart from "../components/Cart/FilledCart";

function Cart({ cart }) {
	return (
		<div>{cart.length === 0 ? <EmptyCart /> : <FilledCart cart={cart} />}</div>
	);
}

export default Cart;

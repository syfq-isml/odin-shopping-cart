import EmptyCart from "../components/Cart/EmptyCart";
import FilledCart from "../components/Cart/FilledCart";

function Cart() {
	let cart = [1];
	return <div>{cart.length === 0 ? <EmptyCart /> : <FilledCart />}</div>;
}

export default Cart;

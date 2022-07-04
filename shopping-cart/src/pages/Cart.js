import EmptyCart from "../components/Cart/EmptyCart";
import FilledCart from "../components/Cart/FilledCart";

function Cart({ cart, removeFromCart, changeQty }) {
	return (
		<div>
			{cart.length === 0 ? (
				<EmptyCart />
			) : (
				<FilledCart
					cart={cart}
					removeFromCart={removeFromCart}
					changeQty={changeQty}
				/>
			)}
		</div>
	);
}

export default Cart;

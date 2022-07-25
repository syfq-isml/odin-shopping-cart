import QtySelectBar from "../QtySelectBar";
import deleteSvg from "../../assets/delete.svg";

import { Link, useNavigate } from "react-router-dom";

import uniqid from "uniqid";
import { useState } from "react";
import DeleteConfirmation from "./DeleteConfirmation";

function FilledCart({ cart, removeFromCart, changeQty }) {
	// const [isOpened, setIsOpened] = useState(false);

	const calculateSubtotal = (price, qty) => {
		return price * qty;
	};

	const calculateOrderTotal = () => {
		const subtotals = cart.map((item) => {
			return item.item.price * item.qty;
		});

		return subtotals.reduce((total, current) => total + current, 0);
	};

	return (
		<div className="fl-col-cont global__padding cart__filledCart">
			<div>
				{cart.map((item, index) => {
					return (
						<div
							key={uniqid()}
							className="fl-row-cont cart__productView"
							data-testid="cart-product-view"
						>
							<div id="cart_productView-left" className="fl-row-cont">
								<div>
									<div className="cart__img-small">Image</div>
								</div>
								<div id="cart__details" className="fl-col-cont">
									<div>
										<h2 className="serif">{item.item.name}</h2>
										<p>{item.item.desc}</p>
										<p>
											<em>Product ID: {item.item.id}</em>
										</p>
									</div>
									<div>
										<h2 className="serif">${item.item.price}</h2>
										<QtySelectBar
											qty={item.qty}
											changeHandler={changeQty}
											renderedBy="FilledCart"
											productId={item.item.id}
										/>
									</div>
								</div>
							</div>
							<div id="cart_productView-right" className="fl-col-cont">
								<button
									id="cart__deleteBtn"
									className="fl-align-end btn-transparent"
									onClick={() => removeFromCart(item.item.id)}
									// onClick={() => setIsOpened(true)}
									title="Remove item from cart"
								>
									<img src={deleteSvg}></img>
								</button>
								<div>
									<h2 className="serif">Subtotal:</h2>
									<h2 className="serif">
										${calculateSubtotal(item.item.price, item.qty)}
									</h2>
								</div>
							</div>
							{/* <DeleteConfirmation
								isOpened={isOpened}
								onClose={() => setIsOpened(false)}
							/> */}
						</div>
					);
				})}
			</div>

			<div className="fl-col-cont cart__bottom">
				<div id="cart__orderTotal" className="fl-row-cont ">
					<h1>Order Total:</h1>
					<h1 className="serif fl-align-end">${calculateOrderTotal()}</h1>
				</div>
				<div className="fl-align-end">
					<Link to="success">
						<button id="checkout-btn" className="promo__browseBtn">
							Checkout
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}

export default FilledCart;

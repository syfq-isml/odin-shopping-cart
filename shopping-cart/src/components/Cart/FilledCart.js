import QtySelectBar from "../QtySelectBar";
import deleteSvg from "../../assets/delete.svg";

import uniqid from "uniqid";

let cart = [
	{
		id: 14282,
		category: "bedroom",
		desc: "Bed, 200cm x 150cm",
		price: 300.0,
		name: "BURNSK",
		image: "",
	},
	{
		id: 13244,
		category: "bedroom",
		desc: "Nightlight, 40cm x 15cm",
		price: 50.0,
		name: "LAMPENTE",
		image: "",
	},
];

function FilledCart() {
	return (
		<div className="fl-col-cont global__padding cart__filledCart">
			<div>
				{cart.map((item) => {
					return (
						<div key={uniqid()} className="fl-row-cont cart__productView">
							<div id="cart_productView-left" className="fl-row-cont">
								<div>
									<div className="cart__img-small">Image</div>
								</div>
								<div id="cart__details" className="fl-col-cont">
									<div>
										<h2 className="serif">{item.name}</h2>
										<p>{item.desc}</p>
										<p>
											<em>Product ID: {item.id}</em>
										</p>
									</div>
									<div>
										<h2 className="serif">${item.price}</h2>
										<QtySelectBar />
									</div>
								</div>
							</div>
							<div id="cart_productView-left" className="fl-col-cont">
								<button
									id="cart__deleteBtn"
									className="fl-align-end btn-transparent"
								>
									<img src={deleteSvg}></img>
								</button>
								<div>
									<h2 className="serif">Subtotal:</h2>
									<h2 className="serif">$Subtotal</h2>
								</div>
							</div>
						</div>
					);
				})}
			</div>

			<div className="fl-col-cont cart__bottom">
				<div id="cart__orderTotal" className="fl-row-cont ">
					<h1>Order Total:</h1>
					<h1 className="serif fl-align-end">$20</h1>
				</div>
				<button id="checkout-btn" className="promo__browseBtn fl-align-end">
					Checkout
				</button>
			</div>
		</div>
	);
}

export default FilledCart;

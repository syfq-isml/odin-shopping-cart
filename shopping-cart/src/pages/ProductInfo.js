import { useEffect, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import QtySelectBar from "../components/QtySelectBar";

const translateCategory = (str) => {
	if (str === "bedroom") return "Bedroom";
	if (str === "kitchen") return "Kitchen";
	if (str === "livingroom") return "Living Room";
};

function ProductInfo({ products, addToCart, cart }) {
	const { productId } = useParams();
	const navigate = useNavigate();

	const product = products.find((product) => product.id === +productId);

	const [state, setState] = useState({
		qty: "",
		item: product,
	});

	const [status, setStatus] = useState({
		containsItem: "",
		qty: null,
	});

	useEffect(() => {
		setStatus(checkIfCartContains());
	}, []);

	const handleClick = () => {
		addToCart(state);
		alert("Added to cart!");
	};

	const handleChange = (value) => {
		setState({
			...state,
			qty: value,
		});
	};

	const checkIfCartContains = () => {
		let index = cart.findIndex((item) => item.item.id === +productId);

		console.log(index);
		if (index === -1) {
			// does not contain
			return { containsItem: false, qty: null };
		} else {
			let qty = cart[index].qty;
			return { containsItem: true, qty };
		}
	};

	if (product == null) return <Navigate to="/error404" replace />;
	else
		return (
			<div className="fl-row-cont fl-centered global__padding">
				<div className="fl-col-cont fl-centered productInfo__image">
					<div>XXXX</div>
				</div>

				<div className="fl-col-cont productInfo__details">
					<div className="fl-col-cont">
						<h1 className="serif fs-13rem">{product.name}</h1>
						<p>{product.desc}</p>
						<p>
							in <em>Category: {translateCategory(product.category)}</em>
						</p>
					</div>
					<h1 className="serif fs-13rem">${product.price}</h1>
					<div className="fl-row-cont fl-align-center fs-12rem productInfo__qtyControl">
						<QtySelectBar
							changeHandler={handleChange}
							// qty={status.qty}
							renderedBy="ProductInfo"
						/>
					</div>
					{state.qty === "" ? (
						<button
							id="productInfo__submitBtn"
							className="products__category-btn"
							disabled={true}
						>
							ADD TO CART
						</button>
					) : (
						<button
							id="productInfo__submitBtn"
							className="products__category-btn"
							onClick={handleClick}
						>
							ADD TO CART
						</button>
					)}
					{status.containsItem ? (
						<em>
							<p>(Psst, this item is already in your cart.</p>
							<p>You may set a new quantity in this page</p>
							<p>or in your shopping cart if you need to.)</p>
						</em>
					) : (
						""
					)}
				</div>
			</div>
		);
}

export default ProductInfo;

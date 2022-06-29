import { Link } from "react-router-dom";

function Promo1() {
	return (
		<div className="promo1 fl-col-cont fl-centered">
			<div className="promo1__heading fl-col-cont">
				<h1>SUN'S OUT,</h1>
				<h1>FUN'S OUT!</h1>
			</div>
			<div className="fl-col-cont fl-centered promo1__subtext">
				<h2>Colors to match the summer vibes</h2>
				<p>Shop our latest summer collection.</p>
			</div>
			<Link to="/products/all">
				<button className="promo__browseBtn">Browse Collection</button>
			</Link>
		</div>
	);
}

export default Promo1;

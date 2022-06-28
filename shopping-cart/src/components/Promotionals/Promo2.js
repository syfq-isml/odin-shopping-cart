import { Link } from "react-router-dom";

function Promo2() {
	return (
		<div className="promo2 fl-col-cont fl-centered">
			<div className="promo2__heading">
				<h1>MEGA SALE</h1>
			</div>
			<div className="promo2__subheading fl-col-cont fl-centered">
				<h2>Happening now till stocks last!</h2>
			</div>
			<div className="promo2__subtext">
				<p>Members enjoy an additional 20% discount on checkout!*</p>
			</div>
			<Link to="/products">
				<button className="promo2__browseBtn">SHOP NOW</button>
			</Link>
		</div>
	);
}

export default Promo2;

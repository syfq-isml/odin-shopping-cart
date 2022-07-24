import { Link } from "react-router-dom";

function Navbar({ qty }) {
	return (
		<nav id="navbar" className="fl-row-cont">
			<div className="fl-row-cont logo">
				<Link to="/">
					<div className="logo__outer">
						<h1 className="logo__inner">THE FURNITURE STORE</h1>
					</div>
				</Link>
			</div>
			<div className="fl-row-cont fl-centered navbar__link">
				<Link to="/">
					<h2 className="fl-row-cont">Home</h2>
				</Link>
				<Link to="/products/all">
					<h2>Products</h2>
				</Link>
				<Link to="/cart">
					<h2>
						Cart ({" "}
						<span className="navbar__cart-qty" data-testid="cart-qty">
							{qty}
						</span>{" "}
						)
					</h2>
				</Link>
			</div>
		</nav>
	);
}

export default Navbar;

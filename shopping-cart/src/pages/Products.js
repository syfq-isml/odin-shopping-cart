import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

function Products() {
	const [isClicked, setIsClicked] = useState("all");

	const makeBtnActive = (e) => {
		setIsClicked((prevState) => (prevState = e.target.dataset.btn));
	};

	return (
		<div className="global__padding">
			<div className="products__categories fl-col-cont fl-centered">
				<h1>Categories:</h1>
				<div className="fl-row-cont products__category-btns">
					<Link to="/products">
						<button
							data-btn="all"
							className={
								isClicked === "all"
									? "products__category-btn products__category-btn--active"
									: "products__category-btn"
							}
							onClick={makeBtnActive}
						>
							All
						</button>
					</Link>
					<Link to="/products/bedroom">
						<button
							data-btn="bedroom"
							className={
								isClicked === "bedroom"
									? "products__category-btn products__category-btn--active"
									: "products__category-btn"
							}
							onClick={makeBtnActive}
						>
							Bedroom
						</button>
					</Link>
					<Link to="/products/kitchen">
						<button
							data-btn="kitchen"
							className={
								isClicked === "kitchen"
									? "products__category-btn products__category-btn--active"
									: "products__category-btn"
							}
							onClick={makeBtnActive}
						>
							Kitchen
						</button>
					</Link>
					<Link to="/products/living-room">
						<button
							data-btn="livingroom"
							className={
								isClicked === "livingroom"
									? "products__category-btn products__category-btn--active"
									: "products__category-btn"
							}
							onClick={makeBtnActive}
						>
							Living Room
						</button>
					</Link>
				</div>
			</div>

			<Outlet />
		</div>
	);
}

export default Products;

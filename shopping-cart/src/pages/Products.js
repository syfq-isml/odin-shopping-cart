import { useState, useEffect } from "react";
import { Link, Outlet, Navigate, useParams } from "react-router-dom";

function Products({ render, children }) {
	const { category } = useParams();
	const [isClicked, setIsClicked] = useState(`${category}`);

	useEffect(() => {
		setIsClicked((prevState) => (prevState = `${category}`));
	}, [category]);

	const makeBtnActive = (e) => {
		setIsClicked((prevState) => (prevState = e.target.dataset.btn));
	};

	return (
		<div className="global__padding">
			<div className="products__categories fl-col-cont fl-centered">
				<h1>Categories:</h1>
				<div className="fl-row-cont products__category-btns">
					<Link to="/products/all">
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
					<Link to="/products/livingroom">
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
		</div>
	);
}

export default Products;

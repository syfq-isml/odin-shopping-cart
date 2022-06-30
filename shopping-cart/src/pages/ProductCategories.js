import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import products from "../data/dataProducts";

import ProductCards from "../components/ProductCards";

import uniqid from "uniqid";

function ProductCategories() {
	const { category } = useParams();

	let productsInCategory;

	if (category === "all") productsInCategory = [...products];
	else {
		productsInCategory = products.filter((obj) => obj.category === category);
	}
	return (
		<div className="fl-col-cont fl-centered productCategories">
			<div className="productCategories__cards">
				{productsInCategory.map((item) => (
					<div className="fl-col-cont fl-centered">
						<ProductCards key={uniqid()} product={item} />
					</div>
				))}
			</div>
			<p>
				Showing {productsInCategory.length} of {productsInCategory.length}{" "}
				results
			</p>
		</div>
	);
}

export default ProductCategories;

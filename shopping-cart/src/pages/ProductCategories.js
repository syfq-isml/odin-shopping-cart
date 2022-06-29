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
		<div className="fl-row-cont productCategories">
			{productsInCategory.map((item) => (
				<ProductCards key={uniqid()} product={item} />
			))}
		</div>
	);
}

export default ProductCategories;

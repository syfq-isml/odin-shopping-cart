import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";

import ProductCards from "../components/ProductCards";

import uniqid from "uniqid";
import AddCatBar from "../components/AddCatBar";

function ProductCategories({ products }) {
	const { category } = useParams();

	let productsInCategory;

	if (category === "all") productsInCategory = [...products];
	else {
		productsInCategory = products.filter((obj) => obj.category === category);
	}
	return (
		<AddCatBar render={true}>
			<div className="fl-col-cont fl-centered productCategories">
				<div className="productCategories__cards">
					{productsInCategory.map((item) => (
						<div className="fl-col-cont fl-centered" key={uniqid()}>
							<ProductCards key={uniqid()} product={item} />
						</div>
					))}
				</div>
				<p>
					Showing {productsInCategory.length} of {productsInCategory.length}{" "}
					results
				</p>
			</div>
		</AddCatBar>
	);
}

export default ProductCategories;

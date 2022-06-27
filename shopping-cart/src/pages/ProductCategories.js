import { Outlet, useParams } from "react-router-dom";

function ProductCategories() {
	const { category } = useParams();
	return (
		<div>
			<h1>Bed</h1>
			<Outlet />
		</div>
	);
}

export default ProductCategories;

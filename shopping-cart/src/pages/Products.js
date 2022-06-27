import { Outlet } from "react-router-dom";

function Products() {
	return (
		<div>
			<h1>Categories: [ALL] [BEDROOM] [KITCHEN] [LIVING ROOM]</h1>
			<Outlet />
		</div>
	);
}

export default Products;

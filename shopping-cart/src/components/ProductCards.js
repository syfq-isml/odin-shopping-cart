import { Link } from "react-router-dom";

function ProductCards({ product }) {
	return (
		<Link to={`/products/view/${product.id}`}>
			<div className="fl-col-cont productCards__card">
				<div className="productCards__photo">XXX</div>
				<p className="productCards__name">{product.name}</p>
				<div className="fl-row-cont">
					<p>{product.desc.split(",")[0]}</p>
					<p className="productCards__price">${product.price}</p>
				</div>
			</div>
		</Link>
	);
}

export default ProductCards;

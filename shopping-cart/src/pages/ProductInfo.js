import { useParams } from "react-router-dom";
import QtySelectBar from "../components/QtySelectBar";

const translateCategory = (str) => {
	if (str === "bedroom") return "Bedroom";
	if (str === "kitchen") return "Kitchen";
	if (str === "livingroom") return "Living Room";
};

function ProductInfo({ products }) {
	console.log(products);
	const { productId } = useParams();
	console.log(productId);
	const product = products.find((product) => product.id === +productId);

	return (
		<div className="fl-row-cont fl-centered global__padding">
			<div className="fl-col-cont fl-centered productInfo__image">
				<div>XXXX</div>
			</div>

			<div className="fl-col-cont productInfo__details">
				<div className="fl-col-cont">
					<h1 className="serif fs-13rem">{product.name}</h1>
					<p>{product.desc}</p>
					<p>
						in <em>Category: {translateCategory(product.category)}</em>
					</p>
				</div>
				<h1 className="serif fs-13rem">${product.price}</h1>
				<div className="fl-row-cont fl-align-center fs-12rem productInfo__qtyControl">
					<QtySelectBar />
				</div>
				<button id="productInfo__submitBtn" className="products__category-btn">
					ADD TO CART
				</button>
			</div>
		</div>
	);
}

// select - use onChange

// use conditional rendering on - / + btns
// --> less than 0? remove -
// --> more than 10? remove +

export default ProductInfo;

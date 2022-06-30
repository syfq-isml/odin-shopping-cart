import { useParams } from "react-router-dom";
import AddCatBar from "../components/AddCatBar";

function ProductInfo({ products }) {
	console.log(products);
	const { productId } = useParams();
	console.log(productId);
	const product = products.find((product) => product.id === +productId);

	return (
		<div>
			<h1>{product.name}</h1>
		</div>
	);
}

export default ProductInfo;

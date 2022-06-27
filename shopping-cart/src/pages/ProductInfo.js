import { useParams } from "react-router-dom";

function ProductInfo() {
	const { productInfo } = useParams();

	return (
		<div>
			<h1>Info</h1>
		</div>
	);
}

export default ProductInfo;

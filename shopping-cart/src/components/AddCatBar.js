import Products from "../pages/Products";

const AddCatBar = ({ render, children }) => (
	<>
		{render && <Products />}
		{children}
	</>
);

export default AddCatBar;

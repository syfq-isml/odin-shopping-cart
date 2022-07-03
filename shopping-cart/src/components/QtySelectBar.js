import { useEffect, useRef, useState } from "react";

import uniqid from "uniqid";

function QtySelectBar({ changeHandler, qty }) {
	const options = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

	const [currentValue, setCurrentValue] = useState("");

	const handleChange = (e) => {
		const selected = e.target.value;
		changeHandler(selected);
		setCurrentValue(selected);
	};

	return (
		<select
			value={qty == null ? currentValue : qty}
			id="qtySelectBar"
			onChange={handleChange}
		>
			<option value="">Qty</option>
			{options.map((option) => {
				return (
					<option key={uniqid()} value={option}>
						{option}
					</option>
				);
			})}
		</select>
	);
}

export default QtySelectBar;

/*
<option value="1">1</option>
			<option value="1">2</option>
			<option value="1">3</option>
			<option value="1">4</option>
			<option value="1">5</option>
			<option value="1">6</option>
			<option value="1">7</option>
			<option value="1">8</option>
			<option value="1">9</option>
			<option value="1">10</option>
*/

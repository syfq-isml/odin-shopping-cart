import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Cart from "../Cart";

//setup
const cart = [
	{
		qty: "3",
		item: {
			id: 14282,
			category: "bedroom",
			desc: "Bed, 200cm x 150cm",
			price: 300.0,
			name: "BURNSK",
			image: "",
		},
	},
	{
		qty: "4",
		item: {
			id: 23479,
			category: "kitchen",
			desc: "Pot, 21cm diameter",
			price: 25.0,
			name: "CONTAINERN",
			image: "",
		},
	},
];

const cart2 = [
	{
		qty: "3",
		item: {
			id: 14282,
			category: "bedroom",
			desc: "Bed, 200cm x 150cm",
			price: 300.0,
			name: "BURNSK",
			image: "",
		},
	},
];

const removeFromCart = jest.fn();
const changeQty = jest.fn();

describe("Cart", () => {
	it("Renders empty cart page", () => {
		render(
			<Router>
				<Cart cart={[]} removeFromCart={removeFromCart} changeQty={changeQty} />
			</Router>
		);

		expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
	});

	it("Renders filled cart page", () => {
		render(
			<Router>
				<Cart
					cart={cart}
					removeFromCart={removeFromCart}
					changeQty={changeQty}
				/>
			</Router>
		);

		expect(screen.getAllByTestId("cart-product-view").length).toBe(2);
	});

	it("Can change the qty", async () => {
		render(
			<Router>
				<Cart
					cart={cart2}
					removeFromCart={removeFromCart}
					changeQty={changeQty}
				/>
			</Router>
		);

		userEvent.selectOptions(
			screen.getByRole("combobox"),
			screen.getByRole("option", { name: "1" })
		);

		expect(changeQty).toHaveBeenCalled();
	});
});

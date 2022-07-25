import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

describe("App", () => {
	describe("Product Page", () => {
		test("correctly renders all products", async () => {
			render(<App />);
			const productPage = screen.getByRole("heading", { name: "Products" });

			userEvent.click(productPage);

			expect(screen.getAllByTestId("product-cards").length).toBe(9);
		});

		test("correctly renders all products in 'Bedroom' category", async () => {
			render(<App />);
			const productPage = screen.getByRole("heading", { name: "Products" });

			userEvent.click(productPage);

			const bedroomFilter = screen.getByRole("button", { name: "Bedroom" });

			userEvent.click(bedroomFilter);

			expect(screen.getAllByTestId("product-cards").length).toBe(3);
		});
	});

	describe("Product Info", () => {
		test("correctly renders product info", async () => {
			render(<App />);
			const productPage = screen.getByRole("heading", { name: "Products" });

			userEvent.click(productPage);

			const bedroomFilter = screen.getByRole("button", { name: "Bedroom" });

			userEvent.click(bedroomFilter);
			userEvent.click(screen.getAllByTestId("product-cards")[0]);

			const QtySelectBar = screen.getByDisplayValue("Qty");

			expect(screen.getByText(/burnsk/i)).toBeInTheDocument();
			expect(screen.getByText(/Category: Bedroom/i)).toBeInTheDocument();
			expect(screen.getByRole("option", { name: "Qty" }).selected).toBe(true);
			expect(
				screen.getByRole("button", { name: "ADD TO CART" })
			).toBeDisabled();
		});

		test("correctly renders qty selected + enables `Add to Cart` btn", async () => {
			render(<App />);
			const productPage = screen.getByRole("heading", { name: "Products" });

			userEvent.click(productPage);

			const bedroomFilter = screen.getByRole("button", { name: "Bedroom" });

			userEvent.click(bedroomFilter);
			userEvent.click(screen.getAllByTestId("product-cards")[0]);

			const QtySelectBar = screen.getByDisplayValue("Qty");
			userEvent.selectOptions(
				QtySelectBar,
				screen.getByRole("option", { name: "3" })
			);

			expect(screen.getByText(/burnsk/i)).toBeInTheDocument();
			expect(screen.getByText(/Category: Bedroom/i)).toBeInTheDocument();
			expect(screen.getByRole("option", { name: "3" }).selected).toBe(true);
			expect(screen.getByRole("option", { name: "Qty" }).selected).toBe(false);
			expect(
				screen.getByRole("button", { name: "ADD TO CART" })
			).not.toBeDisabled();
		});
	});

	describe("Navbar", () => {
		test("correctly renders number in Cart btn", async () => {
			render(<App />);
			const productPage = screen.getByRole("heading", { name: "Products" });

			userEvent.click(productPage);

			const bedroomFilter = screen.getByRole("button", { name: "Bedroom" });

			userEvent.click(bedroomFilter);
			userEvent.click(screen.getAllByTestId("product-cards")[0]);

			const QtySelectBar = screen.getByDisplayValue("Qty");
			userEvent.selectOptions(
				QtySelectBar,
				screen.getByRole("option", { name: "3" })
			);

			const addToCartBtn = screen.getByRole("button", { name: "ADD TO CART" });

			userEvent.click(addToCartBtn);
			expect(screen.getByTestId("cart-qty").textContent).toBe("1");
		});

		test("correctly renders number in Cart btn", async () => {
			render(<App />);
			const productPage = screen.getByRole("heading", { name: "Products" });

			userEvent.click(productPage);

			const bedroomFilter = screen.getByRole("button", { name: "Bedroom" });

			userEvent.click(bedroomFilter);
			userEvent.click(screen.getAllByTestId("product-cards")[0]);

			const QtySelectBar = screen.getByDisplayValue("Qty");
			userEvent.selectOptions(
				QtySelectBar,
				screen.getByRole("option", { name: "3" })
			);

			const addToCartBtn = screen.getByRole("button", { name: "ADD TO CART" });

			userEvent.click(addToCartBtn);

			expect(screen.getByTestId("cart-qty").textContent).toBe("1");

			// repeat again

			userEvent.click(productPage);
			userEvent.click(bedroomFilter);
			userEvent.click(screen.getAllByTestId("product-cards")[1]);
			const QtySelectBar2 = screen.getByDisplayValue("Qty");
			userEvent.selectOptions(
				QtySelectBar2,
				screen.getByRole("option", { name: "3" })
			);
			const addToCartBtn2 = screen.getByRole("button", { name: "ADD TO CART" });
			userEvent.click(addToCartBtn2);
			expect(screen.getByTestId("cart-qty").textContent).toBe("2");
		});
	});

	describe("Cart Page", () => {
		test("correctly renders 1 item in cart", async () => {
			render(<App />);
			const productPage = screen.getByRole("heading", { name: "Products" });

			userEvent.click(productPage);

			const bedroomFilter = screen.getByRole("button", { name: "Bedroom" });

			userEvent.click(bedroomFilter);
			userEvent.click(screen.getAllByTestId("product-cards")[0]);

			const QtySelectBar = screen.getByDisplayValue("Qty");
			userEvent.selectOptions(
				QtySelectBar,
				screen.getByRole("option", { name: "3" })
			);

			const addToCartBtn = screen.getByRole("button", { name: "ADD TO CART" });

			userEvent.click(addToCartBtn);

			userEvent.click(screen.getByRole("heading", { name: "Cart ( 1 )" }));

			expect(screen.getByRole("option", { name: "3" }).selected).toBe(true);
			expect(screen.getByRole("option", { name: "Qty" }).selected).toBe(false);
			expect(
				screen.getByRole("button", { name: /checkout/i })
			).toBeInTheDocument();
		});

		test("correctly changes qty in cart page", async () => {
			render(<App />);
			const productPage = screen.getByRole("heading", { name: "Products" });

			userEvent.click(productPage);

			const bedroomFilter = screen.getByRole("button", { name: "Bedroom" });

			userEvent.click(bedroomFilter);
			userEvent.click(screen.getAllByTestId("product-cards")[0]);

			const QtySelectBar = screen.getByDisplayValue("Qty");
			userEvent.selectOptions(
				QtySelectBar,
				screen.getByRole("option", { name: "3" })
			);

			const addToCartBtn = screen.getByRole("button", { name: "ADD TO CART" });

			userEvent.click(addToCartBtn);

			userEvent.click(screen.getByRole("heading", { name: "Cart ( 1 )" }));

			userEvent.selectOptions(
				screen.getByRole("combobox"),
				screen.getByRole("option", { name: "1" })
			);

			expect(screen.getByRole("option", { name: "1" }).selected).toBe(true);
		});

		test("correctly submits order", async () => {
			render(<App />);
			const productPage = screen.getByRole("heading", { name: "Products" });

			userEvent.click(productPage);

			const bedroomFilter = screen.getByRole("button", { name: "Bedroom" });

			userEvent.click(bedroomFilter);
			userEvent.click(screen.getAllByTestId("product-cards")[0]);

			const QtySelectBar = screen.getByDisplayValue("Qty");
			userEvent.selectOptions(
				QtySelectBar,
				screen.getByRole("option", { name: "3" })
			);

			const addToCartBtn = screen.getByRole("button", { name: "ADD TO CART" });

			userEvent.click(addToCartBtn);

			userEvent.click(screen.getByRole("heading", { name: "Cart ( 1 )" }));

			userEvent.selectOptions(
				screen.getByRole("combobox"),
				screen.getByRole("option", { name: "1" })
			);

			userEvent.click(screen.getByRole("button", { name: /checkout/i }));

			expect(screen.getByText(/thanks for using our site!/i));
		});

		test("correctly deletes a cart item", async () => {
			render(<App />);
			const productPage = screen.getByRole("heading", { name: "Products" });

			userEvent.click(productPage);

			const bedroomFilter = screen.getByRole("button", { name: "Bedroom" });

			userEvent.click(bedroomFilter);
			userEvent.click(screen.getAllByTestId("product-cards")[0]);

			const QtySelectBar = screen.getByDisplayValue("Qty");
			userEvent.selectOptions(
				QtySelectBar,
				screen.getByRole("option", { name: "3" })
			);

			const addToCartBtn = screen.getByRole("button", { name: "ADD TO CART" });

			userEvent.click(addToCartBtn);

			userEvent.click(screen.getByRole("heading", { name: "Cart ( 1 )" }));

			userEvent.click(screen.getByTitle(/Remove item from cart/i));

			expect(screen.getByText(/your cart is empty/i)).toBeInTheDocument();
		});

		test("correctly deletes item with multiple items in cart", async () => {
			render(<App />);
			const productPage = screen.getByRole("heading", { name: "Products" });

			userEvent.click(productPage);

			const bedroomFilter = screen.getByRole("button", { name: "Bedroom" });

			userEvent.click(bedroomFilter);
			userEvent.click(screen.getAllByTestId("product-cards")[0]);

			const QtySelectBar = screen.getByDisplayValue("Qty");
			userEvent.selectOptions(
				QtySelectBar,
				screen.getByRole("option", { name: "3" })
			);

			const addToCartBtn = screen.getByRole("button", { name: "ADD TO CART" });

			userEvent.click(addToCartBtn);

			expect(screen.getByTestId("cart-qty").textContent).toBe("1");

			// repeat again

			userEvent.click(productPage);
			userEvent.click(bedroomFilter);
			userEvent.click(screen.getAllByTestId("product-cards")[1]);
			const QtySelectBar2 = screen.getByDisplayValue("Qty");
			userEvent.selectOptions(
				QtySelectBar2,
				screen.getByRole("option", { name: "3" })
			);
			const addToCartBtn2 = screen.getByRole("button", { name: "ADD TO CART" });
			userEvent.click(addToCartBtn2);

			userEvent.click(screen.getByRole("heading", { name: "Cart ( 2 )" }));

			expect(screen.getByText(/lampente/i)).toBeInTheDocument();
			expect(screen.getByText(/burnsk/i)).toBeInTheDocument();

			userEvent.click(screen.getAllByTitle(/Remove item from cart/i)[0]);

			expect(screen.getByText(/lampente/i)).toBeInTheDocument();
			expect(screen.queryByText(/burnsk/i)).not.toBeInTheDocument();
		});
	});
});

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
	});
});

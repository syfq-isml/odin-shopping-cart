import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/react";
import ProductCategories from "../ProductCategories";

import data from "../../data/dataProducts";

jest.mock("../../components/AddCatBar", () => {});

describe("Product Page", () => {
	test("renders all products", () => {
		render(<ProductCategories products={data} />);
	});
});

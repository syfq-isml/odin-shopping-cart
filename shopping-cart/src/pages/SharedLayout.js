import { Outlet } from "react-router-dom";

import Banner from "../components/Banner";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SharedLayout() {
	return (
		<>
			<Banner />
			<Header />
			<Navbar />
			<Outlet />
			<Footer />
		</>
	);
}

export default SharedLayout;

import { Outlet } from "react-router-dom";

import Banner from "../components/Banner";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SharedLayout({ qty }) {
	return (
		<div className="fl-col-cont shared-layout">
			<div>
				<Banner />
				<Header />
				<Navbar qty={qty} />
				<Outlet />
			</div>
			<Footer />
		</div>
	);
}

export default SharedLayout;

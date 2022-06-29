import { Link } from "react-router-dom";

function ErrorPage() {
	return (
		<div className="error-page fl-col-cont fl-centered">
			<h1>Oops, this page doesn't exist.</h1>
			<p>The page you have visited may have been deleted or removed.</p>
			<Link to="/">
				<button className="promo__browseBtn">Back to Home ></button>
			</Link>
		</div>
	);
}

export default ErrorPage;

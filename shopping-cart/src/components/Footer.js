function Footer() {
	return (
		<footer className="footer fl-row-cont">
			<div className="footer__section fl-col-cont">
				<h3>About Us</h3>
				<ul className="footer__links fl-col-cont">
					<li>Our Story</li>
					<li>Our values</li>
					<li>Careers @ TFS</li>
				</ul>
			</div>
			<div className="footer__section fl-col-cont">
				<h3>Help and Support</h3>
				<ul className="footer__links fl-col-cont">
					<li>FAQs</li>
					<li>Shipping and Delivery</li>
					<li>Returns Policy</li>
				</ul>
			</div>
			<div className="footer__section fl-col-cont">
				<h3>Social Media</h3>
				<ul className="footer__links fl-col-cont">
					<li>Facebook</li>
					<li>Twitter</li>
					<li>Instagram</li>
				</ul>
			</div>
			<div className="footer__section fl-col-cont">
				<h3>Sign up for our monthly newsletter!</h3>
				<form onSubmit={(e) => e.preventDefault()}>
					<input type="text" placeholder="Email"></input>
					<button type="submit">Sign Up</button>
				</form>
			</div>
		</footer>
	);
}

export default Footer;

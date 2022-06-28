import Promo1 from "../components/Promotionals/Promo1";
import Promo2 from "../components/Promotionals/Promo2";

function Home() {
	return (
		<div>
			<div className="promo__padding">
				<Promo1 />
			</div>
			<div className="promo__padding">
				<Promo2 />
			</div>
		</div>
	);
}

export default Home;

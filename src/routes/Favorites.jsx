import FavoritesCard from "../components/visitors/favorites/FavoritesCard";
import Header from "../components/visitors/favorites/Header";
import BottomNav from "../components/BottomNav";
function Favorites() {
	const userData = JSON.parse(localStorage.getItem("userData")) || {};
	return (
		<>
			<div className="bg-white h-screen">
				<Header />
				<div className="mt-20 mb-24 mx-2 flex flex-row justify-between flex-wrap">
                    <FavoritesCard userId={userData.id} />
				</div>

				<BottomNav />
			</div>
		</>
	);
}

export default Favorites;

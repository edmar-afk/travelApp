import FavoritesList from "../components/visitors/homepage/FavoritesList";import Header from "../components/visitors/homepage/Header";
import Search from "../components/visitors/homepage/Search";
import MostEngage from "../components/visitors/homepage/MostEngage";
import BottomNav from "../components/BottomNav";
import Welcome from "../components/visitors/homepage/Welcome";

function VisitorDashboard() {
	// Parse userData from localStorage and provide a default empty object if null
	const userData = JSON.parse(localStorage.getItem("userData")) || {};

	// Access userId safely
	const userId = userData?.id;

	return (
		<>
			<div className="bg-white h-full">
				<Header
					// Use optional chaining to safely access first_name and last_name
					name={userData.first_name || "Visitor"}
					address={userData.last_name || "Lakewood Zamboanga del Sur"}
				/>
				<FavoritesList userId={userId} />
				<Search />

				<p className="p-4 font-semibold">Most Loved Places</p>
				<div className="flex flex-row mt-2 overflow-x-scroll whitespace-nowrap">
					<MostEngage
						locName="ATM Resort"
						loveCount={24234}
					/>
					<MostEngage
						locName="ATM Resort"
						loveCount={15234}
					/>
					<MostEngage
						locName="ATM Resort"
						loveCount={3234}
					/>
					<MostEngage
						locName="ATM Resort"
						loveCount={7234}
					/>
				</div>
				<Welcome />
				<br /><br /><br /><br />
				<BottomNav />
			</div>
		</>
	);
}

export default VisitorDashboard;

import FavoritesList from "../components/visitors/homepage/FavoritesList";
import Header from "../components/visitors/homepage/Header";

function VisitorDashboard() {
	// Parse userData from localStorage and provide a default empty object if null
	const userData = JSON.parse(localStorage.getItem("userData")) || {};

	// Access userId safely
	const userId = userData?.id;

	return (
		<>
			<div className="bg-white h-screen">
				<Header
					// Use optional chaining to safely access first_name and last_name
					name={userData.first_name || "Visitor"}
					address={userData.last_name || "Lakewood Zamboanga del Sur"}
				/>
				<FavoritesList userId={userId} />
			</div>
		</>
	);
}

export default VisitorDashboard;

import FavoritesList from "../components/visitors/homepage/FavoritesList";
import Header from "../components/visitors/homepage/Header";
function VisitorDashboard() {
	const userData = JSON.parse(localStorage.getItem("userData"));
	const userId = userData?.id; // Adjust according to how your user data structure

	return (
		<>
			<div className="bg-white h-screen">
				<Header
					name={userData.first_name}
					address={userData.last_name}
				/>
				<FavoritesList userId={userId} />
			</div>
		</>
	);
}

export default VisitorDashboard;

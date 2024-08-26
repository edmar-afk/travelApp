import FavoritesList from "../components/visitors/homepage/FavoritesList";import Header from "../components/visitors/homepage/Header";import Search from "../components/visitors/homepage/Search";import MostEngage from "../components/visitors/homepage/MostEngage";import BottomNav from "../components/BottomNav";import Welcome from "../components/visitors/homepage/Welcome";import Landmarks from "../components/visitors/homepage/Landmarks";
import GridViewIcon from "@mui/icons-material/GridView";
import CollectionsIcon from "@mui/icons-material/Collections";
import LandmarksStacked from "../components/visitors/homepage/LandmarksStacked";
import { useState } from "react";

function VisitorDashboard() {
	const userData = JSON.parse(localStorage.getItem("userData")) || {};
	const userId = userData?.id;

	const [viewMode, setViewMode] = useState("collection"); // 'collection' or 'grid'

	const handleGridViewClick = () => {
		setViewMode("grid");
	};

	const handleCollectionViewClick = () => {
		setViewMode("collection");
	};

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

				<div className="flex flex-row justify-between p-4 items-center">
					<p className="font-semibold mt-2">
						Famous Landmarks and <br /> Infrastructures
					</p>
					<div>
						<GridViewIcon
							onClick={handleGridViewClick}
							className={`cursor-pointer ${viewMode === "grid" ? "text-yellow-700 scale-125" : ""}`} // Optional active style
						/>
						<CollectionsIcon
							onClick={handleCollectionViewClick}
							className={`ml-2 cursor-pointer  ${viewMode === "collection" ? "text-yellow-700 scale-125" : ""}`} // Optional active style
						/>
					</div>
				</div>

				{viewMode === "collection" ? (
					<div className="flex flex-row mt-2 overflow-x-scroll whitespace-nowrap">
						<Landmarks locName="ATM Resort" />
						<Landmarks locName="ATM Resort" />
						<Landmarks locName="ATM Resort" />
						<Landmarks locName="ATM Resort" />
						<Landmarks locName="ATM Resort" />
					</div>
				) : (
					<div className="flex flex-row mt-2 overflow-x-hidden flex-wrap justify-evenly">
						<LandmarksStacked locName="ATM Resort" />
						<LandmarksStacked locName="ATM Resort" />
						<LandmarksStacked locName="ATM Resort" />
						<LandmarksStacked locName="ATM Resort" />
					</div>
				)}

				<br />
				<br />
				<br />
				<br />
				<BottomNav />
			</div>
		</>
	);
}

export default VisitorDashboard;

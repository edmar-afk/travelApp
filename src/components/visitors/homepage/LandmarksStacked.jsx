import { useEffect, useState } from "react";import { Link } from "react-router-dom";
import ExploreIcon from "@mui/icons-material/Explore";
import api from "../../../assets/api";

// Get the base URL from Vite environment variables
const BASE_URL = import.meta.env.VITE_API_URL;

function LandmarksStacked() {
	const [places, setPlaces] = useState([]);

	// Fetch places from the API when the component mounts
	useEffect(() => {
		const fetchPlaces = async () => {
			try {
				const response = await api.get("/api/places/"); // Adjust the endpoint if needed
				setPlaces(response.data);
			} catch (error) {
				console.error("Error fetching places:", error);
			}
		};

		fetchPlaces();
	}, []);

	return (
		<>
			{places.map((place) => (
				<Link
					key={place.id}
					to={`/visitorDashboard/buildingDetails/${place.id}`}
					className="flex flex-col relative mb-4 mx-4 min-w-[150px]">
					<div className="absolute top-0 h-full w-full rounded-2xl bg-gradient-to-t from-gray-800"></div>
					<img
						src={`${BASE_URL}${place.image}`} // Use BASE_URL to construct the full image URL
						className="w-[150px] h-[140px] object-cover rounded-2xl"
						alt={place.name} // Alt text for accessibility
					/>
					<div className="absolute bottom-4 text-white left-4 text-xs">
						<div className="flex items-center">
							<ExploreIcon fontSize="small" />
							<p className="ml-1">{place.name}</p> {/* Display place name */}
						</div>
					</div>
				</Link>
			))}
		</>
	);
}

export default LandmarksStacked;

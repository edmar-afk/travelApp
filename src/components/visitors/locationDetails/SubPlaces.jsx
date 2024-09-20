/* eslint-disable react/prop-types */ import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ExploreIcon from "@mui/icons-material/Explore";
import api from "../../../assets/api";

// Get the base URL from Vite environment variables
const BASE_URL = import.meta.env.VITE_API_URL;

function SubPlaces({ placeId }) {
	const [subPlaces, setSubPlaces] = useState([]);
	const [error, setError] = useState(null);

	// Fetch subplaces from the API when the component mounts
	useEffect(() => {
		const fetchSubPlaces = async () => {
			try {
				const response = await api.get(`/api/places/${placeId}/subplaces/`); // Adjust the endpoint for subplaces
				setSubPlaces(response.data);
			} catch (error) {
				console.error("Error fetching subplaces:", error);
				setError("Failed to load subplaces. Please try again.");
			}
		};

		if (placeId) {
			fetchSubPlaces();
		}
	}, [placeId]);

	if (error) {
		return <p>{error}</p>;
	}

	return (
		<>
			{subPlaces.length === 0 ? (
				<p>No subplaces found for this place.</p>
			) : (
				subPlaces.map((subPlace) => (
					<Link
						key={subPlace.id}
						to={`/visitorDashboard/buildingDetails/${subPlace.id}`}
						className="flex flex-col relative mb-4 mx-4 min-w-[350px]">
						<div className="absolute top-0 h-full w-full rounded-2xl bg-gradient-to-t from-gray-900"></div>
						<img
							src={`${BASE_URL}${subPlace.image}`} // Assuming subplaces also have images
							className="w-[350px] h-[240px] object-cover rounded-2xl"
							alt={subPlace.name} // Alt text for accessibility
						/>
						<div className="absolute bottom-4 text-white left-4 text-xs">
							<div className="flex items-center">
								<ExploreIcon fontSize="small" />
								<p className="ml-1">{subPlace.name}</p> {/* Display subplace name */}
							</div>
						</div>
					</Link>
				))
			)}
		</>
	);
}

export default SubPlaces;

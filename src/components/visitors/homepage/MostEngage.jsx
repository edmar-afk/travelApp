import { useState, useEffect } from "react";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ExploreIcon from "@mui/icons-material/Explore";
import { Link } from "react-router-dom";
import api from "../../../assets/api"; // API module to make requests
import Marquee from "react-fast-marquee";
// Function to format the number
const formatNumber = (num) => {
	if (num >= 1000000) {
		return (num / 1000000).toFixed(1) + "M"; // Format for millions
	} else if (num >= 1000) {
		return (num / 1000).toFixed(1) + "k"; // Format for thousands
	}
	return num; // Return the number as-is if less than 1000
};
const BASE_URL = import.meta.env.VITE_API_URL;

function MostEngage() {
	const [places, setPlaces] = useState([]);

	// Fetch places from the API on component mount
	useEffect(() => {
		const fetchPlaces = async () => {
			try {
				const response = await api.get("/api/loved-places/"); // Fetch from the backend API
				setPlaces(response.data); // Assuming response data is an array of places
			} catch (error) {
				console.error("Error fetching places:", error);
			}
		};

		fetchPlaces();
	}, []);
	return (
		<div className="flex flex-wrap">
			{places.map((place) => (
				<Link
					key={place.id}
					to={`/visitorDashboard/buildingDetails/${place.id}`}
					className="flex flex-col relative mb-4 mx-4 min-w-[140px]">
					<div className="absolute top-0 h-full w-full rounded-2xl bg-gradient-to-t from-gray-900"></div>
					<img
						src={`${BASE_URL}${place.image}`}
						className="w-[140px] h-[140px] object-cover rounded-2xl"
						alt={place.name} // Set alt text to place name
					/>
					<div className="absolute bottom-9 text-white left-2 text-xs">
						<div className="flex items-center">
							<VolunteerActivismIcon fontSize="small" />
							<p className="ml-1">{formatNumber(place.like_count)} Loved this</p>
						</div>
					</div>
					<div className="absolute bottom-2 text-white left-2 text-xs">
						<div className="flex items-center">
							<ExploreIcon fontSize="small" />
							{place.name.length > 14 ? (
								<Marquee
									gradient={false}
									speed={50}
									className="ml-1 mr-8">
									{place.name}
								</Marquee>
							) : (
								<p className="ml-1 break-words w-[120px]">{place.name}</p>
							)}
						</div>
					</div>
				</Link>
			))}
		</div>
	);
}

export default MostEngage;

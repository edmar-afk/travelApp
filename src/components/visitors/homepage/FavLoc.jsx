import { useEffect, useState } from "react";import { Link } from "react-router-dom";import api from "../../../assets/api";
const BASE_URL = import.meta.env.VITE_API_URL;

// eslint-disable-next-line react/prop-types
function FavLoc({ id }) {
	const [likedPlaces, setLikedPlaces] = useState([]);

	// Fetch liked places from API
	useEffect(() => {
		const fetchLikedPlaces = async () => {
			try {
				const response = await api.get(`/api/user/${id}/liked-places/`);
				setLikedPlaces(response.data);
			} catch (error) {
				console.error("Error fetching liked places:", error);
			}
		};

		if (id) {
			fetchLikedPlaces();
		}
	}, [id]);
	console.log(likedPlaces);
	return (
		<>
			{likedPlaces.length > 0 ? (
				likedPlaces.map((place) => (
					<Link
						key={place.id}
						to={`/visitorDashboard/buildingDetails/${place.place_name.id}`}>
						<div className="flex flex-col mx-3 w-[80px] overflow-hidden mb-4">
							<img
								src={`${BASE_URL}${place.place_name.image}`}
								width={60}
								alt={place.name}
								className="w-16 h-16 rounded-full object-cover"
							/>
							<p className="text-xs text-center mt-2 truncate ">{place.place_name.name}</p>
						</div>
					</Link>
				))
			) : (
				<p className="text-center">No liked places found.</p>
			)}
		</>
	);
}

export default FavLoc;

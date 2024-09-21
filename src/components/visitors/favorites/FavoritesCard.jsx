/* eslint-disable react/prop-types */import { useEffect, useState } from "react";
import api from "../../../assets/api";
const BASE_URL = import.meta.env.VITE_API_URL;

function FavoritesCard({ userId }) {
	const [likedPlaces, setLikedPlaces] = useState([]);

	const fetchLikedPlaces = () => {
		api
			.get(`/api/user/${userId}/liked-places/`)
			.then((response) => {
				setLikedPlaces(response.data);
			})
			.catch((error) => {
				console.error("Error fetching liked places:", error);
			});
	};

	useEffect(() => {
		// Fetch liked places when the component mounts
		fetchLikedPlaces();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userId]);

	const handleDislike = (placeId, placeName) => {
		api
			.post(`/api/dislike-place/${placeId}/`)
			.then(() => {
				// Show an alert when the place is disliked
				alert(`Place "${placeName}" has been disliked`);

				// Fetch updated liked places after the alert
				fetchLikedPlaces();
			})
			.catch((error) => {
				console.error("Error disliking place:", error);
			});
	};

	return (
		<div className="grid grid-cols-1 gap-4">
			{likedPlaces.map((place) => (
				<div
					key={place.id}
					className="w-[170px] bg-white border border-gray-200 rounded-lg shadow">
					<a href="#">
						<img
							className="p-2 rounded-2xl"
							src={`${BASE_URL}${place.place_name.image}`}
							alt={place.place_name.name}
						/>
					</a>
					<div className="px-5 pb-5">
						<a href="#">
							<h5 className="text-xs font-semibold tracking-tight text-gray-900 text-center">
								{place.place_name.name}
							</h5>
						</a>

						<div className="flex items-center justify-center mt-4">
							<button
								className="text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
								onClick={() => handleDislike(place.place_name.id, place.place_name.name)}>
								Dislike
							</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
}

export default FavoritesCard;

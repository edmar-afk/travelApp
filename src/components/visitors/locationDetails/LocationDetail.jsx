import { useParams, Link } from "react-router-dom";import { useEffect, useState } from "react";import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";import CorporateFareIcon from "@mui/icons-material/CorporateFare";import Diversity1Icon from "@mui/icons-material/Diversity1";
import ApprovalIcon from "@mui/icons-material/Approval";
import api from "../../../assets/api";
import Marquee from "react-fast-marquee";
import SubPlaces from "./SubPlaces";
import { Tooltip } from "react-tooltip";
function LocationDetail() {
	const { buildingId } = useParams();
	const [place, setPlace] = useState(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const [isLiked, setIsLiked] = useState(false); // State to track like status
	const [likes, setLikes] = useState(0);
	const [refreshTrigger, setRefreshTrigger] = useState(false);
	const userData = JSON.parse(localStorage.getItem("userData")) || {};

	// Determine if user is logged in
	const isLoggedIn = Object.keys(userData).length > 0;

	useEffect(() => {
		const fetchPlaceDetails = async () => {
			try {
				const response = await api.get(`/api/places/${buildingId}/`);
				setPlace(response.data);
				const likeResponse = await api.get(`/api/check-like/${buildingId}/`);
				setIsLiked(likeResponse.data.liked);
			} catch (err) {
				setError(err.message);
			} finally {
				setLoading(false);
			}
		};

		const fetchLikes = async () => {
			try {
				const response = await api.get(`/api/place-likes/${buildingId}/`);
				setLikes(response.data.like_count);
			} catch (error) {
				console.error("Error fetching likes:", error);
			}
		};

		fetchLikes();
		fetchPlaceDetails();
	}, [buildingId, refreshTrigger]); // Add refreshTrigger here

	const handleLike = async () => {
		try {
			await api.post(`/api/like/${buildingId}/`);
			setIsLiked(true);
			setRefreshTrigger((prev) => !prev); // Toggle the trigger
		} catch (err) {
			console.error("Error liking the place:", err.message);
		}
	};

	const handleDislike = async () => {
		try {
			await api.post(`/api/dislike-place/${buildingId}/`);
			setIsLiked(false);
			setRefreshTrigger((prev) => !prev); // Toggle the trigger
		} catch (err) {
			console.error("Error disliking the place:", err.message);
		}
	};

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error}</p>;
	if (!place) return <p>No details found</p>;

	return (
		<div className="relative bg-white h-full">
			<Link
				to={"/visitorDashboard"}
				className="fixed top-8 left-4 bg-yellow-700 rounded-full p-1 flex items-center justify-center z-50">
				<ArrowBackIosIcon className="block pl-1.5 text-white" />
			</Link>

			<img
				src={place.image} // Use place.image if available
				alt={place.name || "Place Image"}
				className="h-[350px] w-full rounded-b-[40px] shadow-2xl object-cover"
			/>

			<div className="flex flex-col p-4">
				<div className="flex flex-row justify-between items-center">
					<div>
						<p className="font-bold">{place.name}</p>
					</div>
				</div>
				<div className="my-6 flex flex-row justify-evenly items-center text-sm">
					{/* You can adjust the icons and texts based on actual place data */}
					<div
						className="flex flex-col items-center"
						data-tooltip-id="my-tooltip"
						data-tooltip-content="Hello world!"
						data-tooltip-place="top"
						data-tooltip-trigger="click" // Enable tap/click trigger
					>
						<Diversity1Icon
							fontSize="large"
							className="text-gray-600"
						/>
						<p className="mt-4">Popularity</p>
						<p className="font-bold">{likes}</p>
						<Tooltip id="my-tooltip" />
					</div>
					<div className="flex flex-col items-center">
						<CorporateFareIcon
							fontSize="large"
							className="text-gray-600"
						/>
						<p className="mt-4">Building Type</p>
						<p className="font-bold">{place.type}</p>
					</div>
					<div className="flex flex-col items-center w-[90px]">
						<ApprovalIcon
							fontSize="large"
							className="text-gray-600"
						/>
						<p className="mt-4">Address</p>
						<Marquee>
							<p className="font-bold text-center mr-8">{place.address}</p>
						</Marquee>
					</div>
				</div>
				<div className="flex flex-row mt-2 overflow-x-scroll whitespace-nowrap my-12">
					<SubPlaces placeId={buildingId} />
				</div>
				<div className="mt-4 mb-16">
					<p className="text-justify whitespace-pre-wrap">{place.description}</p>
				</div>

				<div className="fixed -left-0 bottom-0 h-[250px] w-full bg-gradient-to-t from-white"></div>
				<button
					onClick={isLiked ? handleDislike : handleLike}
					disabled={!isLoggedIn} // Disable button if not logged in
					className={`fixed w-full bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center mx-auto hover:scale-110 duration-300 ${
						!isLoggedIn ? "opacity-50 cursor-not-allowed" : ""
					}`}>
					<div className="bg-yellow-600 text-white py-2 px-12 rounded-full">
						{!isLoggedIn ? "Log in first to interact" : isLiked ? "You already Loved this Place" : "Love this Place"}
					</div>
				</button>
			</div>
		</div>
	);
}

export default LocationDetail;

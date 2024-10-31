/* eslint-disable react/no-unescaped-entities */ import BottomNav from "../components/BottomNav";
import bg from "../assets/img/bg.jpg";
import logo from "../assets/img/logo.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone"; import PlaceIcon from "@mui/icons-material/Place"; import HikingIcon from "@mui/icons-material/Hiking";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
import Info from "../components/profile/Info";
import ImageIcon from "@mui/icons-material/Image";
import { useState, useEffect } from "react"; // Import useEffect
import api from "../assets/api";

function Profile() {
	const userData = JSON.parse(localStorage.getItem("userData")) || {};
	const [profilePic, setProfilePic] = useState(logo); // Default to the existing logo

	// Fetch initial profile picture
	useEffect(() => {
		const fetchProfilePic = async () => {
			try {
				const response = await api.get(`/api/profiles/${userData.id}/picture/`);

				// Ensure that the response data contains the profile picture path
				if (response.data && response.data.profile_pic) {
					const fullImageUrl = `${import.meta.env.VITE_API_URL}${response.data.profile_pic}`;

					setProfilePic(fullImageUrl); // Set the complete URL for the profile picture
				} else {
					setProfilePic(logo); // Use default logo if no profile pic
				}
			} catch (error) {
				console.error("Failed to fetch profile picture", error);
				setProfilePic(logo); // Use default logo on error
			}
		};

		if (userData && userData.id) {
			// Ensure userData is available and has an id
			fetchProfilePic();
		}
	}, [userData.id]); // Dependency on userData.id

	const handleImageChange = async (event) => {
		const file = event.target.files[0];
		if (file) {
			const formData = new FormData();
			formData.append("profile_pic", file); // Assuming your backend expects a field named 'profile_pic'
			try {
				const response = await api.patch(`/api/profiles/${userData.id}/`, formData, {
					headers: {
						"Content-Type": "multipart/form-data",
					},
				});
				// Use the returned profile picture URL if available
				if (response.data.profile_pic) {
					setProfilePic(response.data.profile_pic); // Update the profile picture with the response
				} else {
					// Fallback to local URL if response doesn't have the profile picture URL
					setProfilePic(URL.createObjectURL(file));
				}
			} catch (error) {
				console.error("Failed to upload profile picture", error);
			}
		}
	};
	console.log(profilePic);
	return (
		<>
			<div className="flex flex-wrap items-center justify-center ">
				<div className="container w-full flex flex-col items-center bg-white shadow-lg transform duration-200 ease-in-out">
					<div className="h-72 overflow-hidden">
						<img
							className="w-full bg-cover"
							src={bg}
							alt="Background"
						/>
					</div>
					<div className="relative flex justify-center px-5 -mt-12 mb-4 w-full">
						<div className="flex flex-col items-center">
							<img
								className="h-32 w-32 bg-white border-4 border-yellow-500 p-2 rounded-full"
								src={profilePic} // Ensure this is using the state variable
								alt="Profile"
							/>

							<p className="text-gray-800 z-50 mt-2 flex items-center text-xs">
								<label
									htmlFor="file-upload"
									className="cursor-pointer">
									<ImageIcon fontSize="small" /> Change
								</label>
								<input
									id="file-upload"
									type="file"
									accept="image/*"
									className="hidden"
									onChange={handleImageChange}
								/>
							</p>
						</div>
						<Link
							to={"/logout"}
							className="absolute right-4 top-14 text-red-400 font-semibold flex items-center">
							<LogoutIcon className="mr-1" />
							Logout
						</Link>
					</div>
					<div className="">
						<div className="text-center px-4">
							<h2 className="text-gray-800 text-xl font-bold">{userData.first_name}</h2>
							<p
								className="text-yellow-900 mt-2 flex items-center justify-center"
								
								target="_blank"
								rel="noopener noreferrer">
								<HikingIcon
									fontSize="small"
									className="mr-2"
								/>
								Traveler
							</p>
							<p className="mt-2 text-gray-500 text-xs">
								Welcome to Lakewood! Renowned for its stunning landscapes, rich culture, and warm hospitality. Whether
								you're seeking a serene escape or a taste of nature's beauty, Lakewood is the perfect destination for
								you!
							</p>
						</div>
						<hr className="mt-6" />
						<div className="flex bg-gray-50 items-center justify-evenly">
							<div className="text-center p-4 hover:bg-gray-100 cursor-pointer">
								<p className="font-semibold text-xs flex items-center justify-center">
									<LocalPhoneIcon className="mr-1" />
									{userData.username}
								</p>
							</div>
							<div className="border"></div>
							<div className="text-center p-4 hover:bg-gray-100 cursor-pointer">
								<p className="text-xs font-semibold flex items-center">
									<PlaceIcon className="mr-1" />
									{userData.last_name}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<Info />

			<BottomNav />
		</>
	);
}

export default Profile;

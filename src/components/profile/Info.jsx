import { useState, useEffect } from "react";import InfoIcon from "@mui/icons-material/Info";import CakeIcon from "@mui/icons-material/Cake";
import api from "../../assets/api";
function Info() {
	const [birthday, setBirthday] = useState(null); // Birthday from API
	const [editing, setEditing] = useState(false); // Toggle input field
	const [newBirthday, setNewBirthday] = useState(""); // Temporary birthday value
	const userData = JSON.parse(localStorage.getItem("userData")) || {}; // Retrieve userData
	// Fetch user profile information
	useEffect(() => {
		const fetchBirthday = async () => {
			try {
				const response = await api.get(`/api/profiles/${userData.id}/birthday/`); // Use the new endpoint for fetching birthday
				setBirthday(response.data.birthday); // Set the fetched birthday
				setNewBirthday(response.data.birthday || ""); // Initialize newBirthday with fetched birthday
			} catch (error) {
				console.error("Failed to fetch birthday data", error);
			}
		};

		fetchBirthday();
	}, [userData.id]);

	// Update birthday
	const handleSaveBirthday = async () => {
		try {
			// If birthday already exists, use PATCH; otherwise use POST
			const url = birthday
				? `/api/profiles/${userData.id}/update-birthday/`
				: `/api/profiles/${userData.id}/update-birthday/`;

			const method = birthday ? "PATCH" : "POST"; // Decide based on whether a birthday already exists

			await api[method.toLowerCase()](url, { birthday: newBirthday });
			setBirthday(newBirthday); // Update the displayed birthday
			setEditing(false); // Hide input after saving
		} catch (error) {
			console.error("Failed to update birthday", error);
		}
	};

	const formatBirthday = (birthday) => {
		if (!birthday) return "Birthday not set"; // Check if birthday is null or undefined
		const date = new Date(birthday);
		return date.toLocaleDateString("en-US", {
			day: "2-digit",
			month: "short",
			year: "numeric",
		});
	};

	return (
		<>
			<div className="bg-white max-w-2xl shadow overflow-hidden sm:rounded-lg mb-44">
				<div className="px-4 py-5 sm:px-6 flex flex-row items-center justify-between">
					<div>
						<h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
						<p className="mt-1 max-w-2xl text-sm text-gray-500">Details and information about you.</p>
					</div>
					<InfoIcon
						fontSize="large"
						className="text-yellow-700"
					/>
				</div>
				<div className="border-t border-gray-200 flex justify-between items-center">
					<div className="px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
						<dt className="text-sm font-medium text-gray-500 flex items-center">
							<CakeIcon className="mr-1" /> Birthday
						</dt>
						<dd className="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
							{editing ? (
								<input
									type="date"
									value={newBirthday}
									onChange={(e) => setNewBirthday(e.target.value)}
									className="border border-gray-300 rounded p-1 text-sm w-full"
								/>
							) : (
								<span>{formatBirthday(birthday)}</span> // Use the formatting function here
							)}
						</dd>
					</div>
					<div className="flex items-center justify-end mr-2">
						{editing ? (
							<div className="flex items-center space-x-2">
								<button
									onClick={handleSaveBirthday}
									className="text-blue-500 text-xs underline">
									Save
								</button>
								<button
									onClick={() => setEditing(false)}
									className="text-gray-500 text-xs underline">
									Cancel
								</button>
							</div>
						) : (
							<p
								onClick={() => setEditing(true)}
								className="text-xs underline cursor-pointer">
								Set Birthday
							</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default Info;

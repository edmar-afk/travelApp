import api from "../../assets/api";import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DomainIcon from "@mui/icons-material/Domain";
function BuildingApproved() {
	const [places, setPlaces] = useState([]);
	useEffect(() => {
		const fetchPlaces = async () => {
			try {
				const response = await api.get("/api/places/ongoing/"); // Adjust the endpoint if needed
				setPlaces(response.data);
			} catch (error) {
				console.error("Error fetching places:", error);
			}
		};

		fetchPlaces();
	}, []);
	return (
		<>
			<div className="">
				<p className="my-4 font-bold p-4">Spots that Ongoing Process of Papers by the Tourism</p>
				<div className="flex flex-row flex-wrap justify-evenly items-center">
					{places.map((place) => (
						<Link
							key={place.id}
							to={`/visitorDashboard/buildingDetails/${place.id}`}
							className="flex flex-col relative mb-8 mx-4 w-20 h-20">
							<div className="absolute top-0 h-full w-full rounded-2xl"></div>
							<div className="flex justify-center">
								<DomainIcon
									className="text-yellow-600"
									sx={{ fontSize: 50 }}
								/>
							</div>

							<div className="absolute -bottom-4 text-gray-800 text-xs">
								<div className="flex items-center justify-center">
									<p className="text-center font-semibold">{place.name}</p> {/* Display place name */}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</>
	);
}

export default BuildingApproved;

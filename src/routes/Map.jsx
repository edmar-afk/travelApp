import BottomNav from "../components/BottomNav";import map from "../assets/img/map.png";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom"; // Import Link for navigation

function Map() {
	return (
		<>
			<div className="bg-green-700 relative">
				<div className="overflow-x-hidden mx-auto w-[375px]">
					<img
						src={map}
						alt="Map"
						className="pb-24"
					/>
				</div>
			</div>

			<div>
				<a
					id="resort-link"
					className="absolute z-50 top-1">
					ss
				</a>
				<Tooltip
					anchorSelect="#resort-link" // Associates tooltip with this anchor
					clickable // Allows interaction with the tooltip content
				>
					<div className="p-2 text-center">
						<img
							src="https://via.placeholder.com/150" // Replace with actual image URL
							alt="Resort"
							className="w-24 h-24 object-cover mx-auto mb-2"
						/>
						<p className="text-sm font-bold mb-1">Beautiful Resort</p>
						<Link
							to="/resort/123" // Replace with the actual resort link
							className="text-blue-500 underline text-sm">
							View Resort Details
						</Link>
					</div>
				</Tooltip>
			</div>

			<BottomNav />
		</>
	);
}

export default Map;

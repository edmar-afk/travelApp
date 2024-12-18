import BottomNav from "../components/BottomNav";import map from "../assets/img/map.png";import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom"; // Import Link for navigation
import bakaFalls from '../assets/img/resorts/baka-falls.jpg';
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

			<div className="absolute z-50 top-[175px] right-[2px]">
				<a id="baka-falls" className=" border-2 p-2 rounded-full px-3 py-0.5"></a>
				<Tooltip
					anchorSelect="#baka-falls" // Associates tooltip with this anchor
					clickable // Allows interaction with the tooltip content
				>
					<div className="p-2 text-center">
						<img
							src={bakaFalls}
							alt="Resort"
							className="w-24 h-24 object-cover mx-auto mb-2"
						/>
						<p className="text-sm font-bold mb-1">Baka Falls</p>
						<Link
							to="/visitorDashboard/buildingDetails/5" // Replace with the actual resort link
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

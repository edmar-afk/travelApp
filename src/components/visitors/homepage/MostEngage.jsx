import sampleImg from "../../../assets/img/bg.jpg";import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import ExploreIcon from "@mui/icons-material/Explore";

// Function to format the number
const formatNumber = (num) => {
	if (num >= 1000000) {
		return (num / 1000000).toFixed(1) + "M"; // Format for millions
	} else if (num >= 1000) {
		return (num / 1000).toFixed(1) + "k"; // Format for thousands
	}
	return num; // Return the number as-is if less than 1000
};

// eslint-disable-next-line react/prop-types
function MostEngage({ locName, loveCount }) {
	return (
		<>
			<div className="flex flex-col relative mb-4 mx-4 min-w-[140px]">
				<div className="absolute top-0 h-full w-full rounded-2xl bg-gradient-to-t from-yellow-400/50"></div>
				<img
					src={sampleImg}
					className="w-[140px] h-[140px] object-cover rounded-2xl" // Adjusted class
					alt="Description of the image" // Added alt text
				/>
				<div className="absolute top-2 text-white left-2 text-xs">
					<div className="flex items-center">
						<VolunteerActivismIcon fontSize="small" />
						<p className="ml-1">{formatNumber(loveCount)} Loved this</p>
					</div>
				</div>

				<div className="absolute bottom-2 text-white left-2 text-xs">
					<div className="flex items-center">
						<ExploreIcon fontSize="small" />
						<p className="ml-1">{locName}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default MostEngage;

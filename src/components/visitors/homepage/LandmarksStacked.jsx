import sampleImg from "../../../assets/img/bg.jpg"; import ExploreIcon from "@mui/icons-material/Explore";

// eslint-disable-next-line react/prop-types
function LandmarksStacked({ locName }) {
	return (
		<>
			<div className="flex flex-col relative mb-4 mx-4 min-w-[150px]">
				<div className="absolute top-0 h-full w-full rounded-2xl bg-gradient-to-b from-gray-800/50"></div>
				<img
					src={sampleImg}
					className="w-[150px] h-[140px] object-cover rounded-2xl" // Adjusted class
					alt="Description of the image" // Added alt text
				/>
				<div className="absolute top-4 text-white left-4 text-xs">
					
				</div>

				<div className="absolute bottom-4 text-white left-4 text-xs">
					<div className="flex items-center">
						<ExploreIcon fontSize="small" />
						<p className="ml-1">{locName}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default LandmarksStacked;

import FavoriteIcon from "@mui/icons-material/Favorite";
function LocationDetail() {
	return (
		<>
			<div className="flex items-center relative">
				<FavoriteIcon
					fontSize="small"
					className="z-50 text-red-400"
				/>
				<div className="bg-white p-4 absolute rounded-full -left-[5px] animate-pulse"></div>
			</div>
		</>
	);
}

export default LocationDetail;

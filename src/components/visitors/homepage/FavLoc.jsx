import logo from "../../../assets/img/bg.jpg";// eslint-disable-next-line react/prop-types
function FavLoc({ name }) {
	return (
		<>
			<div className="flex flex-col items-center mx-3 min-w-[80px] mb-4">
				<img
					src={logo}
					width={60}
					alt=""
					className="w-16 h-16 rounded-full object-cover" // Ensure the width and height are equal for a perfect circle
				/>
				<p className="text-xs text-center mt-2">{name}</p>
			</div>
		</>
	);
}

export default FavLoc;

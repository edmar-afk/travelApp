import logo from "../../../assets/img/logo.png";

// eslint-disable-next-line react/prop-types
function FavLoc({ name }) {
	return (
		<>
			<div className="flex flex-col items-center mx-3 min-w-[80px] mb-4">
				<img
					src={logo}
					width={60}
					alt=""
					className="flex-shrink-0"
				/>
				<p className="text-xs text-center">{name}</p>
			</div>
		</>
	);
}

export default FavLoc;

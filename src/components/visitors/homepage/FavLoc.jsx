import logo from "../../../assets/img/logo.png";


// eslint-disable-next-line react/prop-types
function FavLoc({ name }) {
	return (
		<>
			<div className="flex flex-col items-center mx-3 flex-none mb-4">
				<img
					src={logo}
					width={60}
					alt=""
					className="flex-shrink-0" // Prevents the image from shrinking
				/>
				<p className="text-xs">{name}</p>
			</div>
		</>
	);
}

export default FavLoc;

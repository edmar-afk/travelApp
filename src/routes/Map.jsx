import BottomNav from "../components/BottomNav";
import map from "../assets/img/map.jpg";
function Map() {
	return (
		<>
			<img
				src={map}
                alt=""
                className="mt-8"
			/>
			<BottomNav />
		</>
	);
}

export default Map;

import BottomNav from "../components/BottomNav";import map from "../assets/img/map.jpg";
function Map() {
	return (
		<>
			<div className="overflow-x-hidden">
				{/* <img
				src={map}
                alt=""
                className="mt-8"
			/> */}
				<div className="overflow-x-scroll">
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d228886.9513670094!2d122.86495010816886!3d7.894541141682729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32540f292e85b3b1%3A0xd6e2d47531071ed0!2sLakewood%2C%20Zamboanga%20del%20Sur!5e1!3m2!1sen!2sph!4v1729742802952!5m2!1sen!2sph"
						width="600"
						height="1000"
						style={{ border: 0 }}
						allowFullScreen=""
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"></iframe>
				</div>
				<BottomNav />
			</div>
		</>
	);
}

export default Map;

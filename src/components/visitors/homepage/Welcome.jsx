/* eslint-disable react/no-unescaped-entities */
import welcome from "../../../assets/svg/welcome.svg";function Welcome() {
	return (
		<>
			<div className="flex flex-row items-center bg-white p-4 mt-6">
				<img
					src={welcome}
					className="w-32"
					alt=""
				/>
				<div className="max-h-24 overflow-y-scroll">
					<p className="font-bold ml-2">Welcome to Lakewood!</p>
					<p className="text-xs">
						Lakewood ZDS is a serene and picturesque destination that seamlessly blends natural beauty with modern
						amenities, making it an ideal spot for relaxation, recreation, and exploration. Nestled amidst lush greenery
						and overlooking a tranquil lake, Lakewood ZDS offers stunning views and a peaceful ambiance that captivates
						visitors from the moment they arrive. Whether you're looking to enjoy a leisurely stroll along its scenic
						trails, engage in exciting water activities like kayaking or paddleboarding, or simply unwind by the
						lakeside with a good book, Lakewood ZDS provides an experience that caters to every preference. The area is
						well-equipped with facilities for picnicking, family gatherings, and outdoor events, ensuring a comfortable
						and enjoyable stay. With its commitment to preserving the natural environment while offering modern
						comforts, Lakewood ZDS is a perfect retreat for nature lovers, adventure enthusiasts, and families alike.
					</p>
				</div>
			</div>
		</>
	);
}

export default Welcome;

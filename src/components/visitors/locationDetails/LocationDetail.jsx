/* eslint-disable react/no-unescaped-entities */ import locSample from "../../../assets/img/bg.jpg";import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";import { Link } from "react-router-dom";import CorporateFareIcon from "@mui/icons-material/CorporateFare";import Diversity1Icon from "@mui/icons-material/Diversity1";
import ApprovalIcon from "@mui/icons-material/Approval";

function LocationDetail() {
	return (
		<>
			<div className="relative bg-white h-full">
				<Link
					to={"/visitorDashboard"}
					className="absolute top-8 left-4 bg-white rounded-full p-1 flex items-center justify-center">
					<ArrowBackIosIcon className="block pl-1.5" />
				</Link>

				<img
					src={locSample}
					alt=""
					className="h-[350px] w-full rounded-b-[40px] shadow-2xl object-cover"
				/>

				<div className="flex flex-col p-4">
					<div className="flex flex-row justify-between items-center">
						<div>
							<p className="font-bold">Lakewood Zamboanga del Sur</p>
							<p className="flex mt-3">
								<span className="text-gray-500 mr-1">Tourist Spot / </span>
								<span className="text-yellow-900">Funded in Aug 26, 2024</span>
							</p>
						</div>
					</div>
					<div className="my-6 flex flex-row justify-evenly items-center text-sm">
						<div className="flex flex-col items-center">
							<Diversity1Icon
								fontSize="large"
								className="text-gray-600"
							/>
							<p className="mt-4">People's Love</p>
							<p className="font-bold">1.2k</p>
						</div>
						<div className="flex flex-col items-center">
							<CorporateFareIcon
								fontSize="large"
								className="text-gray-600"
							/>
							<p className="mt-4">Building Type</p>
							<p className="font-bold">Warehouse</p>
						</div>
						<div className="flex flex-col items-center">
							<ApprovalIcon
								fontSize="large"
								className="text-gray-600"
							/>
							<p className="mt-4">Landmark</p>
							<p className="font-bold">Waterfalls</p>
						</div>
					</div>
					<div className="mt-4 mb-16">
						<p className="text-justify">
							Lakewood ZDS is a serene and picturesque destination that seamlessly blends natural beauty with modern
							amenities, making it an ideal spot for relaxation, recreation, and exploration. Nestled amidst lush
							greenery and overlooking a tranquil lake, Lakewood ZDS offers stunning views and a peaceful ambiance that
							captivates visitors from the moment they arrive. <br />
							<br /> Whether you're looking to enjoy a leisurely stroll along its scenic trails, engage in exciting
							water activities like kayaking or paddleboarding, or simply unwind by the lakeside with a good book,
							Lakewood ZDS provides an experience that caters to every preference. <br />
							<br /> The area is well-equipped with facilities for picnicking, family gatherings, and outdoor events,
							ensuring a comfortable and enjoyable stay. With its commitment to preserving the natural environment while
							offering modern comforts, Lakewood ZDS is a perfect retreat for nature lovers, adventure enthusiasts, and
							families alike.
						</p>
					</div>

					<div className="fixed -left-0 bottom-0 h-[250px] w-full bg-gradient-to-t from-white"></div>
					<div className="fixed w-full bottom-2 left-1/2 transform -translate-x-1/2 flex justify-center mx-auto hover:scale-110 duration-300">
						<div className="bg-yellow-600 text-white py-2 px-24 rounded-full">Love this Place</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default LocationDetail;

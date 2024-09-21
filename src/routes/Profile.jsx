import BottomNav from "../components/BottomNav";/* eslint-disable react/no-unescaped-entities */ import bg from "../assets/img/bg.jpg";
import logo from "../assets/img/logo.png";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import PlaceIcon from "@mui/icons-material/Place";
import HikingIcon from "@mui/icons-material/Hiking";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link } from "react-router-dom";
function Profile() {
	const userData = JSON.parse(localStorage.getItem("userData")) || {};
	return (
		<>
			<div className="flex flex-wrap items-center justify-center mb-44">
				<div className="container w-full flex flex-col items-center bg-white shadow-lg transform duration-200 easy-in-out">
					<div className="h-72 overflow-hidden">
						<img
							className="w-full bg-cover"
							src={bg}
							alt=""
						/>
					</div>
					<div className="relative flex justify-center px-5 -mt-12 mb-4 w-full">
						<img
							className="h-32 w-32 bg-white border-4 border-yellow-500 p-2 rounded-full"
							src={logo}
							alt=""
						/>
						<Link to={'/logout'} className="absolute right-4 top-14 text-red-400 font-semibold flex items-center">
							<LogoutIcon
								fontSize=""
								className="mr-1"
							/>
							Logout
						</Link>
					</div>
					<div className=" ">
						<div className="text-center px-4">
							<h2 className="text-gray-800 text-xl font-bold">{userData.first_name}</h2>
							<a
								className="text-yellow-900 mt-2 flex items-center justify-center"
								href="https://www.instagram.com/immohitdhiman/"
								target="BLANK()">
								<HikingIcon
									fontSize="small"
									className="mr-2"
								/>
								Traveler
							</a>
							<p className="mt-2 text-gray-500 text-xs">
								Welcome to Lakewood! Renowned for its stunning landscapes, rich culture, and warm hospitality. Whether
								you're seeking a serene escape or a taste of nature's beauty, Lakewood is the perfect destination for
								you!
							</p>
						</div>
						<hr className="mt-6" />
						<div className="flex bg-gray-50 items-center justify-evenly">
							<div className="text-center p-4 hover:bg-gray-100 cursor-pointer">
								<p className="font-semibold text-xs flex items-center justify-center">
									<LocalPhoneIcon
										fontSize=""
										className="mr-1"
									/>
									{userData.username}
								</p>
							</div>
							<div className="border"></div>
							<div className="text-center p-4 hover:bg-gray-100 cursor-pointer">
								<p className="text-xs font-semibold flex items-center">
									<PlaceIcon
										fontSize=""
										className="mr-1"
									/>
									{userData.last_name}
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<BottomNav />
		</>
	);
}

export default Profile;

import { NavLink } from "react-router-dom";import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import MapIcon from "@mui/icons-material/Map";
function BottomNav() {
	return (
		<div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
			<div className="grid h-full max-w-lg grid-cols-5 mx-auto font-medium">
				<NavLink
					to="/visitorDashboard"
					className={({ isActive }) =>
						`inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x ${
							isActive ? "bg-yellow-600 text-white" : "hover:bg-gray-50"
						} group`
					}>
					<HomeOutlinedIcon />
					<span className="text-xs">Home</span>
				</NavLink>
				<NavLink
					to="/favorites"
					className={({ isActive }) =>
						`inline-flex flex-col items-center justify-center px-5 border-e border-gray-200 ${
							isActive ? "bg-yellow-500" : "hover:bg-gray-50"
						} group`
					}>
					<FavoriteBorderOutlinedIcon />
					<span className="text-xs">Favorites</span>
				</NavLink>
				<NavLink
					to="/chatbot"
					className={({ isActive }) =>
						`inline-flex flex-col items-center justify-center px-5 ${
							isActive ? "bg-yellow-500" : "hover:bg-gray-50"
						} group`
					}>
					<SmartToyOutlinedIcon />
					<span className="text-xs">Chatbot</span>
				</NavLink>
				<NavLink
					to="/map"
					className={({ isActive }) =>
						`inline-flex flex-col items-center justify-center px-5 ${
							isActive ? "bg-yellow-500" : "hover:bg-gray-50"
						} group`
					}>
					<MapIcon />
					<span className="text-xs">Map</span>
				</NavLink>
				<NavLink
					to="/profile"
					className={({ isActive }) =>
						`inline-flex flex-col items-center justify-center px-5 border-gray-200 ${
							isActive ? "bg-yellow-500" : "hover:bg-gray-50"
						} group border-x`
					}>
					<PersonOutlineOutlinedIcon />
					<span className="text-xs">Profile</span>
				</NavLink>
			</div>
		</div>
	);
}

export default BottomNav;

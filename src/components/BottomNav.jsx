import { NavLink } from "react-router-dom";import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import SmartToyOutlinedIcon from "@mui/icons-material/SmartToyOutlined";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";

function BottomNav() {
	return (
		<div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200">
			<div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
				<NavLink
					to="/visitorDashboard"
					className={({ isActive }) =>
						`inline-flex flex-col items-center justify-center px-5 border-gray-200 border-x ${
							isActive ? "bg-yellow-600 text-white" : "hover:bg-gray-50"
						} group`
					}>
					<HomeOutlinedIcon />
					<span className="text-sm">Home</span>
				</NavLink>
				<NavLink
					to="/favorites"
					className={({ isActive }) =>
						`inline-flex flex-col items-center justify-center px-5 border-e border-gray-200 ${
							isActive ? "bg-yellow-500" : "hover:bg-gray-50"
						} group`
					}>
					<FavoriteBorderOutlinedIcon />
					<span className="text-sm">Favorites</span>
				</NavLink>
				<NavLink
					to="/chatbot"
					className={({ isActive }) =>
						`inline-flex flex-col items-center justify-center px-5 ${
							isActive ? "bg-yellow-500" : "hover:bg-gray-50"
						} group`
					}>
					<SmartToyOutlinedIcon />
					<span className="text-sm">Chatbot</span>
				</NavLink>
				<NavLink
					to="/profile"
					className={({ isActive }) =>
						`inline-flex flex-col items-center justify-center px-5 border-gray-200 ${
							isActive ? "bg-yellow-500" : "hover:bg-gray-50"
						} group border-x`
					}>
					<PersonOutlineOutlinedIcon />
					<span className="text-sm">Profile</span>
				</NavLink>
			</div>
		</div>
	);
}

export default BottomNav;

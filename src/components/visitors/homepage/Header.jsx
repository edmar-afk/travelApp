import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import ExitToAppOutlinedIcon from "@mui/icons-material/ExitToAppOutlined";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
function Header({ name, address }) {
	return (
		<>
			<div className="pt-14 flex flex-row justify-between items-center p-4">
				<div className="flex items-center">
					<AccountCircleOutlinedIcon
						fontSize="large"
						sx={{ fontSize: "50px" }}
						className="text-gray-800"
					/>
					<div className="flex flex-col justify-evenly ml-1">
						<p className="font-bold text-sm">Welcome, {name}</p>
						<p className="text-xs">
							<LocationOnOutlinedIcon className="text-yellow-800" /> {address}
						</p>
					</div>
				</div>
				<Link to={"/logout"}>
					<ExitToAppOutlinedIcon
						fontSize="large"
						sx={{ fontSize: "30px" }}
						className="text-red-800"
					/>
				</Link>
			</div>
		</>
	);
}

export default Header;

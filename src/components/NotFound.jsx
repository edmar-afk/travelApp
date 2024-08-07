/* eslint-disable react/no-unescaped-entities */ 
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
function NotFound() {
	return (
		<>
			<div className="text-center pt-[30%] bg-blue-900 h-screen">
				<img
					src='#'
					alt=""
				/>
				<p className="text-7xl text-white">404</p>
				<p className="text-xl text-white mt-4">The page you are looking <br /> for doesn't exists.</p>
				<br />
				<Link
					to={"/"}
					className="text-white flex items-center justify-center bg-blue-700 w-fit mx-auto py-1.5 px-3 rounded-lg shadow-2xl">
					Back to Home{" "}
					<HomeIcon
						fontSize="small"
						className="ml-1"
					/>
				</Link>
			</div>
		</>
	);
}

export default NotFound;

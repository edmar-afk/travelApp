/* eslint-disable react/no-unescaped-entities */ import { useNavigate } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import logo from "../assets/img/logo.png";
function NotFound() {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1); // Navigate back one step in the history stack
	};

	return (
		<div className="text-center pt-[20%] bg-yellow-900 h-screen">
			<img
				src={logo}
				width={200}
				className="mx-auto mb-8"
				alt=""
			/>
			<p className="text-7xl text-white">404</p>
			<p className="text-xl text-white mt-4">
				The page you are looking <br /> for still under maintenance.
			</p>
			<br />
			<button
				onClick={handleGoBack}
				className="text-white flex items-center justify-center bg-yellow-700 w-fit mx-auto py-1.5 px-3 rounded-lg shadow-2xl">
				Back{" "}
				<HomeIcon
					fontSize="small"
					className="ml-1"
				/>
			</button>
		</div>
	);
}

export default NotFound;

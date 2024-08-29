import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import SmartToyIcon from "@mui/icons-material/SmartToy";
import { useNavigate } from "react-router-dom";
import Chatbot from "../components/visitors/chats/Chatbot";
const YourComponent = () => {
	const navigate = useNavigate();

	const handleBack = () => {
		navigate(-1); // Go back to the last visited page
	};

	return (
		<div className="bg-white h-full relative">
			<div className="w-full p-4 flex items-center justify-between fixed border-b-2 shadow-lg pt-12 bg-white">
				<ArrowBackIosIcon
					onClick={handleBack}
					className="cursor-pointer"
				/>
				<div className="flex items-center">
					<p>Travel Guide Assistance</p>
					<SmartToyIcon
						fontSize="large"
						className="text-yellow-800 ml-3"
					/>
				</div>
			</div>
			<Chatbot />
		</div>
	);
};

export default YourComponent;

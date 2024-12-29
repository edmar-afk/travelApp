import CancelIcon from "@mui/icons-material/Cancel";
import Chatbot from "../chats/Chatbot";

function ChatbotBuildings({ isVisible, onClose, resortName }) {
	return (
		<div
			className={`w-full fixed bottom-0 left-0 z-50 bg-white rounded-t-2xl transition-all duration-500 ease-in-out ${
				isVisible ? "h-[500px]" : "h-0"
			}`}>
			<div>
				<div className="pt-4 fixed w-full bg-white">
					<p className="w-14 bg-gray-300 h-1 mx-auto"></p>
					<div className="flex flex-row justify-between p-4">
						<p className="font-bold break-all pr-7">Chatbot for {resortName}</p>
						<CancelIcon
							className="text-red-600 cursor-pointer"
							onClick={onClose}
						/>
					</div>
				</div>

				{isVisible && <Chatbot />}
			</div>
		</div>
	);
}

export default ChatbotBuildings;

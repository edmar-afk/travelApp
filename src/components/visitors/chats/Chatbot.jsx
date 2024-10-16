import { useState, useRef, useEffect } from "react";import Receiver from "./Receiver";
import Sender from "./Sender";
import api from "../../../assets/api";
import Choices from "./Choices";

function Chatbot() {
	const [userInput, setUserInput] = useState("");
	const [messages, setMessages] = useState([]);
	const [choicesVisible, setChoicesVisible] = useState(true); // State to track Choices visibility
	const endOfMessagesRef = useRef(null); // Ref to the end of the messages list

	// Function to handle user input change
	const handleInputChange = (e) => {
		setUserInput(e.target.value);
	};

	// Function to handle sending message
	const handleSendMessage = async () => {
		if (userInput.trim() === "") return;

		const lowerCaseUserInput = userInput.toLowerCase(); // Convert input to lowercase

		// Add user's question to the messages
		setMessages((prevMessages) => [...prevMessages, { sender: "user", text: userInput }]);

		// Add a loading message for chatbot's response
		setMessages((prevMessages) => [...prevMessages, { sender: "chatbot" }]);

		// Hide Choices when the message is sent
		setChoicesVisible(false);

		try {
			// Send user question to the chatbot API
			const response = await api.post("/api/chatbot/", {
				question: lowerCaseUserInput, // Ensure this matches the expected parameter name in your API
			});

			const answer = response.data.answer; // Ensure the response matches what your API returns

			// Simulate a delay before updating the response
			setTimeout(() => {
				setMessages((prevMessages) => [
					...prevMessages.slice(0, -1), // Remove the "Loading..." message
					{ sender: "chatbot", text: answer },
				]);
			}, 1500); // Delay for 1.5 seconds
		} catch (error) {
			console.error("Error sending message:", error);

			// Simulate a delay before updating the error message
			setTimeout(() => {
				setMessages((prevMessages) => [
					...prevMessages.slice(0, -1), // Remove the "Loading..." message
					{
						sender: "chatbot",
						text: "I'm sorry, I couldn't process your request at the moment.",
					},
				]);
			}, 1500); // Delay for 1.5 seconds
		}

		// Clear user input field
		setUserInput("");

		// Show Choices after a 2-second delay
		setTimeout(() => {
			setChoicesVisible(true);
		}, 2000);
	};

	// Function to handle setting user input from Choices
	const handleChoiceClick = (choiceText) => {
		setUserInput(choiceText);
		setChoicesVisible(false); // Hide Choices when a choice is clicked
		handleSendMessage();
	};

	// Scroll to bottom whenever messages change
	useEffect(() => {
		endOfMessagesRef.current?.scrollIntoView({ behavior: "smooth" });
	}, [messages]);

	return (
		<>
			<div className="bg-white h-screen px-4 overflow-x-hidden pt-8">
				<div className="w-full pt-24 pb-24">
					{/* Display messages dynamically */}
					{messages.map((message, index) => (
						<div key={index}>
							{message.sender === "user" ? <Sender text={message.text} /> : <Receiver text={message.text} />}
						</div>
					))}
					{/* Scroll to this element */}
					<div ref={endOfMessagesRef} />
					{/* Conditionally render Choices */}
					{choicesVisible && <Choices onChoiceClick={handleChoiceClick} />} {/* Pass the click handler */}
					<div className="fixed -left-0 bottom-0 h-[50px] w-full bg-white"></div>
					<div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 w-[350px] bg-white pl-3 pr-1 py-1 rounded-3xl border border-gray-200 items-center gap-1 inline-flex justify-between box-border">
						<div className="flex items-center gap-2">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								width="22"
								height="22"
								viewBox="0 0 22 22"
								fill="none">
								<g id="User Circle">
									<path
										id="icon"
										d="M6.05 17.6C6.05 15.3218 8.26619 13.475 11 13.475C13.7338 13.475 15.95 15.3218 15.95 17.6M13.475 8.525C13.475 9.89191 12.3669 11 11 11C9.6331 11 8.525 9.89191 8.525 8.525C8.525 7.1581 9.6331 6.05 11 6.05C12.3669 6.05 13.475 7.1581 13.475 8.525ZM19.25 11C19.25 15.5563 15.5563 19.25 11 19.25C6.44365 19.25 2.75 15.5563 2.75 11C2.75 6.44365 6.44365 2.75 11 2.75C15.5563 2.75 19.25 6.44365 19.25 11Z"
										stroke="#F59E0B"
										strokeWidth="1.6"
									/>
								</g>
							</svg>
							<input
								className="text-black w-[200px] text-xs font-medium leading-4 focus:outline-none"
								placeholder="Type here..."
								value={userInput}
								onChange={handleInputChange}
							/>
						</div>
						<div className="flex items-center gap-1">
							<button
								className="items-center flex px-3 py-2 bg-yellow-700 rounded-full shadow"
								onClick={handleSendMessage}>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 16 16"
									fill="none">
									<g id="Send 01">
										<path
											id="icon"
											d="M9.04071 6.959L6.54227 9.45744M6.89902 10.0724L7.03391 10.3054C8.31034 12.5102 8.94855 13.6125 9.80584 13.5252C10.6631 13.4379 11.0659 12.2295 11.8715 9.81261L13.0272 6.34566C13.7631 4.13794 14.1311 3.03408 13.5484 2.45139C12.9657 1.8687 11.8618 2.23666 9.65409 2.97257L6.18714 4.12822C3.77029 4.93383 2.56187 5.33664 2.47454 6.19392C2.38721 7.0512 3.48957 7.68941 5.69431 8.96584L5.92731 9.10074C6.23326 9.27786 6.38623 9.36643 6.50978 9.48998C6.63333 9.61352 6.72189 9.7665 6.89902 10.0724Z"
											stroke="white"
											strokeWidth="1.6"
											strokeLinecap="round"
										/>
									</g>
								</svg>
								<h3 className="text-white text-xs font-semibold leading-4 px-2">Send</h3>
							</button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Chatbot;

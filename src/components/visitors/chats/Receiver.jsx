/* eslint-disable react/prop-types */import React, { useState, useEffect } from "react";
import SmartToyIcon from "@mui/icons-material/SmartToy";

function Receiver({ text }) {
	const [displayText, setDisplayText] = useState("Typing....");
	const [animate, setAnimate] = useState(false);

	useEffect(() => {
		if (!text || text.trim() === "") {
			// Show "Typing...." initially
			setDisplayText("Typing....");
			setAnimate(false);
		} else {
			// Show the actual text with a typewriter effect
			setDisplayText(text);
			setAnimate(true);

			// Reset the animation state after the duration to allow re-triggering
			const timer = setTimeout(() => setAnimate(false), 4300); // Duration + delay (3s animation + 1.5s delay)

			return () => clearTimeout(timer);
		}
	}, [text]);

	return (
		<>
			<div className="grid pb-2">
				<div className="flex gap-2.5 mb-4">
					<SmartToyIcon
						fontSize="large"
						className="bg-yellow-900 text-white p-1 rounded-full"
					/>
					<div className="grid">
						<h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">Travel Guide</h5>
						<div className="grid">
							<div className="px-3.5 py-2 bg-gray-100 rounded justify-start break-words items-center">
								<h5
									className={`text-gray-900 text-sm font-normal break-words overflow-hidden whitespace-nowrap border-r-2 border-gray-500 ${
										animate ? "animate-typewriter" : ""
									}`}>
									{displayText}
								</h5>
							</div>
							<div className="justify-end items-center inline-flex mb-2.5">
								<h6 className="text-gray-500 text-xs font-normal leading-4 py-1">05:14 PM</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default Receiver;

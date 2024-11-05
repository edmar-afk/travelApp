/* eslint-disable react/prop-types */ function Choices({ onChoiceClick }) {	return (
		<>
			<div className="sticky bg-white bottom-14 flex flex-wrap justify-start space-y-2 space-x-2 h-[100px] overflow-y-auto shadow-2xl">
				<div
					className="bg-cyan-50 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick(
							"What are the best hiking trails in Lakewood for experienced hikers and how long does it takes to reach the area?"
						)
					}>
					<p>
						What are the best hiking trails in Lakewood for experienced hikers and how long does it takes to reach the
						area?
					</p>
				</div>
				<div
					className="bg-cyan-50 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("How long and how much does it cost to travel to all tourist spot in lakewood?")
					}>
					<p>How long and how much does it cost to travel to all tourist spot in lakewood?</p>
				</div>
				<div
					className="bg-cyan-50 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("Is it possible to hire a tour guide when visiting Camp lagkaw? If so, who can I contact?")
					}>
					<p>Is it possible to hire a tour guide when visiting Camp lagkaw? If so, who can I contact?</p>
				</div>
				<div
					className="bg-cyan-50 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() => onChoiceClick("What are the price ranges for accommodations in Roberto’s Villa Resort")}>
					<p>What are the price ranges for accommodations in Roberto’s Villa Resort</p>
				</div>
				<div
					className="bg-cyan-50 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() => onChoiceClick("How long and how much does it cost to travel in HexaK Spring Resort?")}>
					<p>How long and how much does it cost to travel in HexaK Spring Resort?</p>
				</div>
				<div
					className="bg-cyan-50 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("Is it possible to hire a tour guide when visiting Baka Falls? If so, who can I contact?")
					}>
					<p>Is it possible to hire a tour guide when visiting Baka Falls? If so, who can I contact?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() => onChoiceClick("What are the price ranges for accommodations in Roberto’s Villa Resort?")}>
					<p>What are the price ranges for accommodations in Roberto’s Villa Resort?</p>
				</div>
			</div>
		</>
	);
}

export default Choices;

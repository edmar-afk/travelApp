/* eslint-disable react/prop-types */ function Choices({ onChoiceClick }) {
	return (
		<>
			<div className="fixed bottom-16 flex flex-row overflow-x-scroll w-full">
				<div
					className="bg-yellow-50 shadow-lg text-xs p-2 rounded-full mx-3 flex items-center justify-center text-center cursor-pointer whitespace-nowrap"
					onClick={() => onChoiceClick("Are there any local markets or food stalls available in every tourist spot?")}>
					<p>Are there any local markets or food stalls available in every tourist spot?</p>
				</div>
				<div
					className="bg-yellow-50 shadow-lg text-xs p-2 rounded-full mx-3 flex items-center justify-center text-center cursor-pointer whitespace-nowrap"
					onClick={() => onChoiceClick("What are the best transportation options to reach the tourist destination?")}>
					<p>What are the best transportation options to reach the tourist destination?</p>
				</div>
				<div
					className="bg-yellow-50 shadow-lg text-xs p-2 rounded-full mx-3 flex items-center justify-center text-center cursor-pointer whitespace-nowrap"
					onClick={() =>
						onChoiceClick("Mayroon bang mga lokal na palengke o mga tindahan ng pagkain sa bawat tourist spot?")
					}>
					<p>Mayroon bang mga lokal na palengke o mga tindahan ng pagkain sa bawat tourist spot?</p>
				</div>
				<div
					className="bg-yellow-50 shadow-lg text-xs p-2 rounded-full mx-3 flex items-center justify-center text-center cursor-pointer whitespace-nowrap"
					onClick={() => onChoiceClick("Mayroon bang mga sasakyan o tricycle sa Lakewood?")}>
					<p>Mayroon bang mga sasakyan o tricycle sa Lakewood?</p>
				</div>
				<div
					className="bg-yellow-50 shadow-lg text-xs p-2 rounded-full mx-3 flex items-center justify-center text-center cursor-pointer whitespace-nowrap"
					onClick={() =>
						onChoiceClick("Mayroon bang budget-friendly na accommodation sa bawat tourist spot sa Lakewood?")
					}>
					<p>Mayroon bang budget-friendly na accommodation sa bawat tourist spot sa Lakewood?</p>
				</div>
				<div
					className="bg-yellow-50 shadow-lg text-xs p-2 rounded-full mx-3 flex items-center justify-center text-center cursor-pointer whitespace-nowrap"
					onClick={() => onChoiceClick("Unsa ang mga pangunahing atraksyon sa Lakewood?")}>
					<p>Unsa ang mga pangunahing atraksyon sa Lakewood?</p>
				</div>
			</div>
		</>
	);
}

export default Choices;

/* eslint-disable react/prop-types */
function Choices({ onChoiceClick }) {
	return (
		<>
			<div className="fixed bottom-16 flex flex-wrap justify-center w-full -ml-2 space-y-2">
				<div
					className="bg-cyan-50 shadow-lg text-xs p-2 rounded-full flex-grow  flex items-center justify-center cursor-pointer"
					onClick={() => onChoiceClick("Are there any local markets or food stalls available in every tourist spot?")}>
					<p>Are there any local markets or food stalls available in every tourist spot?</p>
				</div>
				<div
					className="bg-cyan-50 shadow-lg text-xs p-2 rounded-full flex-grow  flex items-center justify-center cursor-pointer"
					onClick={() => onChoiceClick("What are the best transportation options to reach the tourist destination?")}>
					<p>What are the best transportation options to reach the tourist destination?</p>
				</div>
				<div
					className="bg-cyan-50 shadow-lg text-xs p-2 rounded-full flex-grow  flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("Mayroon bang mga lokal na palengke o mga tindahan ng pagkain sa bawat tourist spot?")
					}>
					<p>Mayroon bang mga lokal na palengke o mga tindahan ng pagkain sa bawat tourist spot?</p>
				</div>
				<div
					className="bg-cyan-50 shadow-lg text-xs p-2 rounded-full flex-grow  flex items-center justify-center cursor-pointer"
					onClick={() => onChoiceClick("Mayroon bang mga sasakyan o tricycle sa Lakewood?")}>
					<p>Mayroon bang mga sasakyan o tricycle sa Lakewood?</p>
				</div>
				<div
					className="bg-cyan-50 shadow-lg text-xs p-2 rounded-full flex-grow  flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("Mayroon bang budget-friendly na accommodation sa bawat tourist spot sa Lakewood?")
					}>
					<p>Mayroon bang budget-friendly na accommodation sa bawat tourist spot sa Lakewood?</p>
				</div>
				<div
					className="bg-cyan-50 shadow-lg text-xs p-2 rounded-full flex-grow  flex items-center justify-center cursor-pointer"
					onClick={() => onChoiceClick("Unsa ang mga pangunahing atraksyon sa Lakewood?")}>
					<p>Unsa ang mga pangunahing atraksyon sa Lakewood?</p>
				</div>
			</div>
		</>
	);
}

export default Choices;

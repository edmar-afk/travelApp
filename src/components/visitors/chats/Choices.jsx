/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

function Choices({ onChoiceClick }) {
	return (
		<>
			<div className=" bg-white bottom-14 flex flex-wrap justify-start space-y-2 space-x-2 h-fit overflow-y-auto shadow-2xl">
				<div
					className="bg-cyan-50 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick(
							"What is the basis for the distance you provided in the information?"
						)
					}>
					<p>What is the basis for the distance you provided in the information?
						
					</p>
				</div>
				<div
					className="bg-cyan-50 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("It is possible to hire a tour guide when visiting Baka Falls? If so, who can I contact?")
					}>
					<p>It is possible to hire a tour guide when visiting Baka Falls? If so, who can I contact?</p>
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
					onClick={() => onChoiceClick("It is possible to hire a tour guide when visiting Meguranao Peak Busai? If so, who can I contact?")}>
					<p>It is possible to hire a tour guide when visiting Meguranao Peak Busai? If so, who can I contact?</p>
				</div>
				<div
					className="bg-cyan-50 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() => onChoiceClick("How long does it take to walk to Camp Lagkaw?")}>
					<p>How long does it take to walk to Camp Lagkaw?</p>
				</div>
				<div
					className="bg-cyan-50 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("How long does it take to walk to Meguranao Peak Busai?")
					}>
					<p>Is it possible to hire a tour guide when visiting Meguranao Peak Busai? If so, who can I contact?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("How long does it take to walk to Baka Falls?")
					}>
					<p>How long does it take to walk to Baka Falls?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("How long and how much doest it cost to travel to all tourist spot in Lakewood?")
					}>
					<p>How long and how much doest it cost to travel to all tourist spot in Lakewood?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("How long and how much doest it cost to travel to all tourist spot in Lakewood?")
					}>
					<p>How long and how much doest it cost to travel to all tourist spot in Lakewood?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("How long and how much doest it cost to travel Libas Spring Resort?")
					}>
					<p>How long and how much doest it cost to travel Libas Spring Resort?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("How long and how much doest it cost to travel HexaK Spring Resort?")
					}>
					<p>How long and how much doest it cost to travel HexaK Spring Resort?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("How long and how much doest it cost to travel Meguranao Peak Busai?")
					}>
					<p>How long and how much doest it cost to travel Meguranao Peak Busai?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("How long and how much doest it cost to travel Lakewood Boulevard?")
					}>
					<p>How long and how much doest it cost to travel Lakewood Boulevard?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("How long and how much doest it cost to travel Alindahaw Lakeview Resort?")
					}>
					<p>How long and how much doest it cost to travel Alindahaw Lakeview Resort?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("How long and how much doest it cost to travel Floating Cottage?")
					}>
					<p>How long and how much doest it cost to travel Floatting Cottage?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("How long and how much doest it cost to travel Villa Innocentes?")
					}>
					<p>How long and how much doest it cost to travel Villa Innocentes?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("How long and how much doest it cost to Camp Lagkaw?")
					}>
					<p>How long and how much doest it cost to travel Capm Lagkaw?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("How long and how much doest it cost to Roberto's Villa Resort?")
					}>
					<p>How long and how much doest it cost to travel Roberto's Villa REsort?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("How long and how much doest it cost to travel PG Suie Spot?")
					}>
					<p>How long and how much doest it cost to travel PG Suite Spot?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("What are some things to do today in Lakewood boulevard?")
					}>
					<p>What are some things to do today in Lakewood boulevard?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("What are the best hiking trails in Lakewood for experienced hikers and how long does it takes to reach the area?")
					}>
					<p>What are the best hiking trails in Lakewood for experienced hikers and how long does it takes to reach the area?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("What are the ranges for accommodation in Libas Spring Resort?")
					}>
					<p>"What are the ranges for accommodation in Libas Spring Resort?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("What are the ranges for accommodation in HexaK Spring Resort?")
					}>
					<p>"What are the ranges for accommodation in HexaK Spring Resort?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("What are the ranges for accommodation in Meguranao Peak Busai?")
					}>
					<p>"What are the ranges for accommodation in Meguranao Peak Busai?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("What are the ranges for accommodation in Alindahaw Lakeview Resort?")
					}>
					<p>"What are the ranges for accommodation in Alindahaw Lakeview Resort?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("What are the ranges for accommodation in Floating Cottage?")
					}>
					<p>"What are the ranges for accommodation in Libas Floating Cottage?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("What are the ranges for accommodation in Villa Innocentes")
					}>
					<p>"What are the ranges for accommodation in Villa Innocentes?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("What are the ranges for accommodation in Camp Lagkaw?")
					}>
					<p>"What are the ranges for accommodation in Camp Lagkaw?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("What are the ranges for accommodation in Roberto's Villa REsort?")
					}>
					<p>"What are the ranges for accommodation in Roberto's Villa Resort?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("What are the ranges for accommodation in PG Suite Spot?")
					}>
					<p>"What are the ranges for accommodation in PG Suite Spot?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("What types of accommodation are available in Lakewood?")
					}>
					<p>"What types of accommodation are available in Lakewood?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("Do any resort or tourist spot offer free Wi-Fi?")
					}>
					<p>Do any resort or tourist spot offer free Wi-Fi?</p>
				</div>
				<div
					className="bg-cyan-50 mb-2 shadow-lg text-[9px] w-fit p-2 rounded-full flex items-center justify-center cursor-pointer"
					onClick={() =>
						onChoiceClick("Is it possible to book accomodations in Lakewood online?")
					}>
					<p>Is it possible to book accomodations in Lakewood online?</p>
				</div>

			</div>
		</>
	);
}

export default Choices;

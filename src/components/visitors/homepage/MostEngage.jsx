import sampleImg from "../../../assets/img/bg.jpg";
function MostEngage() {
	return (
		<>
			<div className="flex flex-col relative mb-24 mx-4 min-w-[140px]">
				<img
					src={sampleImg}
					className="w-[140px] h-[140px] object-cover rounded-2xl" // Adjusted class
					alt="Description of the image" // Added alt text
				/>
			</div>
		</>
	);
}

export default MostEngage;

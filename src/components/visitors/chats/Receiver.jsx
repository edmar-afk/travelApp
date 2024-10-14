/* eslint-disable react/prop-types */import SmartToyIcon from "@mui/icons-material/SmartToy";

function Receiver({ text }) {
	return (
		<div className="grid pb-2">
			<div className="flex gap-2.5 mb-4">
				<SmartToyIcon
					fontSize="large"
					className="bg-yellow-900 text-white p-1 rounded-full"
				/>
				<div className="grid mb-2">
					<div className="px-3 py-2 bg-yellow-100 rounded">
						<h2
							className="text-gray-800 text-sm font-normal leading-snug"
							dangerouslySetInnerHTML={{ __html: text }} // Render HTML
						/>
					</div>
					<div className="justify-start items-center inline-flex">
						<h3 className="text-gray-500 text-xs font-normal leading-4 py-1">05:14 PM</h3>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Receiver;

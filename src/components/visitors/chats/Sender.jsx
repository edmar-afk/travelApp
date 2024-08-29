/* eslint-disable react/prop-types */
import PersonIcon from "@mui/icons-material/Person";
function Sender({ text }) {
	return (
		<>
			<div className="flex gap-2.5 justify-end">
				<div className="">
					<div className="grid mb-2">
						<div className="px-3 py-2 bg-yellow-600 rounded">
							<h2 className="text-white text-sm font-normal leading-snug">{text}</h2>
						</div>
						<div className="justify-start items-center inline-flex">
							<h3 className="text-gray-500 text-xs font-normal leading-4 py-1">05:14 PM</h3>
						</div>
					</div>
				</div>
				<PersonIcon
					fontSize="large"
					className="bg-yellow-900 text-white p-1 rounded-full"
				/>
			</div>
		</>
	);
}

export default Sender;

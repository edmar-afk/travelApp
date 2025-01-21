/* eslint-disable react/no-unescaped-entities */ import BottomNav from "../components/BottomNav";import map from "../assets/img/map.png";import "react-tooltip/dist/react-tooltip.css";import { Tooltip } from "react-tooltip";
import { Link } from "react-router-dom"; // Import Link for navigation
import bakaFalls from "../assets/img/resorts/baka-falls.jpg";
import libasSpring from "../assets/img/resorts/libas.jpeg";
import hexaK from "../assets/img/resorts/hex.jpg";
import breebrix from "../assets/img/resorts/breebrix.jpeg";
import lakewoodBoulevard from "../assets/img/resorts/lakewoodBoulevard.jpeg";
import floatingCottage from "../assets/img/resorts/floating-cottage.jpeg";
import alindahaw from "../assets/img/resorts/alindahaw.jpeg";
import inocentes from "../assets/img/resorts/inocentes.jpeg";
import meguranao from "../assets/img/resorts/meguranao.jpeg";
import lagkaw from "../assets/img/resorts/campLagkaw.jpeg";
import atm from "../assets/img/resorts/ATM.jpeg";
import roberto from "../assets/img/resorts/roberto.jpeg";
import pgsuite from "../assets/img/resorts/PGsuite.png";
import { useState } from "react";

function Map() {
	const [scale, setScale] = useState(1);

	const increaseScale = () => {
		setScale((prevScale) => prevScale + 0.1);
	};

	const decreaseScale = () => {
		setScale((prevScale) => Math.max(prevScale - 0.1, 0.1)); // Prevents scale from going below 0.1
	};
	return (
		<>
			<div className="bg-green-700 relative pb-24">
				<div className="overflow-auto mx-auto w-[375px]">
					<div className="fixed top-4 right-4 flex space-x-4 z-50">
						<button
							onClick={increaseScale}
							className="bg-white text-green-600 py-1 px-3 text-lg rounded-full">
							+
						</button>
						<button
							onClick={decreaseScale}
							className="bg-white text-green-600 py-1 px-3 text-lg rounded-full">
							-
						</button>
					</div>
					<img
						src={map}
						alt="Map"
						className="pb-24"
						style={{ transform: `scale(${scale})` }}
					/>
				</div>

				<div className="absolute z-50 top-[175px] right-[2px]">
					<a
						id="baka-falls"
						className=" border-2 p-2 rounded-full border-transparent px-3 py-0.5"></a>
					<Tooltip
						anchorSelect="#baka-falls" // Associates tooltip with this anchor
						clickable // Allows interaction with the tooltip content
					>
						<div className="p-2 text-center">
							<img
								src={bakaFalls}
								alt="Resort"
								className="w-24 h-24 object-cover mx-auto mb-2"
							/>
							<p className="text-sm font-bold mb-1">Baka Falls</p>
							<Link
								to="/visitorDashboard/buildingDetails/5" // Replace with the actual resort link
								className="text-blue-500 underline text-sm">
								View Resort Details
							</Link>
						</div>
					</Tooltip>
				</div>

				<div className="absolute z-50  top-[355px] left-[60px]">
					<a
						id="libas-spring"
						className=" border-2 p-2 rounded-full border-transparent px-3 py-0.5"></a>
					<Tooltip
						anchorSelect="#libas-spring" // Associates tooltip with this anchor
						clickable // Allows interaction with the tooltip content
					>
						<div className="p-2 text-center">
							<img
								src={libasSpring}
								alt="Resort"
								className="w-24 h-24 object-cover mx-auto mb-2"
							/>
							<p className="text-sm font-bold mb-1">Libas Spring</p>
							<Link
								to="/visitorDashboard/buildingDetails/4" // Replace with the actual resort link
								className="text-blue-500 underline text-sm">
								View Resort Details
							</Link>
						</div>
					</Tooltip>
				</div>

				<div className="absolute z-50  top-[440px] left-[5px]">
					<a
						id="hexa-k"
						className=" border-2 p-2 rounded-full border-transparent px-3 py-0.5"></a>
					<Tooltip
						anchorSelect="#hexa-k" // Associates tooltip with this anchor
						clickable // Allows interaction with the tooltip content
					>
						<div className="p-2 text-center">
							<img
								src={hexaK}
								alt="Resort"
								className="w-24 h-24 object-cover mx-auto mb-2"
							/>
							<p className="text-sm font-bold mb-1">Hexa K Spring Resort</p>
							<Link
								to="/visitorDashboard/buildingDetails/1" // Replace with the actual resort link
								className="text-blue-500 underline text-sm">
								View Resort Details
							</Link>
						</div>
					</Tooltip>
				</div>

				<div className="absolute z-50  top-[440px] left-[40px]">
					<a
						id="bree-brix"
						className=" border-2 p-2 rounded-full border-transparent px-3 py-0.5"></a>
					<Tooltip
						anchorSelect="#bree-brix" // Associates tooltip with this anchor
						clickable // Allows interaction with the tooltip content
					>
						<div className="p-2 text-center">
							<img
								src={breebrix}
								alt="Resort"
								className="w-24 h-24 object-cover mx-auto mb-2"
							/>
							<p className="text-sm font-bold mb-1">Bree-brix Brazil Resort</p>
							<Link
								to="/visitorDashboard/buildingDetails/13" // Replace with the actual resort link
								className="text-blue-500 underline text-sm">
								View Resort Details
							</Link>
						</div>
					</Tooltip>
				</div>

				<div className="absolute z-50  top-[430px] left-[205px]">
					<a
						id="lakewood-boulevard"
						className=" border-2 p-2 rounded-full border-transparent px-3 py-0.5"></a>
					<Tooltip
						anchorSelect="#lakewood-boulevard" // Associates tooltip with this anchor
						clickable // Allows interaction with the tooltip content
					>
						<div className="p-2 text-center">
							<img
								src={lakewoodBoulevard}
								alt="Resort"
								className="w-24 h-24 object-cover mx-auto mb-2"
							/>
							<p className="text-sm font-bold mb-1">Lakewood Boulevard</p>
							<Link
								to="/visitorDashboard/buildingDetails/12" // Replace with the actual resort link
								className="text-blue-500 underline text-sm">
								View Resort Details
							</Link>
						</div>
					</Tooltip>
				</div>

				<div className="absolute z-50  top-[390px] left-[265px]">
					<a
						id="floating-cottage"
						className=" border-2 p-2 rounded-full border-transparent px-3 py-0.5"></a>
					<Tooltip
						anchorSelect="#floating-cottage" // Associates tooltip with this anchor
						clickable // Allows interaction with the tooltip content
					>
						<div className="p-2 text-center">
							<img
								src={floatingCottage}
								alt="Resort"
								className="w-24 h-24 object-cover mx-auto mb-2"
							/>
							<p className="text-sm font-bold mb-1">Floating Cottage</p>
							<Link
								to="/visitorDashboard/buildingDetails/10" // Replace with the actual resort link
								className="text-blue-500 underline text-sm">
								View Resort Details
							</Link>
						</div>
					</Tooltip>
				</div>

				<div className="absolute z-50  top-[420px] left-[280px]">
					<a
						id="alindahaw-resort"
						className=" border-2 p-2 rounded-full border-transparent px-3 py-0.5"></a>
					<Tooltip
						anchorSelect="#alindahaw-resort" // Associates tooltip with this anchor
						clickable // Allows interaction with the tooltip content
					>
						<div className="p-2 text-center">
							<img
								src={alindahaw}
								alt="Resort"
								className="w-24 h-24 object-cover mx-auto mb-2"
							/>
							<p className="text-sm font-bold mb-1">Alindahaw Lakeview Resort</p>
							<Link
								to="/visitorDashboard/buildingDetails/11" // Replace with the actual resort link
								className="text-blue-500 underline text-sm">
								View Resort Details
							</Link>
						</div>
					</Tooltip>
				</div>

				<div className="absolute z-50  top-[420px] left-[280px]">
					<a
						id="alindahaw-resort"
						className=" border-2 p-2 rounded-full border-transparent px-3 py-0.5"></a>
					<Tooltip
						anchorSelect="#alindahaw-resort" // Associates tooltip with this anchor
						clickable // Allows interaction with the tooltip content
					>
						<div className="p-2 text-center">
							<img
								src={alindahaw}
								alt="Resort"
								className="w-24 h-24 object-cover mx-auto mb-2"
							/>
							<p className="text-sm font-bold mb-1">Alindahaw Lakeview Resort</p>
							<Link
								to="/visitorDashboard/buildingDetails/11" // Replace with the actual resort link
								className="text-blue-500 underline text-sm">
								View Resort Details
							</Link>
						</div>
					</Tooltip>
				</div>

				<div className="absolute z-50  top-[495px] left-[328px]">
					<a
						id="inocentes"
						className=" border-2 p-2 rounded-full border-transparent px-3 py-0.5"></a>
					<Tooltip
						anchorSelect="#inocentes" // Associates tooltip with this anchor
						clickable // Allows interaction with the tooltip content
					>
						<div className="p-2 text-center">
							<img
								src={inocentes}
								alt="Resort"
								className="w-24 h-24 object-cover mx-auto mb-2"
							/>
							<p className="text-sm font-bold mb-1">Villa Inocentes</p>
							<Link
								to="/visitorDashboard/buildingDetails/6" // Replace with the actual resort link
								className="text-blue-500 underline text-sm">
								View Resort Details
							</Link>
						</div>
					</Tooltip>
				</div>

				<div className="absolute z-50  top-[535px] left-[175px]">
					<a
						id="meguranao"
						className=" border-2 p-2 rounded-full border-transparent px-3 py-0.5"></a>
					<Tooltip
						anchorSelect="#meguranao" // Associates tooltip with this anchor
						clickable // Allows interaction with the tooltip content
					>
						<div className="p-2 text-center">
							<img
								src={meguranao}
								alt="Resort"
								className="w-24 h-24 object-cover mx-auto mb-2"
							/>
							<p className="text-sm font-bold mb-1">Meguranao Peak Busai</p>
							<Link
								to="/visitorDashboard/buildingDetails/9" // Replace with the actual resort link
								className="text-blue-500 underline text-sm">
								View Resort Details
							</Link>
						</div>
					</Tooltip>
				</div>

				<div className="absolute z-50  top-[665px] right-[1px]">
					<a
						id="camp-lagkaw"
						className=" border-2 p-2 rounded-full border-transparent px-3 py-0.5"></a>
					<Tooltip
						anchorSelect="#camp-lagkaw" // Associates tooltip with this anchor
						clickable // Allows interaction with the tooltip content
					>
						<div className="p-2 text-center">
							<img
								src={lagkaw}
								alt="Resort"
								className="w-24 h-24 object-cover mx-auto mb-2"
							/>
							<p className="text-sm font-bold mb-1">Camp Lagkaw</p>
							<Link
								to="/visitorDashboard/buildingDetails/7" // Replace with the actual resort link
								className="text-blue-500 underline text-sm">
								View Resort Details
							</Link>
						</div>
					</Tooltip>
				</div>

				<div className="absolute z-50  top-[700px] right-[1px]">
					<a
						id="atm-resort"
						className=" border-2 p-2 rounded-full border-transparent px-3 py-0.5"></a>
					<Tooltip
						anchorSelect="#atm-resort" // Associates tooltip with this anchor
						clickable // Allows interaction with the tooltip content
					>
						<div className="p-2 text-center">
							<img
								src={atm}
								alt="Resort"
								className="w-24 h-24 object-cover mx-auto mb-2"
							/>
							<p className="text-sm font-bold mb-1">ATM Resort</p>
							<Link
								to="/visitorDashboard/buildingDetails/14" // Replace with the actual resort link
								className="text-blue-500 underline text-sm">
								View Resort Details
							</Link>
						</div>
					</Tooltip>
				</div>

				<div className="absolute z-50 top-[740px] right-[75px]">
					<a
						id="roberto-villa"
						className=" border-2 p-2 rounded-full border-transparent px-3 py-0.5"></a>
					<Tooltip
						anchorSelect="#roberto-villa" // Associates tooltip with this anchor
						clickable // Allows interaction with the tooltip content
					>
						<div className="p-2 text-center">
							<img
								src={roberto}
								alt="Resort"
								className="w-24 h-24 object-cover mx-auto mb-2"
							/>
							<p className="text-sm font-bold mb-1">Roberto's Villa</p>
							<Link
								to="/visitorDashboard/buildingDetails/3" // Replace with the actual resort link
								className="text-blue-500 underline text-sm">
								View Resort Details
							</Link>
						</div>
					</Tooltip>
				</div>

				<div className="absolute z-50 top-[765px] right-[45px]">
					<a
						id="pg-suite"
						className=" border-2 p-2 rounded-full border-transparent px-3 py-0.5"></a>
					<Tooltip
						anchorSelect="#pg-suite" // Associates tooltip with this anchor
						clickable // Allows interaction with the tooltip content
					>
						<div className="p-2 text-center">
							<img
								src={pgsuite}
								alt="Resort"
								className="w-24 h-24 object-cover mx-auto mb-2"
							/>
							<p className="text-sm font-bold mb-1">PG Suite Spot</p>
							<Link
								to="/visitorDashboard/buildingDetails/8" // Replace with the actual resort link
								className="text-blue-500 underline text-sm">
								View Resort Details
							</Link>
						</div>
					</Tooltip>
				</div>
			</div>
			<BottomNav />
		</>
	);
}

export default Map;

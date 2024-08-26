/* eslint-disable react/no-unescaped-entities */ import welcome from "../../../assets/svg/welcome.svg";
function Welcome() {
	return (
		<>
			<div className="flex flex-row items-center bg-white p-4 mt-6">
				<img
					src={welcome}
					className="w-32"
					alt=""
				/>
				<div className="max-h-24 overflow-y-scroll">
					<p className="font-bold ml-2">Welcome to Lakewood!</p>
					<p className="text-xs">
						This is a serene municipality located near beautiful hills and trees this town is best known for the
						beautiful lake Wood which is a wonderful lake that mirrors the blue sky and the green surrounding
						environment. Due to the fact that the water is calm and mirrors the surroundings the reflection it forms is
						impressive and almost beautiful to be real
					</p>
				</div>
			</div>
		</>
	);
}

export default Welcome;

import logo from '../../../assets/img/logo.png';import logo1 from '../../../assets/img/logo1.jpg'
function Search() {
	return (
		<>
			<div className="flex flex-row items-center mx-5 mt-4 mb-4">
				<div className="bg-white flex flex-row items-center focus-within:border-yellow-500 overflow-hidden w-full">
					<img
						src={logo1}
						width={40}
						alt=""
					/>
					{/* <input
						type="email"
						placeholder="Search Landmark/Markets/etc..."
						className="w-full outline-none text-sm"
					/> */}
					<p className='ml-1'>Lakewood Zamboanga del Sur</p>
				</div>
				<img
					src={logo}
					width={40}
					alt=""
				/>
			</div>
		</>
	);
}

export default Search;

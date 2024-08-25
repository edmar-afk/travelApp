import logo from "../assets/img/logo.png";import { Link } from "react-router-dom";
import travel from "../assets/img/travel.svg";
const Homepage = () => {
	return (
		<div className="bg-gradient-to-b from-white from-50% via-yellow-700/40 pt-14 h-screen">
			<section className="relative">
				<div className="relative z-10 mx-auto px-4 py-8 md:px-8">
					<div>
						<img
							src={logo}
							alt=""
							className="w-16 mx-auto mb-4"
						/>
						<p className="text-center text-xs -mt-4 mb-8">Travel Made Easy</p>
					</div>
					<div className="space-y-5 max-w-4xl mx-auto text-center">
						<h2 className="text-4xl text-gray-800 font-extrabold mx-auto md:text-5xl">Welcome Travelers</h2>

						<p className="max-w-2xl mx-auto text-gray-800 text-sm">
							Lakewood is an enchanting destination known for its serene natural beauty and tranquil ambiance.
						</p>

						<div>
							<img
								src={travel}
								alt="Travel illustration"
								className="mx-auto w-72"
							/>
						</div>
					</div>

					<div className="mt-14 flex flex-row justify-evenly">
						<Link
							to={"/visitorDashboard"}
							className="bg-yellow-700 text-white py-1 px-6 rounded-2xl">
							Explore
						</Link>
						<Link
							to={"/login"}
							className="bg-yellow-700 text-white py-1 px-6 rounded-2xl">
							Login
						</Link>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Homepage;

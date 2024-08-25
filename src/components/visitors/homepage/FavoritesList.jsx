/* eslint-disable react/prop-types */ /* eslint-disable react/no-unescaped-entities */ import favIcon from "../../../assets/svg/favIcon.svg";import { Link } from "react-router-dom";
import FavLoc from "./FavLoc";
function FavoritesList({ userId }) {
	return (
		<div className="flex flex-col p-4">
			<p className="font-bold">Your Favorites</p>

			{/* Check if userId has a value */}
			{userId ? (
				<div id="hasUserId">
					<div className="flex flex-row mt-2 overflow-x-scroll whitespace-nowrap">
						<FavLoc name=" NHS" />
						<FavLoc name="Swimming Pool" />
						<FavLoc name="Municipal Hall" />
						<FavLoc name="Terminal" />
						<FavLoc name="Market" />
					</div>
				</div>
			) : (
				<div
					className="flex flex-row items-center"
					id="noUserId">
					{/* Content to display if userId is not present */}
					<img
						src={favIcon}
						className="w-28"
						alt="Favorites Icon"
					/>
					<div className="ml-3">
						<p className="text-sm font-bold">Ooops. Looks like you didn't log in</p>
						<p className="text-xs mt-1">
							<Link
								to="/login"
								className="font-bold text-yellow-900">
								Login First
							</Link>{" "}
							to save your favorite landmarks in Lakewood
						</p>
					</div>
				</div>
			)}
		</div>
	);
}

export default FavoritesList;

/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */ import favIcon from "../../../assets/svg/favIcon.svg";
import { Link } from "react-router-dom";

function FavoritesList({ userId }) {
	return (
		<div className="flex flex-col p-4">
			<p className="font-bold">Your Favorites</p>

			{/* Check if userId has a value */}
			{userId ? (
				<div
					className="flex flex-row"
					id="hasUserId">
					{/* Content to display if userId is present */}
					<p>Display if user has Id: {userId}</p>
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

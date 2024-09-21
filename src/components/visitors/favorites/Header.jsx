import ArrowBackIcon from "@mui/icons-material/ArrowBack";import { useNavigate } from "react-router-dom";

function Header() {
	const navigate = useNavigate();

	return (
		<div className="flex flex-row justify-between mx-4 pt-12">
			<button
				onClick={() => navigate(-1)}
				className="focus:outline-none">
				<ArrowBackIcon />
			</button>
			<p className="font-semibold">Your Favorites</p>
		</div>
	);
}

export default Header;

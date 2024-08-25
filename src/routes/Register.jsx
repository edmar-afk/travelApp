/* eslint-disable react/no-unescaped-entities */ import { useState, useEffect } from "react";import { Link, useNavigate } from "react-router-dom";
import api from "../assets/api";
import Swal from "sweetalert2";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CircularProgress from "@mui/material/CircularProgress";
import logo from "../assets/img/logo.png";
import NumbersIcon from "@mui/icons-material/Numbers";
import AssignmentIndIcon from "@mui/icons-material/AssignmentInd";
import HttpsIcon from "@mui/icons-material/Https";
import LocationOnIcon from "@mui/icons-material/LocationOn";
function Register() {
	const [firstName, setFirstName] = useState("");
	const [mobileNum, setMobileNum] = useState("");
	const [address, setAddress] = useState("");
	const [password, setPassword] = useState("");
	const [password2, setPassword2] = useState("");
	const [error, setError] = useState("");
	const [canSubmit, setCanSubmit] = useState(false);
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	// Function to check if passwords match
	const checkPasswordsMatch = () => {
		if (password && password2 && password !== password2) {
			setError("Passwords do not match");
		} else {
			setError((prevError) => (prevError === "Passwords do not match" ? "" : prevError));
		}
	};

	// Function to validate mobile number
	const validateMobileNum = (value) => {
		const regex = /^09\d{9}$/;
		if (!regex.test(value)) {
			setError("Please enter an 11-digit number starting with '09'.");
		} else {
			setError((prevError) => (prevError !== "Please enter an 11-digit number starting with '09'." ? prevError : ""));
		}
	};

	const handleMobileNumChange = (e) => {
		const value = e.target.value;
		setMobileNum(value);
		validateMobileNum(value);
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);
	};

	const handlePassword2Change = (e) => {
		setPassword2(e.target.value);
	};

	const handleAddressChange = (e) => {
		setAddress(e.target.value);
	};

	const handleFirstNameChange = (e) => {
		setFirstName(e.target.value);
	};

	useEffect(() => {
		checkPasswordsMatch();
		// Check if all required fields are filled
		if (firstName && mobileNum && password && password2 && !error) {
			setCanSubmit(true);
		} else {
			setCanSubmit(false);
		}
	}, [firstName, mobileNum, password, password2, error]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		if (password !== password2) {
			Swal.fire({
				title: "Error!",
				text: "Passwords do not match.",
				icon: "error",
				confirmButtonText: "OK",
			});
			setLoading(false);
			return;
		}

		try {
			const formData = {
				first_name: firstName,
				last_name: address, // Map address to last_name field
				username: mobileNum,
				password: password,
				password2: password2,
			};

			const res = await api.post("/api/register/", formData);

			if (res.status === 201) {
				navigate("/login", { state: { successMessage: "You have been registered successfully." } });
			} else {
				Swal.fire({
					title: "Error!",
					text: "Registration failed.",
					icon: "error",
					confirmButtonText: "OK",
				});
			}
		} catch (error) {
			let errorMessage = "Registration failed";
			if (error.response) {
				if (error.response.data && typeof error.response.data === "object") {
					errorMessage = Object.values(error.response.data).join(" ");
				} else if (error.response.data && error.response.data.detail) {
					errorMessage = error.response.data.detail;
				}
			}
			Swal.fire({
				title: "Error!",
				text: errorMessage,
				icon: "error",
				confirmButtonText: "OK",
			});
		} finally {
			setLoading(false);
		}
	};

	return (
		<>
			<Link
				to="/"
				className="p-3 flex items-center fixed top-14">
				<ArrowBackIcon className="text-gray-800" />
			</Link>
			<section className="bg-white">
				<div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
					<form
						className="w-full max-w-md pt-24"
						onSubmit={handleSubmit}>
						<div className="flex flex-col items-center justify-center mx-auto">
							<img
								className="w-24"
								src={logo}
								alt=""
							/>
							<p className="mt-8 font-bold text-3xl">Register</p>
						</div>

						<div className="relative flex items-center mt-8">
							<span className="absolute">
								<NumbersIcon className="mx-3 text-gray-500" />
							</span>
							<input
								type="number"
								value={mobileNum}
								onChange={handleMobileNumChange}
								className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-gray-600 focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Mobile Number"
							/>
						</div>
						<div className="relative flex items-center mt-6">
							<span className="absolute">
								<AssignmentIndIcon className="mx-3 text-gray-500" />
							</span>
							<input
								type="text"
								value={firstName}
								onChange={handleFirstNameChange}
								className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-gray-600 focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Full Name"
							/>
						</div>
						<div className="relative flex items-center mt-6">
							<span className="absolute">
								<LocationOnIcon className="mx-3 text-gray-500" />
							</span>
							<input
								type="text"
								value={address}
								onChange={handleAddressChange}
								className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-gray-600 focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Address"
							/>
						</div>
						<div className="relative flex items-center mt-6">
							<span className="absolute">
								<HttpsIcon className="mx-3 text-gray-500" />
							</span>
							<input
								type="password"
								value={password}
								onChange={handlePasswordChange}
								className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-gray-600 focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Password"
							/>
						</div>
						<div className="relative flex items-center mt-6">
							<span className="absolute">
								<HttpsIcon className="mx-3 text-gray-500" />
							</span>
							<input
								type="password"
								value={password2}
								onChange={handlePassword2Change}
								className="block w-full py-3 text-gray-700 bg-white border rounded-lg px-11 border-gray-600 focus:border-yellow-400 focus:ring-yellow-300 focus:outline-none focus:ring focus:ring-opacity-40"
								placeholder="Confirm Password"
							/>
						</div>
						<br />
						{error && <div className="text-red-500 text-center text-sm mt-8">{error}</div>}
						<button
							type="submit"
							disabled={!canSubmit}
							className="w-full mt-2 py-3 px-6 text-white bg-yellow-800 rounded-lg flex items-center justify-center">
							{loading ? (
								<CircularProgress
									color="inherit"
									size={24}
								/>
							) : (
								"Sign Up"
							)}
						</button>

						<div className="flex items-center justify-between mt-2 mb-8">
							<p className="text-gray-500">
								Already have an account?
								<Link
									to="/login"
									className="font-bold ml-1 text-yellow-600 hover:underline">
									Log in here
								</Link>
							</p>
						</div>
					</form>
				</div>
			</section>
		</>
	);
}

export default Register;

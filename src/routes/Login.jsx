/* eslint-disable react/no-unescaped-entities */ import { useState, useEffect } from "react";import { Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Swal from "sweetalert2";
import api from "../assets/api";
import HourglassBottomIcon from "@mui/icons-material/HourglassBottom";
const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [loading, setLoading] = useState(false);

	const navigate = useNavigate();
	const location = useLocation();

	useEffect(() => {
		if (location.state && location.state.successMessage) {
			alert(location.state.successMessage);
		}
	}, [location]);

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);

		try {
			const res = await api.post("/api/token/", { username, password });

			if (res.status === 200) {
				localStorage.setItem("ACCESS_TOKEN", res.data.access);
				localStorage.setItem("REFRESH_TOKEN", res.data.refresh);

				const userRes = await api.get("/api/user/", {
					headers: {
						Authorization: `Bearer ${res.data.access}`,
					},
				});

				localStorage.setItem("userData", JSON.stringify(userRes.data));
				navigate("/visitorDashboard");
			} else {
				Swal.fire({
					title: "Error!",
					text: "Login failed.",
					icon: "error",
					confirmButtonText: "OK",
				});
			}
		} catch (error) {
			Swal.fire({
				title: "Error!",
				text: error.response?.data?.detail || "Login failed",
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
				<ArrowBackIcon className="text-yellow-900" />
			</Link>
			<div className="h-screen bg-gradient-to-b from-yellow-500/30 pt-24">
				<div className="flex flex-col items-center justify-center mb-8 pt-24">
					<img
						src="#"
						className="w-40"
						alt=""
					/>
					<motion.p
						initial={{ scale: 0 }}
						animate={{ scale: 1 }}
						transition={{ type: "spring", stiffness: 160, damping: 30 }}
						className="text-white font-bold text-4xl">
						Login
					</motion.p>
				</div>

				<form
					className="w-full mt-1 h-full flex flex-col"
					onSubmit={handleSubmit}
					noValidate>
					<div className="relative mx-auto w-full max-w-md px-6 pt-10 pb-8">
						<div className="w-full">
							<div className="mt-5">
								<div>
									<div className="relative mt-6">
										<input
											type="number"
											name="username"
											id="username"
											value={username}
											onChange={(e) => setUsername(e.target.value)}
											placeholder="Your Username"
											className="peer mt-1 w-full border-b-2 text-white border-yellow-300 bg-transparent px-0 py-1 placeholder:text-transparent focus:border-yellow-500 focus:outline-none"
											autoComplete="username"
										/>
										<label
											htmlFor="username"
											className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-white opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-white">
											Your Mobile Number
										</label>
									</div>
									<div className="relative mt-10">
										<input
											type="password"
											name="password"
											id="password"
											value={password}
											onChange={(e) => setPassword(e.target.value)}
											placeholder="Password"
											className="peer mt-1 w-full text-white border-b-2 border-yellow-300 bg-transparent px-0 py-1 placeholder:text-transparent focus:border-yellow-500 focus:outline-none"
										/>
										<label
											htmlFor="password"
											className="pointer-events-none absolute top-0 left-0 origin-left -translate-y-1/2 transform text-sm text-white opacity-75 transition-all duration-100 ease-in-out peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-white peer-focus:top-0 peer-focus:pl-0 peer-focus:text-sm peer-focus:text-white">
											Password
										</label>
									</div>
								</div>

								<div className="my-6 mt-44">
									<p className="text-left text-sm text-white">
										Don't have an account yet?
										<Link
											to="/register"
											className="font-bold ml-2 text-white hover:underline focus:text-white focus:outline-none">
											Register here
										</Link>
										.
									</p>
									<button
										type="submit"
										className="w-full rounded-md bg-yellow-800 px-3 mt-4 py-4 text-white focus:bg-yellow-700 focus:outline-none">
										{loading ? <HourglassBottomIcon className="animate-spin" /> : "Login"}
									</button>
								</div>
							</div>
						</div>
					</div>
				</form>
			</div>
		</>
	);
};

export default Login;

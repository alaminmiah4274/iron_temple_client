import { useNavigate, useParams } from "react-router";
import apiClient from "../../services/api_client";
import ErrorAlert from "../ErrorAlert";
import SuccessAlert from "../SuccessAlert";
import { useEffect, useState } from "react";

const ActivateAccount = () => {
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const { uid, token } = useParams(); // to collect id and token from url
	const navigate = useNavigate();

	useEffect(() => {
		apiClient
			.post("/auth/users/activation/", { uid, token })
			.then((res) => {
				setMessage("Account activate successfully");
				setTimeout(() => navigate("/login"), 3000);
			})
			.catch((err) => {
				setError(
					"Something went wrong. Please check your activation link"
				);
				console.log(err);
			});
	}, []);

	return (
		<div className="flex items-center justify-center min-h-screen">
			<div className="card bg-base-100 shadow-xl p-6">
				<h2 className="text-2xl font-bold">Account Activation</h2>

				{/* showing success message */}
				{message && <SuccessAlert success={message} />}

				{/* showing error message */}
				{error && <ErrorAlert error={error} />}
			</div>
		</div>
	);
};

export default ActivateAccount;

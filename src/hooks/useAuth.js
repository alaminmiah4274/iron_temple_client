import { useEffect, useState } from "react";
import apiClient from "../services/api_client";

const useAuth = () => {
	const [user, setUser] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	// to get the authentication token
	const getToken = () => {
		const token = localStorage.getItem("authTokens");
		return token ? JSON.parse(token) : null;
	};

	const [authTokens, setAuthTokens] = useState(getToken());

	// to handle api related error
	const handleAPIError = (
		error,
		defaultMessage = "Something Went Wrong! Try Again"
	) => {
		if (error.response && error.response.data) {
			const errorMessage = Object.values(error.response.data)
				.flat()
				.join("\n");
			setErrorMsg(errorMessage);

			return { success: false, message: defaultMessage };
		} else {
			setErrorMsg(defaultMessage);

			return { success: false, message: defaultMessage };
		}
	};

	// to get the current user
	const fetchUserProfile = async () => {
		setErrorMessage("");
		try {
			const response = await apiClient.get("/auth/users/me/", {
				headers: { Authorization: `JWT ${authTokens?.access}` },
			});

			setUser(response.data);
		} catch (err) {
			setErrorMessage(err.response?.data?.detail);
		}
	};

	// to fetch the current user after every render(refresh)
	useEffect(() => {
		if (authTokens) fetchUserProfile();
	}, [authTokens]);

	// to login the user
	const loginUser = async (userData) => {
		setErrorMessage("");
		try {
			const response = await apiClient.post(
				"/auth/jwt/create/",
				userData
			);
			setAuthTokens(response.data);
			localStorage.setItem("authTokens", JSON.stringify(response.data));

			return { success: true };
		} catch (err) {
			console.log(err);

			return { success: false };
		}
	};

	// to logout the user
	const logoutUser = () => {
		setUser(null);
		setAuthTokens(null);

		localStorage.removeItem("authTokens");
	};

	// to register an user
	const registerUser = async (userData) => {
		setErrorMessage("");

		try {
			await apiClient.post("/auth/users/", userData);

			return {
				success: true,
				message:
					"Registration successful. Please check your email to activate your account",
			};
		} catch (err) {
			return handleAPIError(err, "Registration Failed! Try Again");
		}
	};

	return { user, loginUser, logoutUser, registerUser };
};

export default useAuth;

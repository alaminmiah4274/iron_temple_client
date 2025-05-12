import { useCallback, useEffect, useState } from "react";
import apiClient from "../services/api_client";
import authApiClient from "../services/auth_api_client";

const useAuth = () => {
	const [user, setUser] = useState(null);
	const [errorMessage, setErrorMessage] = useState("");
	const [successMessage, setSuccessMessage] = useState("");
	const [loading, setLoading] = useState(false);

	// to get the authentication token
	const getToken = () => {
		const token = localStorage.getItem("authTokens");
		return token ? JSON.parse(token) : null;
	};

	const [authTokens, setAuthTokens] = useState(getToken());

	// to handle api related error
	const handleAPIError = useCallback(
		(error, defaultMessage = "Something Went Wrong! Try Again") => {
			if (error.response && error.response.data) {
				const errorMessage = Object.values(error.response.data)
					.flat()
					.join("\n");
				setErrorMessage(errorMessage);

				return { success: false, message: defaultMessage };
			} else {
				setErrorMessage(defaultMessage);

				return { success: false, message: defaultMessage };
			}
		},
		[]
	);

	// to get the current user
	const fetchUserProfile = useCallback(async () => {
		setLoading(true);
		setErrorMessage("");
		try {
			const response = await apiClient.get("/auth/users/me/", {
				headers: { Authorization: `JWT ${authTokens?.access}` },
			});

			setUser(response.data);
			setLoading(false);
		} catch (err) {
			setErrorMessage(err.response?.data?.detail);
		}
	}, [authTokens]);

	// to fetch the current user after every render(refresh)
	useEffect(() => {
		if (authTokens) fetchUserProfile();
	}, [authTokens]);

	// to login the user
	const loginUser = useCallback(
		async (userData) => {
			setErrorMessage("");
			try {
				const response = await apiClient.post(
					"/auth/jwt/create/",
					userData
				);
				setAuthTokens(response.data);
				localStorage.setItem(
					"authTokens",
					JSON.stringify(response.data)
				);

				return { success: true };
			} catch (err) {
				setErrorMessage(err.response?.data?.detail);
				return { success: false };
			}
		},
		[setAuthTokens, setErrorMessage]
	);

	// to logout the user
	const logoutUser = useCallback(() => {
		setUser(null);
		setAuthTokens(null);

		localStorage.removeItem("authTokens");
	}, [setUser, setAuthTokens]);

	// to register a new user
	const registerUser = useCallback(
		async (userData) => {
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
		},
		[handleAPIError, setErrorMessage]
	);

	// to update an user
	const updateUserProfile = useCallback(
		async (data) => {
			setErrorMessage("");
			setSuccessMessage("");

			try {
				await authApiClient.put("/auth/users/me/", data);

				setSuccessMessage("Profile successfully updated");
			} catch (err) {
				return handleAPIError(err);
			}
		},
		[handleAPIError, setErrorMessage, setSuccessMessage]
	);

	// to change user password
	const changePassword = useCallback(
		async (data) => {
			setErrorMessage("");
			setSuccessMessage("");

			try {
				await authApiClient.post("/auth/users/set_password/", data);

				setSuccessMessage("Password changed successfully");
			} catch (err) {
				return handleAPIError(err);
			}
		},
		[handleAPIError, setErrorMessage, setSuccessMessage]
	);

	return {
		loading,
		successMessage,
		errorMessage,
		user,
		loginUser,
		logoutUser,
		registerUser,
		updateUserProfile,
		changePassword,
	};
};

export default useAuth;

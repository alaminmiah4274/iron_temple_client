import Spinner from "./Spinner";
import useAuthContext from "/src/hooks/useAuthContext.js";
import { Navigate } from "react-router";

const PrivateRoute = ({ children }) => {
	const { user, loading } = useAuthContext();

	if (loading) return <Spinner />;

	return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;

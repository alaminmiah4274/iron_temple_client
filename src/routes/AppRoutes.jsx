import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Classes from "../pages/Classes";
import Membership from "../components/Memberships/Membership";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ActivateAccount from "../components/Registration/ActivateAccount";
import PrivateRoute from "../components/PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="classes" element={<Classes />} />
				<Route path="memberships" element={<Membership />} />
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route
					path="/activate/:uid/:token"
					element={<ActivateAccount />}
				/>
			</Route>

			<Route
				path="dashboard"
				element={
					<PrivateRoute>
						<DashboardLayout />
					</PrivateRoute>
				}
			></Route>
		</Routes>
	);
};

export default AppRoutes;

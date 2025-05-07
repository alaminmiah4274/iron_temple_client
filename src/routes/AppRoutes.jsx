import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Classes from "../pages/Classes";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ActivateAccount from "../components/Registration/ActivateAccount";
import PrivateRoute from "../components/PrivateRoute";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/Dashboard";
import Bookings from "../components/Dashboard/Bookings";
import Users from "../pages/Users";
import Memberships from "../pages/Memberships";
import DashboardClass from "../pages/DashboardClass";
import DashboardMembership from "../pages/DashboardMembership";
import Subscriptions from "../pages/Subscriptions";
import Reviews from "../pages/Reviews";
import Payments from "/src/pages/Payments.jsx";

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="classes" element={<Classes />} />
				<Route path="memberships" element={<Memberships />} />
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
			>
				<Route index element={<Dashboard />} />
				<Route path="bookings" element={<Bookings />} />
				<Route path="users" element={<Users />} />
				<Route path="class" element={<DashboardClass />} />
				<Route path="membership" element={<DashboardMembership />} />
				<Route path="subscriptions" element={<Subscriptions />} />
				<Route path="reviews" element={<Reviews />} />
				<Route path="payments" element={<Payments />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;

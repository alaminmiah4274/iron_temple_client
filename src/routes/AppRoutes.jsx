import { Route, Routes } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Classes from "../pages/Classes";
import Membership from "../components/Memberships/Membership";

const AppRoutes = () => {
	return (
		<Routes>
			<Route element={<MainLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="classes" element={<Classes />} />
				<Route path="memberships" element={<Membership />} />
			</Route>
		</Routes>
	);
};

export default AppRoutes;

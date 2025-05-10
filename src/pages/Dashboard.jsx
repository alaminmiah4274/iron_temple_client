import { FiPackage, FiShoppingCart, FiStar, FiUsers } from "react-icons/fi";
import InfoCard from "../components/Dashboard/InfoCard";
import useAuthContext from "../hooks/useAuthContext";
import Attendance from "./Attendance";
import Users from "./Users";
import { useEffect, useState } from "react";
import authApiClient from "../services/auth_api_client";

const Dashboard = () => {
	const { user } = useAuthContext();
	const [totalSubscriptions, setTotalSubscriptions] = useState([]);
	const [totalBookings, setTotalBookings] = useState([]);
	const [ratings, setRatings] = useState([]);
	const [totalUsers, setTotalUsers] = useState([]);

	// fetching subscriptions
	useEffect(() => {
		authApiClient
			.get("/subscriptions/")
			.then((res) => setTotalSubscriptions(res.data));
	}, []);

	// fetching bookings
	useEffect(() => {
		authApiClient
			.get("/bookings/")
			.then((res) => setTotalBookings(res.data));
	}, []);

	//  users and ratings
	let averageRating = 0;
	if (user.is_staff) {
		useEffect(() => {
			authApiClient
				.get("/auth/users/")
				.then((res) => setTotalUsers(res.data));
		}, []);

		useEffect(() => {
			authApiClient.get("/feedback/").then((res) => setRatings(res.data));
		}, []);

		const totalRatings = ratings.reduce(
			(sum, review) => sum + review.ratings,
			0
		);
		averageRating = totalRatings / ratings.length;
	}

	return (
		<div>
			{/* dashboard card */}
			{user.is_staff ? (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
					<InfoCard
						icon={FiPackage}
						title="Total Subscriptions"
						value={totalSubscriptions.length}
					/>
					<InfoCard
						icon={FiShoppingCart}
						title="Total Bookings"
						value={totalBookings.length}
					/>
					<InfoCard
						icon={FiUsers}
						title="Total Users"
						value={totalUsers.length}
					/>
					<InfoCard
						icon={FiStar}
						title="Average Ratings"
						value={averageRating.toFixed(2)}
					/>
				</div>
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<InfoCard
						icon={FiPackage}
						title="Total Bookings"
						value={totalBookings.length}
					/>
					<InfoCard
						icon={FiShoppingCart}
						title="Total Subscriptions"
						value={totalSubscriptions.length}
					/>
				</div>
			)}

			{/* dashboard content */}
			{user.is_staff ? <Users /> : <Attendance />}
		</div>
	);
};

export default Dashboard;

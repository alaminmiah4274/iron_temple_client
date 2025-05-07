import { FiPackage, FiShoppingCart, FiStar, FiUsers } from "react-icons/fi";
import InfoCard from "../components/Dashboard/InfoCard";
import Bookings from "../components/Dashboard/Bookings";
import useAuthContext from "../hooks/useAuthContext";
import Users from "./Users";

const Dashboard = () => {
	const { user } = useAuthContext();

	return (
		<div>
			{/* dashboard card */}
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
				<InfoCard icon={FiPackage} title="Total Classes" value="14" />
				<InfoCard
					icon={FiShoppingCart}
					title="Total Bookings"
					value="70"
				/>
				<InfoCard icon={FiUsers} title="Total Users" value="70" />
				<InfoCard icon={FiStar} title="Average Rating" value="4.8" />
			</div>

			{/* dashboard content */}
			{user ? <Users /> : <Bookings />}
		</div>
	);
};

export default Dashboard;

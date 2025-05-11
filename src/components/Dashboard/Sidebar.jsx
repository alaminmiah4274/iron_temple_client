import { Link } from "react-router";
import {
	FiBarChart2,
	FiPackage,
	FiPlusCircle,
	FiShoppingCart,
	FiStar,
	FiTag,
	FiUsers,
} from "react-icons/fi";
import { MdOutlinePayment, MdCoPresent } from "react-icons/md";
import { BsCartCheckFill } from "react-icons/bs";
import useAuthContext from "../../hooks/useAuthContext";

const Sidebar = () => {
	const { user } = useAuthContext();

	const customerMenus = [
		{ to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
		{
			to: "/dashboard/subscriptions",
			icon: FiShoppingCart,
			label: "Subscriptions",
		},
		{ to: "/dashboard/bookings", icon: BsCartCheckFill, label: "Bookings" },
		{ to: "/dashboard/reviews", icon: FiStar, label: "Reviews" },
		{
			to: "/dashboard/makePayment",
			icon: MdOutlinePayment,
			label: "Make Payment",
		},
	];
	const adminMenus = [
		{ to: "/dashboard", icon: FiBarChart2, label: "Dashboard" },
		{ to: "/dashboard/class", icon: FiPackage, label: "Classes" },
		{
			to: "/dashboard/class/add",
			icon: FiPlusCircle,
			label: "Add Class",
		},
		{ to: "/dashboard/membership", icon: FiTag, label: "Memberships" },
		{
			to: "/dashboard/membership/add",
			icon: FiPlusCircle,
			label: "Add Membership",
		},
		{
			to: "/dashboard/subscriptions",
			icon: FiShoppingCart,
			label: "Subscriptions",
		},
		{ to: "/dashboard/bookings", icon: BsCartCheckFill, label: "Bookings" },
		{ to: "/dashboard/reviews", icon: FiStar, label: "Reviews" },
		{ to: "/dashboard/users", icon: FiUsers, label: "Users" },
		{
			to: "/dashboard/payments",
			icon: MdOutlinePayment,
			label: "Payments",
		},
		{
			to: "/dashboard/attendance",
			icon: MdCoPresent,
			label: "Attendance",
		},
		{
			to: "/dashboard/attendance/add",
			icon: FiPlusCircle,
			label: "Add Attendance",
		},
	];

	const menuItems = user.is_staff ? adminMenus : customerMenus;

	return (
		<div className="drawer-side z-10">
			<label
				htmlFor="drawer-toggle"
				aria-label="close sidebar"
				className="drawer-overlay"
			></label>
			<aside className="menu bg-rose-100 w-64 min-h-full p-4 text-base-content">
				{/*Sidebar Header*/}
				<div>
					<Link to="/" className="flex items-center gap-2 mb-6 px-2">
						<FiShoppingCart className="h-6 w-6" />
						<h1 className="text-xl font-bold">Iron Temple</h1>
					</Link>
				</div>

				{/*Sidebar menu*/}
				<ul className="menu menu-md gap-2">
					{menuItems.map((item, idx) => (
						<li key={idx}>
							<Link to={item.to} className="flex items-center">
								<item.icon className="h-4 w-4" />
								<span>{item.label}</span>
							</Link>
						</li>
					))}
				</ul>

				{/*Sidebar footer*/}
				<div className="mt-auto pt-6 text-xs text-base-content/70">
					2025 <span className="italic">Iron Temple</span> Admin
				</div>
			</aside>
		</div>
	);
};

export default Sidebar;

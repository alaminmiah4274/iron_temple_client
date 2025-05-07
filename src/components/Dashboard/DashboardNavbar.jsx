import { Link } from "react-router";
import { FiMenu, FiX } from "react-icons/fi";
import useAuthContext from "../../hooks/useAuthContext";

const DashboardNavbar = ({ sidebarOpen }) => {
	const { logoutUser } = useAuthContext();

	return (
		<div className="navbar bg-rose-600">
			<div className="flex-none lg:hidden">
				<label
					htmlFor="drawer-toggle"
					className="btn btn-square btn-ghost"
				>
					{sidebarOpen ? (
						<FiX className="h-5 w-5" />
					) : (
						<FiMenu className="h-5 w-5" />
					)}
				</label>
			</div>
			<div className="flex-1">
				<h2 className="text-lg font-semibold text-white">Dashboard</h2>
			</div>
			<div className="flex-none">
				<div className="dropdown dropdown-end">
					<label
						tabIndex={0}
						className="btn btn-ghost btn-circle avatar"
					>
						<div className="w-10 rounded-full">
							<img
								alt="User avatar"
								src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
							/>
						</div>
					</label>
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content mt-3 text-white z-[1] p-2 shadow bg-rose-600 rounded-md w-52"
					>
						<li>
							<Link to="/profile">Profile</Link>
						</li>
						<li>
							<button onClick={logoutUser}>Logout</button>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default DashboardNavbar;

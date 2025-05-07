import { Link } from "react-router";
import useAuthContext from "../hooks/useAuthContext";

const Navbar = () => {
	const { user, logoutUser } = useAuthContext();

	return (
		<div className="navbar bg-rose-600 shadow-sm text-white">
			<div className="navbar-start">
				<div className="dropdown">
					{/* SMALL DEVICE BUTTON */}
					<div
						tabIndex={0}
						role="button"
						className="btn btn-ghost lg:hidden"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-5 w-5"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							{" "}
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M4 6h16M4 12h8m-8 6h16"
							/>{" "}
						</svg>
					</div>

					{/* SMALL DEVICE MENU ITEMS */}
					<ul
						tabIndex={0}
						className="menu menu-sm dropdown-content bg-rose-600 mt-4 w-[300px] shadow"
					>
						<li>
							<Link to="/">Home</Link>
						</li>
						<li>
							<Link to="/">Classes</Link>
						</li>
						<li>
							<Link to="/">Memberships</Link>
						</li>
						<li>
							<Link to="/">About</Link>
						</li>
						<li>
							<Link to="/">Contact</Link>
						</li>
					</ul>
				</div>
				<Link to="/" className="text-xl md:text-5xl font-bold italic">
					Iron Temple
				</Link>
			</div>

			{/* for large device */}
			<div className="navbar-center hidden lg:flex">
				<ul className="menu menu-horizontal px-1 font-medium">
					<li>
						<Link to="/">Home</Link>
					</li>
					<li>
						<Link to="/classes">Classes</Link>
					</li>
					<li>
						<Link to="/memberships">Memberships</Link>
					</li>
					<li>
						<Link to="/">About</Link>
					</li>
					<li>
						<Link to="/">Contact</Link>
					</li>
				</ul>
			</div>

			<div className="dropdown navbar-end">
				{user ? (
					<div className="dropdown dropdown-end">
						<div
							tabIndex={0}
							role="button"
							className="btn btn-ghost btn-circle avatar"
						>
							<div className="w-10 rounded-full">
								<img
									alt="Tailwind CSS Navbar component"
									src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
								/>
							</div>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm dropdown-content bg-rose-600 rounded-md mt-4 w-52 shadow"
						>
							<li>
								<a>Profile</a>
							</li>
							<li>
								<Link to="/dashboard">Dashboard</Link>
							</li>
							<li>
								<a>Settings</a>
							</li>
							<li>
								<a onClick={logoutUser}>Logout</a>
							</li>
						</ul>
					</div>
				) : (
					<div className="space-x-3">
						<Link
							to="/login"
							className="btn rounded bg-rose-600 text-white"
						>
							Login
						</Link>
						<Link
							to="/register"
							className="btn rounded bg-rose-600 text-white"
						>
							Register
						</Link>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;

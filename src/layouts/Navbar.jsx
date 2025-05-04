import { Link } from "react-router";

const Navbar = () => {
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
				<ul className="menu menu-horizontal px-1">
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
							<a>Dashboard</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;

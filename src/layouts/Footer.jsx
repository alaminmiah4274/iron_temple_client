import {
	FaPhoneAlt,
	FaFacebook,
	FaTwitter,
	FaLinkedin,
	FaYoutube,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

import logo from "/src/assets/logo/gym_logo.png";
import { Link } from "react-router";

const Footer = () => {
	return (
		<div>
			<footer className="footer sm:footer-horizontal text-white bg-gray-950 p-10">
				<div>
					<aside>
						<img
							src={logo}
							alt="Gym Logo"
							className="w-1/3 md:w-1/2"
						/>
						<p>
							<span className="text-3xl font-bold">
								Iron Temple
							</span>
							<br />
							Real Fitness Depends On Exercise
						</p>
					</aside>
					<div className="mt-5">
						<h1 className="text-lg md:text-xl font-bold mb-3">
							Follow Us
						</h1>
						<div className="flex gap-3 text-xl md:text-2xl">
							<FaFacebook />
							<FaYoutube />
							<FaTwitter />
							<FaLinkedin />
						</div>
					</div>
				</div>
				<nav>
					<h6 className="footer-title">Useful Links</h6>
					<Link to="/" className="link link-hover">
						Classes
					</Link>
					<Link to="/" className="link link-hover">
						About
					</Link>
					<Link to="/" className="link link-hover">
						Contact
					</Link>
				</nav>
				<nav>
					<h6 className="footer-title">Support</h6>
					<Link to="/" className="link link-hover">
						Login
					</Link>
					<Link to="/" className="link link-hover">
						My Account
					</Link>
					<Link to="/" className="link link-hover">
						Subscribed
					</Link>
					<Link to="/" className="link link-hover">
						Bookings
					</Link>
				</nav>
				<nav>
					<h6 className="footer-title">Get Info</h6>
					<div className="flex gap-2">
						<FaPhoneAlt className="md:text-2xl text-rose-600" />
						<div>
							<p className="md:text-xl font-semibold">Phone:</p>
							<p className="text-gray-500 md:text-lg">
								01314993347
							</p>
						</div>
					</div>
					<div className="flex gap-2">
						<MdEmail className="md:text-3xl text-rose-600" />
						<div>
							<p className="md:text-xl font-semibold">Email:</p>
							<p className="text-gray-500 text-sm md:text-lg">
								alaminmiah4274@gmail.com
							</p>
						</div>
					</div>
					<div className="flex gap-2">
						<FaLocationDot className="md:text-3xl text-rose-600" />
						<div>
							<p className="md:text-xl font-semibold">Address:</p>
							<p className="text-gray-500 md:text-lg">
								Uttara, Dhaka-1230
							</p>
						</div>
					</div>
				</nav>
			</footer>

			<footer className="footer sm:footer-horizontal footer-center bg-black text-white p-4">
				<aside>
					<p>Copyright © {new Date().getFullYear()} - Iron Temple</p>
				</aside>
			</footer>
		</div>
	);
};

export default Footer;

/*
bg-[#2e1c1c]
*/

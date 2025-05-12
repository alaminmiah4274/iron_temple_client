import { Link } from "react-router";
import contactImg from "/src/assets/contact/contact.jpg";

const Contact = () => {
	return (
		<section className="bg-white my-[100px] md:my-[150px] container mx-auto">
			<div className="flex flex-col md:flex-row md:gap-x-10 items-center justify-center">
				<div className="w-full">
					<img src={contactImg} alt="" />
				</div>
				<div className="w-full space-y-5 pl-3 md:pl-0">
					<h1 className="text-4xl md:text-5xl font-semibold">
						JOIN OUR GYM
					</h1>
					<p className="text-lg md:text-xl">
						Become healthy and fit <br /> strengthen your body &
						mind <br /> through exercise
					</p>
					<Link
						to="/register"
						className="btn px-6 py-4 rounded bg-rose-600 text-white hover:bg-rose-700"
					>
						Become Member
					</Link>
				</div>
			</div>
		</section>
	);
};

export default Contact;

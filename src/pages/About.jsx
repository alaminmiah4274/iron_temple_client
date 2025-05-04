import bgImg from "/src/assets/about/solid_black.jpg";
import aboutImg from "/src/assets/about/about_img.png";
import { Link } from "react-router";

const About = () => {
	return (
		<div
			className="w-full h-full md:h-[650px] bg-cover bg-center flex justify-center items-center px-4 md:px-8"
			style={{ backgroundImage: `url(${bgImg})` }}
		>
			<div className="flex flex-col w-full md:flex-row items-center justify-between max-w-6xl px-4 md:px-8">
				<div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 text-white space-y-4 md:space-y-7">
					<h1 className="text-4xl md:text-5xl font-semibold">
						WELCOME TO IRON TEMPLE
					</h1>
					<h3 className="text-xl md:text-2xl">
						Iron Temple is cutting-edge functional fitness system
						that can help everyday men
					</h3>
					<p className="text-xs md:text-sm">
						Success is not really that difficult. There is a
						significant portion of the population here in
						Bangladesh, that actually want and need success to be
						hard! For those of you who are serious about having
						more, doing more, giving more and being more.
					</p>
					<Link
						to="/memberships"
						className="btn rounded md:p-6 bg-rose-600 text-white hover:bg-rose-700"
					>
						View Plans
					</Link>
				</div>

				<div className="w-full md:w-1/2 flex justify-center">
					<img
						src={aboutImg}
						alt=""
						className="max-w-full md:max-w-md drop-shadow-lg"
					/>
				</div>
			</div>
		</div>
	);
};

export default About;

/*
style={{ backgroundImage: `url(${bgimg})` }}
*/

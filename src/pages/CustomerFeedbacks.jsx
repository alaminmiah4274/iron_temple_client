import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import reviewImg from "../assets/about/review_img.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

const CustomerFeedbacks = () => {
	const feedbacks = [
		{
			id: 1,
			quote: "Iron Temple has the best powerlifting equipment in the city. The 24/7 access lets me train whenever my schedule allows.",
			author: "Mark R.",
			role: "Competitive Powerlifter",
			duration: "Member since 2019",
		},
		{
			id: 2,
			quote: "As a bodybuilder, I appreciate the variety of Hammer Strength machines. The atmosphere keeps me motivated for every session.",
			author: "Lisa T.",
			role: "NPC Competitor",
			duration: "3 years at Iron Temple",
		},
		{
			id: 3,
			quote: "The strongman area with atlas stones and logs is unmatched. Finally a gym that understands functional strength training!",
			author: "Derek S.",
			role: "Strongman Athlete",
			duration: "Member for 18 months",
		},
		{
			id: 4,
			quote: "Clean facilities with abundant sanitizing stations. The owners actually care about member experience, not just profits.",
			author: "Naomi K.",
			role: "Physical Therapist",
			duration: "6-month member",
		},
		{
			id: 5,
			quote: "Best gym for Olympic lifting - proper platforms, bumper plates, and coaches who know weightlifting technique inside out.",
			author: "Carlos M.",
			role: "CrossFit Coach",
			duration: "Member since 2020",
		},
		{
			id: 6,
			quote: "The community here pushed me to deadlift 500lbs. Not just a gym, but a family of serious lifters who support each other.",
			author: "Jenny L.",
			role: "Powerlifting Enthusiast",
			duration: "2 years at Iron Temple",
		},
	];
	// className="max-w-4xl mx-auto px-4 py-12"
	return (
		<div className="max-w-5xl mx-auto mt-[150px] md:mt-[200px]">
			<div className="flex flex-col md:flex-row items-center gap-8">
				{/* Static Image Section */}
				<div className="w-full md:w-1/2">
					<img
						src={reviewImg}
						alt="gym image"
						className="w-full h-auto"
					/>
				</div>

				{/* feedback Section with Slider */}
				<div className="w-full md:w-1/2 relative">
					<div className="flex items-center gap-6 text-rose-600 mb-5 px-6">
						<hr className="w-1/6" />
						<div>CLIENT FEEDBACK</div>
					</div>
					{/* Static Heading */}
					<div className="text-xl md:text-4xl px-6 font-semibold text-slate-700 mb-2">
						WHAT OUR CLIENTS THINK ABOUT OUR GYM
					</div>

					{/* Swiper Container - Only feedback move */}
					<div className="relative">
						<Swiper
							modules={[Navigation, Autoplay]}
							loop={true}
							navigation={{
								nextEl: ".feedback-next",
								prevEl: ".feedback-prev",
							}}
							autoplay={{ delay: 4000, pauseOnMouseEnter: true }}
							spaceBetween={30}
							slidesPerView={1}
						>
							{feedbacks.map((feedback) => (
								<SwiperSlide key={feedback.id}>
									<div className="p-8">
										<div className="text-xl italic font-medium text-gray-800 mb-6">
											"{feedback.quote}"
										</div>
										<div className="space-y-1">
											<div className="text-lg font-bold text-rose-600">
												{feedback.author}
											</div>
											<div className="text-gray-600">
												{feedback.role}
											</div>
											<div className="text-sm text-gray-500">
												{feedback.duration}
											</div>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>

						{/* Custom Navigation */}
						<div className="flex justify-center mt-0 md:mt-4 space-x-2">
							<button className="feedback-prev w-10 h-10 flex items-center justify-center">
								<FaArrowLeft className="text-rose-600" />
							</button>
							<button className="feedback-next w-10 h-10 flex items-center justify-center">
								<FaArrowRight className="text-rose-600" />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CustomerFeedbacks;

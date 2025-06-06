import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import reviewImg from "../assets/about/review_img.png";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import apiClient from "../services/api_client";
import Spinner from "../components/Spinner";
import FeedbackSlide from "../components/CustomerFeedbacks/FeedbackSlide";

const CustomerFeedbacks = () => {
	const [reviews, setReviews] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		apiClient
			.get("/feedback/")
			.then((res) => setReviews(res.data))
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <Spinner />;

	// className="max-w-4xl mx-auto px-4 py-12"
	return (
		<div className="max-w-5xl mx-auto my-[100px] md:my-[150px]">
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
							loop={false}
							navigation={{
								nextEl: ".feedback-next",
								prevEl: ".feedback-prev",
							}}
							autoplay={{
								delay: 3000,
								pauseOnMouseEnter: true,
								stopOnLastSlide: false,
								disableOnInteraction: false,
								reverseDirection: false,
								waitForTransition: true,
							}}
							spaceBetween={30}
							slidesPerView={1}
						>
							{reviews.map((review) => (
								<SwiperSlide key={review.id}>
									<FeedbackSlide review={review} />
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

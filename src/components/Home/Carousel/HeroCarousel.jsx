// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import CarouselSlide from "./CarouselSlide";

import carousel1 from "/src/assets/carousel/slide_img1.png";
import carousel2 from "/src/assets/carousel/slide_img2.png";
import carousel3 from "/src/assets/carousel/slide_img3.png";

const HeroCarousel = () => {
	const slides = [
		{
			title: "MAKE YOUR BODY BECOME FIT AND STRONG",
			subtitle:
				"We provide high quality with affordabel prices for you to become healthy",
			image: carousel1,
		},
		{
			title: "MAKE YOUR TODAY BETTER THAN YESTERDAY",
			subtitle:
				"We provide high quality with affordabel prices for you to become healthy",
			image: carousel2,
		},
		{
			title: "BUILD YOUR BODY TRANSFORM YOUR LIFE",
			subtitle:
				"We provide high quality with affordabel prices for you to become healthy",
			image: carousel3,
		},
	];

	return (
		<>
			<Swiper
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className="mySwiper"
			>
				{slides.map((slide, index) => (
					<SwiperSlide key={index}>
						<CarouselSlide
							title={slide.title}
							subtitle={slide.subtitle}
							image={slide.image}
						/>
					</SwiperSlide>
				))}
			</Swiper>
		</>
	);
};

export default HeroCarousel;

import bgimg from "/src/assets/carousel/solid_black.jpg";

const CarouselSlide = ({ title, subtitle, image }) => {
	return (
		<section
			className="w-full h-[650px] bg-cover bg-center flex justify-center items-center px-4 md:px-8"
			style={{ backgroundImage: `url(${bgimg})` }}
		>
			<div className="flex flex-col w-full md:flex-row items-center justify-between max-w-6xl px-4 md:px-8">
				{/*Left Content*/}
				<div className="w-full md:w-1/2 text-center text-white md:text-left mb-8 md:mb-0">
					<h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
					<p className="my-4">{subtitle}</p>
					<button className="btn rounded px-6 py-3 shadow-md bg-rose-500 hover:bg-rose-600 text-white">
						View Classes
					</button>
				</div>

				{/*Right Content*/}
				<div className="w-full md:w-1/2 flex justify-center">
					<img
						src={image}
						alt=""
						className="max-w-full md:max-w-md drop-shadow-lg"
					/>
				</div>
			</div>
		</section>
	);
};

export default CarouselSlide;

/*
style={{ backgroundImage: `url(${bgimg})` }}
*/

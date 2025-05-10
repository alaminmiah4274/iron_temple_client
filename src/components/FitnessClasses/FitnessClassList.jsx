import default_img from "../../assets/logo/default_img.jpg";

const FitnessClassList = ({ classInfo, handleBooking }) => {
	const img = classInfo.images[0]?.image
		? classInfo.images[0].image
		: default_img;

	return (
		<div className="card bg-white shadow-sm">
			<figure className="md:px-10 md:pt-10 hover:brightness-80">
				<img
					src={img}
					alt="class image"
					className="rounded-md w-full h-[200px]"
				/>
			</figure>

			<div className="card-body items-center text-xs md:text-sm text-center space-y-3">
				<h2 className="card-title text-lg md:text-xl">
					{classInfo.name}
				</h2>
				<p>{classInfo.description}</p>
				<p>
					<span className="font-semibold">Duration:</span>{" "}
					{classInfo.duration} mins
				</p>
				<p>
					<span className="font-bold">Total Seats:</span>{" "}
					{classInfo.capacity}
				</p>
				<p>
					<span className="font-semibold">Start Date:</span>{" "}
					{classInfo.schedule}
				</p>
				<div className="card-actions">
					<button
						onClick={() => handleBooking(classInfo.id)}
						className="btn rounded bg-rose-600 text-xs md:text-sm text-white hover:bg-rose-700"
					>
						Book Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default FitnessClassList;

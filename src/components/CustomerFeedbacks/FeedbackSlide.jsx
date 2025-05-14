import { FaStar } from "react-icons/fa";

const FeedbackSlide = ({ review }) => {
	return (
		<div className="p-8">
			<div className="flex items-center gap-5 mb-5">
				{/* fitness class name */}
				<div>{review.fitness_class.name}</div>

				{/* stars based on the feedback ratings */}
				<div className="flex text-yellow-400">
					{[...Array(5)].map((_, i) => (
						<FaStar
							key={i}
							className={
								i < review.ratings
									? "text-yellow-400"
									: "text-gray-200"
							}
						/>
					))}
				</div>
			</div>

			{/* customer comment */}
			<div className="text-xl italic font-medium text-gray-800 mb-6">
				"{review.comment}"
			</div>

			{/* customer identity */}
			<div className="space-y-1">
				<div className="text-lg font-bold text-rose-600">
					{review.user.first_name ? review.user.first_name : "A"}{" "}
					{review.user.last_name
						? review.user.last_name
						: "Bodybuilder"}
				</div>
				<div className="text-gray-600">{review.user.email}</div>
			</div>
		</div>
	);
};

export default FeedbackSlide;

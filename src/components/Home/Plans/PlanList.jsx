import default_img from "/src/assets/default_img.jpg";

const PlanList = ({ plan }) => {
	return (
		<div className="card bg-white shadow-sm">
			{/* image of the plan (membership home) */}
			<figure className="px-10 pt-10">
				<img
					src={plan.images[0].image}
					alt="membership plans"
					className="rounded-xl"
				/>
			</figure>

			{/* plan info */}
			<div className="card-body items-center text-center space-y-2">
				<h2 className="card-title">{plan.name}</h2>
				<p>Price: ${plan.price}</p>
				<div className="card-actions">
					<button className="btn rounded bg-rose-500 text-white hover:bg-rose-600">
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
};

export default PlanList;

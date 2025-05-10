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
				<p>
					<span className="font-semibold">Price:</span> ${plan.price}
				</p>
			</div>
		</div>
	);
};

export default PlanList;

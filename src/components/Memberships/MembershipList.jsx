import default_img from "../../assets/logo/default_img.jpg";

const MembershipList = ({ membership, handleSubscription }) => {
	const membershipImg = membership.images[0]?.image
		? membership.images[0].image
		: default_img;

	return (
		<div className="card bg-white shadow-sm">
			{/* image of the plan (membership home) */}
			<figure className="md:px-10 md:pt-10 hover:brightness-80">
				<img
					src={membershipImg}
					alt="membership plans"
					className="rounded-xl"
				/>
			</figure>

			{/* plan info */}
			<div className="card-body items-center text-center space-y-2">
				<h2 className="card-title">{membership.name}</h2>
				<p>
					<span className="font-semibold">Price:</span> $
					{membership.price}
				</p>
				<div className="card-actions">
					<button
						onClick={() => handleSubscription(membership.id)}
						className="btn rounded bg-rose-500 text-xs md:text-sm text-white hover:bg-rose-600"
					>
						Subscribe
					</button>
				</div>
			</div>
		</div>
	);
};

export default MembershipList;

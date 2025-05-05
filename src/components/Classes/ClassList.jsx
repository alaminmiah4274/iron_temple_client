const ClassList = ({ classInfo }) => {
	return (
		<div className="card bg-white shadow-sm">
			<figure className="px-10 pt-10">
				<img
					src={classInfo.images[0].image}
					alt="class image"
					className="rounded-md w-full h-[200px]"
				/>
			</figure>

			<div className="card-body items-center text-center space-y-3">
				<h2 className="card-title">{classInfo.name}</h2>
				<p>{classInfo.description}</p>
				<div className="card-actions">
					<button className="btn rounded bg-rose-600 text-white hover:bg-rose-700">
						Buy Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default ClassList;

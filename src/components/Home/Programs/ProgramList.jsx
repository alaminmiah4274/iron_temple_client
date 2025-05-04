const ProgramList = ({ program }) => {
	return (
		<div className="card bg-white shadow-sm">
			{/* PROGRAM (FITNESS CLASS) IMAGE */}
			<figure className="px-10 pt-10">
				<img
					src={program.images[0].image}
					alt="Shoes"
					className="rounded-xl"
				/>
			</figure>

			{/* PROGRAM (FITNESS CLASS) OTHERS INFO */}
			<div className="card-body items-center text-center space-y-2">
				<h2 className="card-title">{program.name}</h2>
				<p>{program.description}</p>
				<div className="card-actions">
					<button className="btn rounded bg-rose-500 text-white hover:bg-rose-600">
						Book Now
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProgramList;

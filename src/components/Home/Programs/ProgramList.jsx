const ProgramList = ({ program }) => {
	return (
		<div className="relative card shadow-sm overflow-hidden hover:brightness-80">
			<figure>
				<img
					src={program.images[0].image}
					alt="fitness class"
					className="w-full h-full object-cover absolute inset-0 z-0 brightness-30"
				/>
			</figure>
			<div className="relative z-10 flex flex-col justify-end h-64 p-4 text-white">
				<h2 className="card-title">{program.name}</h2>
				<p>{program.description}</p>
			</div>
		</div>
	);
};

export default ProgramList;

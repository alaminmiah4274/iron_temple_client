const InfoCard = ({ icon: Icon, title, value }) => {
	return (
		<div className="card bg-white shadow-sm">
			<div className="card-body p-4">
				<div className="flex items-center gap-2">
					<Icon className="h-6 w-6 text-primary" />
					<h3 className="text-xl">{title}</h3>
				</div>
				<p className="mt-2 text-2xl font-bold">{value}</p>
			</div>
		</div>
	);
};

export default InfoCard;

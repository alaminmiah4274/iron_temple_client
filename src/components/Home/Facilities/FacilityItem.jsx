const FacilityItem = ({ item, index }) => {
	const gradients = [
		"from-purple-100 to-red-100",
		"from-pink-100 to-blue-50",
		"from-purple-100 to-pink-100",
		"from-pink-100 to-blue-50",
		"from-pink-100 to-blue-50",
		"from-blue-50 to-red-100",
	];

	return (
		<div
			className={`bg-gradient-to-br ${
				gradients[index % gradients.length]
			} shadow-sm h-full`}
		>
			<div className="flex flex-col items-center justify-center py-10 hover:filter hover:brightness-80">
				<img
					src={item.logo}
					alt="logo"
					className="rounded-xl w-[50px]"
				/>
				<h2 className="text-2xl mt-5 hover:text-rose-600">
					{item.name}
				</h2>
			</div>
		</div>
	);
};

export default FacilityItem;

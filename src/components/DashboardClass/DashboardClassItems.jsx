const DashboardClassItems = ({ fitnessClasses }) => {
	return (
		<>
			{fitnessClasses.map((fitnessClass) => (
				<tr key={fitnessClass.id}>
					<td>{fitnessClass.id}</td>
					<td>{fitnessClass.name}</td>
					<td>{fitnessClass.schedule}</td>
					<td>{fitnessClass.duration} mins</td>
					<td>{fitnessClass.capacity}</td>
				</tr>
			))}
		</>
	);
};

export default DashboardClassItems;

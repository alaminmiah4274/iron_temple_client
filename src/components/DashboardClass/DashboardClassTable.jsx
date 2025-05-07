import DashboardClassItems from "./DashboardClassItems";

const DashboardClassTable = ({ fitnessClasses }) => {
	return (
		<table className="table table-zebra">
			<thead>
				<tr>
					<th>Class Id</th>
					<th>Class Name</th>
					<th>Schedule</th>
					<th>Duration</th>
					<th>Capacity</th>
				</tr>
			</thead>
			<tbody>
				<DashboardClassItems fitnessClasses={fitnessClasses} />
			</tbody>
		</table>
	);
};

export default DashboardClassTable;

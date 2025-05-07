import DashboardMembershipList from "./DashboardMembershipList";

const DashboardMembershipTable = ({ memberships }) => {
	return (
		<table className="table table-zebra">
			<thead>
				<tr>
					<th>Membership Id</th>
					<th>Membership Name</th>
					<th>Price</th>
					<th>Duration</th>
				</tr>
			</thead>
			<tbody>
				{memberships.map((membership) => (
					<DashboardMembershipList
						key={membership.id}
						membership={membership}
					/>
				))}
			</tbody>
		</table>
	);
};

export default DashboardMembershipTable;

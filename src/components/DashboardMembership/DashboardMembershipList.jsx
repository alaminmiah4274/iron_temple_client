const DashboardMembershipList = ({ membership }) => {
	return (
		<tr>
			<td>{membership.id}</td>
			<td>{membership.name}</td>
			<td>${membership.price}</td>
			<td>{membership.duration}</td>
		</tr>
	);
};

export default DashboardMembershipList;

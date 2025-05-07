import useAuthContext from "../../hooks/useAuthContext";

const SubscriptionList = ({ subscription }) => {
	const { user } = useAuthContext();

	return (
		<tr>
			<td>{subscription.id}</td>
			{user.is_staff ? <td>{subscription.user.email}</td> : ""}
			<td>{subscription.membership.name}</td>
			<td>{subscription.start_date}</td>
			<td>{subscription.end_date}</td>
			<td>{subscription.status}</td>
		</tr>
	);
};

export default SubscriptionList;

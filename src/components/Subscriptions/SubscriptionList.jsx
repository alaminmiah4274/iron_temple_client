import useAuthContext from "../../hooks/useAuthContext";

const SubscriptionList = ({ subscription }) => {
	const { user } = useAuthContext();

	const subscriptionStatus = {
		ACTIVE: "badge badge-info text-white",
		PAID: "badge badge-success text-white",
		EXPIRED: "badge badge-warning text-white",
		CANCELLED: "badge badge-error text-white",
	};

	const statusColor = subscriptionStatus[subscription.status];

	return (
		<tr>
			<td>{subscription.id}</td>
			{user.is_staff ? <td>{subscription.user.email}</td> : ""}
			<td>{subscription.membership.name}</td>
			<td>{subscription.start_date}</td>
			<td>{subscription.end_date}</td>
			<td>
				<div className={`${statusColor}`}>{subscription.status}</div>
			</td>
		</tr>
	);
};

export default SubscriptionList;

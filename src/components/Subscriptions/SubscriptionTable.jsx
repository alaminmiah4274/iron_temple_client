import useAuthContext from "../../hooks/useAuthContext";
import SubscriptionList from "./SubscriptionList";

const SubscriptionTable = ({ subscriptions }) => {
	const { user } = useAuthContext();

	return (
		<table className="table table-zebra">
			<thead>
				<tr>
					<th>Id</th>
					{user.is_staff ? <th>User</th> : ""}
					<th>Membership</th>
					<th>Start Date</th>
					<th>End Date</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				{subscriptions.map((subscription) => (
					<SubscriptionList
						key={subscription.id}
						subscription={subscription}
					/>
				))}
			</tbody>
		</table>
	);
};

export default SubscriptionTable;

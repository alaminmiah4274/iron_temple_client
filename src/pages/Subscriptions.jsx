import { useEffect, useState } from "react";
import authApiClient from "../services/auth_api_client";
import Spinner from "../components/Spinner";
import SubscriptionTable from "../components/Subscriptions/SubscriptionTable";

const Subscriptions = () => {
	const [subscriptions, setSubscriptions] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		authApiClient
			.get("/subscriptions/")
			.then((res) => setSubscriptions(res.data))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div className="mt-6 card bg-white shadow-sm">
			<div className="card-body">
				<h3 className="text-xl">All Subscriptions</h3>

				{loading ? (
					<Spinner />
				) : (
					<div className="overflow-x-auto">
						<SubscriptionTable subscriptions={subscriptions} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Subscriptions;

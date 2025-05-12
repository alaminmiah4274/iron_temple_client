import { useEffect, useState } from "react";
import authApiClient from "../services/auth_api_client";
import Spinner from "../components/Spinner";
import PaymentCard from "../components/MakePayment/PaymentCard";

const Payment = () => {
	const [subscriptions, setSubscriptions] = useState([]);
	const [loading, setLoading] = useState(false);

	// fetching subscriptions info
	useEffect(() => {
		setLoading(true);
		authApiClient
			.get("/subscriptions/")
			.then((res) => setSubscriptions(res.data))
			.finally(() => setLoading(false));
	}, []);

	// filtering only booked subscriptions
	const bookedSubscriptions = subscriptions.filter(
		(sub) => sub.status === "ACTIVE"
	);

	// handling subscription's cancel status
	const handleSubscriptionCancel = async (subId) => {
		try {
			const res = await authApiClient.patch(
				`/subscriptions/${subId}/update_status/`,
				{ status: "CANCELLED" }
			);

			if (res.status === 200) {
				setSubscriptions((prevSub) =>
					prevSub.map((sub) =>
						sub.id === subId ? { ...sub, status: "CANCELLED" } : sub
					)
				);
			}
		} catch (err) {
			console.log(err);
		}
	};

	if (loading) return <Spinner />;

	return (
		<>
			{bookedSubscriptions.map((sub) => (
				<PaymentCard
					key={sub.id}
					sub={sub}
					onCancel={handleSubscriptionCancel}
				/>
			))}
		</>
	);
};

export default Payment;

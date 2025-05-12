import { useEffect, useState } from "react";
import authApiClient from "../services/auth_api_client";
import Spinner from "../components/Spinner";
import PaymentTable from "../components/Payments/PaymentTable";
import { format } from "date-fns";

const Payment = () => {
	const [payments, setPayments] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		authApiClient
			.get("/payments/")
			.then((res) => setPayments(res.data))
			.finally(() => setLoading(false));
	}, []);

	const formatDate = (date) => {
		return format(new Date(date), "MMMM d, yyyy");
	};

	if (loading) return <Spinner />;

	return (
		<div className="mt-6 card bg-white shadow-sm">
			<div className="card-body">
				<h3 className="text-xl">Payments</h3>

				<div className="overflow-x-auto">
					<PaymentTable payments={payments} formatDate={formatDate} />
				</div>
			</div>
		</div>
	);
};

export default Payment;

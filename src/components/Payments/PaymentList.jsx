const PaymentList = ({ payment, formatDate }) => {
	const paymentStatus = {
		COMPLETED: "badge badge-success text-white",
		FAILED: "badge bg-red-500 text-white",
		PENDING: "badge badge-warning text-white",
	};

	const statusColor = paymentStatus[payment.status];

	return (
		<tr>
			<td>{payment.id}</td>
			<td>{payment.user.email}</td>
			<td>{payment.subscription}</td>
			<td>${payment.amount}</td>
			<td>
				<div className={statusColor}>{payment.status}</div>
			</td>
			<td>{formatDate(payment.payment_date)}</td>
		</tr>
	);
};

export default PaymentList;

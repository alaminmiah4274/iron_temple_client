const PaymentList = ({ payment, formatDate }) => {
	return (
		<tr>
			<td>{payment.id}</td>
			<td>{payment.user.email}</td>
			<td>{payment.subscription}</td>
			<td>${payment.amount}</td>
			<td>
				<div className={`badge badge-success`}>{payment.status}</div>
			</td>
			<td>{formatDate(payment.payment_date)}</td>
		</tr>
	);
};

export default PaymentList;

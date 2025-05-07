import PaymentList from "./PaymentList";

const PaymentTable = ({ payments, formatDate }) => {
	return (
		<table className="table table-zebra">
			<thead>
				<tr>
					<th>Id</th>
					<th>Customer</th>
					<th>Subscription</th>
					<th>Amount</th>
					<th>Status</th>
					<th>Date</th>
				</tr>
			</thead>
			<tbody>
				{payments.map((payment) => (
					<PaymentList
						key={payment.id}
						payment={payment}
						formatDate={formatDate}
					/>
				))}
			</tbody>
		</table>
	);
};

export default PaymentTable;

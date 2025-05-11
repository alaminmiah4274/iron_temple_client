const Payment = () => {
	return (
		<div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
			<div className="bg-gray-100 p-6">
				<div className="flex gap-2">
					<span
						className={`px-3 py-1 rounded-full text-sm font-medium `}
					>
						{/* {order.status} */}
						status
					</span>
					<button className="text-blue-700 hover:underline cursor-pointer">
						Cancel
					</button>
				</div>
			</div>
			<div className="p-6">
				<h3 className="font-medium text-lg mb-4">Subscripiton Items</h3>
				{/* Subscriptions Table  */}
				<div className="overflow-x-auto">
					<table className="table-auto w-full border-collapse">
						<thead>
							<tr className="bg-gray-50 border-b">
								<th className="px-4 py-3 text-left">
									Subscription
								</th>
								<th className="px-4 py-3 text-center">Price</th>
								<th className="px-4 py-3 text-right">Total</th>
							</tr>
						</thead>
						<tbody>
							<tr className="border-b hover:bg-gray-50">
								<td className="px-4 py-3 font-medium text-left">
									Premium Monthly
								</td>
								<td className="px-4 py-3 text-center">$150</td>
								<td className="px-4 py-3 text-right">$150</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
			<div className="border-t p-6 flex flex-col items-end">
				<div className="space-y-2 w-full max-w-[200px]">
					<div className="flex justify-between">
						<span>Subtotal:</span>
						<span>$150</span>
					</div>
					<div className="flex justify-between">
						<span>VAT:</span>
						<span>$5</span>
					</div>
					<div className="flex justify-between font-bold border-t pt-2">
						<span>Total:</span>
						<span>$155</span>
					</div>
				</div>
				<button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
					Pay Now
				</button>
			</div>
		</div>
	);
};

export default Payment;

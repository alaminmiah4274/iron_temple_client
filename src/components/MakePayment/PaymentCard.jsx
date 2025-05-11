import SubTable from "./SubTable";

const PaymentCard = ({ sub, onCancel }) => {
	return (
		<div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
			<div className="bg-gray-100 p-6">
				<button
					onClick={() => onCancel(sub.id)}
					className="text-rose-600 hover:underline cursor-pointer"
				>
					Cancel
				</button>
			</div>
			<div className="p-6">
				{/* Subscriptions Table  */}
				<div className="overflow-x-auto">
					<SubTable sub={sub} />
				</div>
			</div>
			<div className="border-t p-6 flex flex-col items-end">
				<div className="space-y-2 w-full max-w-[200px]">
					<div className="flex justify-between">
						<span>Subtotal:</span>
						<span>${sub.membership.price}</span>
					</div>
					<div className="flex justify-between">
						<span>Charge:</span>
						<span>$0.00</span>
					</div>
					<div className="flex justify-between font-bold border-t pt-2">
						<span>Total:</span>
						<span>${sub.membership.price}</span>
					</div>
				</div>
				<button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors">
					Pay Now
				</button>
			</div>
		</div>
	);
};

export default PaymentCard;

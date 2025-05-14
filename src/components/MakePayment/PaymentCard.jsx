import { useState } from "react";
import SubTable from "./SubTable";
import authApiClient from "../../services/auth_api_client";

const PaymentCard = ({ sub, onCancel }) => {
	const [paymentLoading, setPaymentLoading] = useState(false);

	// handling subscription payment
	const handlePayment = async () => {
		setPaymentLoading(true);
		try {
			const response = await authApiClient.post("/payment/initiate/", {
				amount: sub.membership.price,
				subscriptionId: sub.id,
			});

			// status: ---

			if (response.data?.payment_url) {
				window.location.href = response.data.payment_url;
			} else {
				alert("Payment failed");
			}
		} catch (err) {
			console.log(err);
		} finally {
			setPaymentLoading(false);
		}
	};

	return (
		<div className="bg-white rounded-lg shadow-lg mb-8 overflow-hidden">
			<div className="bg-gray-100 p-6">
				{sub.status === "PAID" ? (
					<div className="badge badge-success text-white">PAID</div>
				) : (
					<button
						onClick={() => onCancel(sub.id)}
						className="text-rose-600 hover:underline cursor-pointer"
					>
						Cancel
					</button>
				)}
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
				{sub.status !== "PAID" && (
					<button
						onClick={handlePayment}
						disabled={paymentLoading}
						className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition-colors"
					>
						{paymentLoading ? "Processing..." : "Pay Now"}
					</button>
				)}
			</div>
		</div>
	);
};

export default PaymentCard;

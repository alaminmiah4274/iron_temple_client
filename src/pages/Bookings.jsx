import { format } from "date-fns";
import { useEffect, useState } from "react";
import authApiClient from "../services/auth_api_client";
import Spinner from "../components/Spinner";
import BookingTable from "../components/Bookings/BookingTable";

const Bookings = () => {
	const [bookings, setBookings] = useState([]);
	const [bookingLoading, setBookingLoading] = useState(false);

	// to fetch bookings
	useEffect(() => {
		setBookingLoading(true);
		authApiClient
			.get("/bookings/")
			.then((res) => setBookings(res.data))
			.finally(() => setBookingLoading(false));
	}, []);

	// to convert booking date into readable format
	const formatDate = (date) => {
		return format(new Date(date), "MMMM d, yyyy");
	};

	if (bookingLoading) return <Spinner />;

	return (
		<div className="mt-6 card bg-white shadow-sm">
			<div className="card-body">
				<h3 className="text-xl">Bookings</h3>

				<div className="overflow-x-auto text-xs md:text-lg">
					<BookingTable bookings={bookings} formatDate={formatDate} />
				</div>
			</div>
		</div>
	);
};

export default Bookings;

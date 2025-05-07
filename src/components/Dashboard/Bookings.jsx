import { useEffect, useState } from "react";
import authApiClient from "../../services/auth_api_client";
import { format } from "date-fns";
import Spinner from "../Spinner";
import useAuthContext from "../../hooks/useAuthContext";

const Bookings = () => {
	const [bookings, setBookings] = useState([]);
	const [bookingLoading, setBookingLoading] = useState(false);
	const { user } = useAuthContext();

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

	return (
		<div className="mt-6 card bg-white shadow-sm">
			<div className="card-body">
				<h3 className="text-xl">Recent Bookings</h3>

				{bookingLoading ? (
					<Spinner />
				) : (
					<div className="overflow-x-auto">
						<table className="table table-zebra">
							<thead>
								<tr>
									<th>Booking Id</th>
									{user.is_staff ? <th>Customer</th> : ""}
									<th>Class</th>
									<th>Status</th>
									<th>Date</th>
								</tr>
							</thead>
							<tbody>
								{bookings.map((booking) => (
									<tr key={booking.id}>
										<td>{booking.id}</td>
										{user.is_staff ? (
											<td>{booking.user.email}</td>
										) : (
											""
										)}
										<td>{booking.fitness_class.name}</td>
										<td>
											<div className="badge badge-success">
												{booking.status}
											</div>
										</td>
										<td>
											{formatDate(booking.booking_date)}
										</td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
};

export default Bookings;

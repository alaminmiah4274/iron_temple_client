import useAuthContext from "../../hooks/useAuthContext";

const BookingList = ({ booking, formatDate }) => {
	const { user } = useAuthContext();

	const bookingStatus = {
		BOOKED: "badge badge-success text-white",
		ATTENDED: "badge badge-warning text-white",
		CANCELLED: "badge badge-error text-white",
	};

	const statusColor = bookingStatus[booking.status];

	return (
		<tr>
			<td>{booking.id}</td>
			{user.is_staff ? <td>{booking.user.email}</td> : ""}
			<td>{booking.fitness_class.name}</td>
			<td>
				<div className={statusColor}>{booking.status}</div>
			</td>
			<td>{formatDate(booking.booking_date)}</td>
		</tr>
	);
};

export default BookingList;

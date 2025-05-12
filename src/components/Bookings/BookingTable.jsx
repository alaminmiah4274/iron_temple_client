import useAuthContext from "../../hooks/useAuthContext";
import BookingList from "./BookingList";

const BookingTable = ({ bookings, formatDate }) => {
	const { user } = useAuthContext();

	return (
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
					<BookingList
						key={booking.id}
						booking={booking}
						formatDate={formatDate}
					/>
				))}
			</tbody>
		</table>
	);
};

export default BookingTable;

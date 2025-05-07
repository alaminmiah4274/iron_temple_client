import useAuthContext from "../../hooks/useAuthContext";
import ReviewList from "./ReviewList";

const ReviewTable = ({ reviews, formatDate }) => {
	const { user } = useAuthContext();

	return (
		<table className="table table-zebra">
			<thead>
				<tr>
					<th>Id</th>
					{user.is_staff ? <th>Customer</th> : ""}
					<th>Class</th>
					<th>Comment</th>
					<th>Rating</th>
					<th>Date</th>
				</tr>
			</thead>
			<tbody>
				{reviews.map((review) => (
					<ReviewList
						key={review.id}
						review={review}
						formatDate={formatDate}
					/>
				))}
			</tbody>
		</table>
	);
};

export default ReviewTable;

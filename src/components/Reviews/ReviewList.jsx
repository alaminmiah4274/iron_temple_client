import useAuthContext from "../../hooks/useAuthContext";

const ReviewList = ({ review, formatDate }) => {
	const { user } = useAuthContext();

	return (
		<tr>
			<td>{review.id}</td>
			{user.is_staff ? <td>{review.user.email}</td> : ""}
			<td>{review.fitness_class.name}</td>
			<td>{review.comment}</td>
			<td>{review.ratings}</td>
			<td>{formatDate(review.created_at)}</td>
		</tr>
	);
};

export default ReviewList;

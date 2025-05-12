import { useEffect, useState } from "react";
import authApiClient from "../services/auth_api_client";
import Spinner from "../components/Spinner";
import { format } from "date-fns";
import ReviewTable from "../components/Reviews/ReviewTable";

const Reviews = () => {
	const [reviews, setReviews] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		authApiClient
			.get("/feedback/")
			.then((res) => setReviews(res.data))
			.finally(() => setLoading(false));
	}, []);

	const formatDate = (date) => {
		return format(new Date(date), "MMMM d, yyyy");
	};

	if (loading) return <Spinner />;

	return (
		<div className="mt-6 card bg-white shadow-sm">
			<div className="card-body">
				<h3 className="text-xl">Reviews</h3>

				<div className="overflow-x-auto">
					<ReviewTable reviews={reviews} formatDate={formatDate} />
				</div>
			</div>
		</div>
	);
};

export default Reviews;

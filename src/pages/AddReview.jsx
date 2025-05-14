import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import authApiClient from "../services/auth_api_client";
import Spinner from "../components/Spinner";

const AddReview = () => {
	const [bookings, setBookings] = useState([]);
	const [loading, setLoading] = useState(false);

	// react hook form functionalities
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	// fetching individual bookings
	useEffect(() => {
		setLoading(true);
		authApiClient
			.get("/bookings/")
			.then((res) =>
				setBookings(
					res.data.filter((book) => book.status !== "CANCELLED")
				)
			)
			.finally(() => setLoading(false));
	}, []);

	if (loading) return <Spinner />;

	// submitting user feedback
	const handleFeedbackSubmit = async (data) => {
		const feedbackInfo = {
			fitness_class: parseInt(data.fitness),
			ratings: parseInt(data.ratings),
			comment: data.comment,
		};

		try {
			const res = await authApiClient.post("/feedback/", feedbackInfo);

			if (res.status === 200) {
				alert(res.data?.status);
			}
		} catch (err) {
			console.log(err);
		}

		reset();
	};

	return (
		<div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
			<h2 className="text-2xl font-semibold mb-4">Give Review</h2>

			<form
				onSubmit={handleSubmit(handleFeedbackSubmit)}
				className="space-y-4"
			>
				{/* Dropdown for fitness class */}
				<div>
					<label className="block text-sm font-medium">
						Fitness Class
					</label>
					<select
						{...register("fitness", { required: true })}
						className="select select-bordered w-full"
					>
						<option value="">Select a class</option>
						{bookings.map((booking) => (
							<option
								key={booking.id}
								value={booking.fitness_class.id}
							>
								{booking.fitness_class.name}
							</option>
						))}
					</select>
					{errors.fitness && (
						<p className="text-red-500 text-xs">
							Fitness class is required
						</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium">Ratings</label>
					<input
						type="number"
						{...register("ratings", { required: true })}
						className="input input-bordered w-full"
						placeholder="Ratings out of 5"
					/>
					{errors.ratings && (
						<p className="text-red-500 text-xs">
							Ratings is required
						</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium">Comment</label>
					<textarea
						{...register("comment", { required: true })}
						className="textarea textarea-bordered w-full"
						placeholder="Your comment..."
					></textarea>
					{errors.comment && (
						<p className="text-red-500 text-xs">
							Comment is required
						</p>
					)}
				</div>

				<button
					type="submit"
					className="btn bg-rose-600 hover:bg-rose-700 rounded text-white w-full"
				>
					Give Review
				</button>
			</form>
		</div>
	);
};

export default AddReview;

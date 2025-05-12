import { useForm } from "react-hook-form";

const AddReview = () => {
	// react hook form functionalities
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	return (
		<div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
			<h2 className="text-2xl font-semibold mb-4">Add New Product</h2>

			<form onSubmit={handleSubmit} className="space-y-4">
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
						{/* {categories.map((cat) => (
							<option key={cat.id} value={cat.id}>
								{cat.name}
							</option>
						))} */}
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
						placeholder="Ratings"
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

				<button type="submit" className="btn btn-primary w-full">
					Give Review
				</button>
			</form>
		</div>
	);
};

export default AddReview;

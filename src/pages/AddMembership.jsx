import { useState } from "react";
import { useForm } from "react-hook-form";
import authApiClient from "../services/auth_api_client";

const AddMembership = () => {
	const [membershipId, setMembershipId] = useState(null);
	const [previewImages, setPreviewImages] = useState([]);
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	// adding membership plan
	const handleAddMembership = async (data) => {
		try {
			const res = await authApiClient.post("/memberships/", data);

			if (res.status === 201) {
				setMembershipId(res.data.id);
			}
		} catch (err) {
			console.log(err);
		}

		reset();
	};

	// handle image change
	const handleImageChange = (e) => {
		const files = Array.from(e.target.files);
		setImages(files);
		setPreviewImages(files.map((file) => URL.createObjectURL(file)));
	};

	// handle image upload
	const handleImageUpload = async () => {
		if (!images.length) return alert("Please select images");

		setLoading(true);
		try {
			for (const image of images) {
				const formData = new FormData();
				formData.append("image", image);

				const response = await authApiClient.post(
					`/memberships/${membershipId}/images/`,
					formData
				);

				// status : 201
			}

			setLoading(false);
			setMembershipId(null);
			alert("Images uploaded successfully");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
			<h2 className="text-2xl font-semibold mb-4">Add New Membership</h2>

			{!membershipId ? (
				<form
					onSubmit={handleSubmit(handleAddMembership)}
					className="space-y-4"
				>
					<div>
						<label className="block text-sm font-medium">
							Membership Name
						</label>
						<input
							{...register("name", { required: true })}
							className="input input-bordered w-full"
							placeholder="Membership Name"
						/>
						{errors.name && (
							<p className="text-red-500 text-xs">
								Membership name is required
							</p>
						)}
					</div>

					<div>
						<label className="block text-sm font-medium">
							Price
						</label>
						<input
							type="text"
							{...register("price", {
								required: "This Field is required",
								validate: (value) => {
									const parsedValue = parseFloat(value);
									return (
										!isNaN(parsedValue) ||
										"Please enter a valid number!"
									);
								},
							})}
							className="input input-bordered w-full"
							placeholder="Price"
						/>
						{errors.price && (
							<p className="text-red-500 text-xs">
								{errors.price.message}
							</p>
						)}
					</div>

					{/* Dropdown for membership status */}
					<div>
						<label className="block text-sm font-medium">
							Duration
						</label>
						<select
							{...register("duration", { required: true })}
							className="select select-bordered w-full"
						>
							<option value="">Select Status</option>
							<option value="WEEKLY">WEEKLY</option>
							<option value="MONTHLY">MONTHLY</option>
							<option value="YEARLY">YEARLY</option>
						</select>
						{errors.duration && (
							<p className="text-red-500 text-xs">
								Duration is required
							</p>
						)}
					</div>

					<button
						type="submit"
						className="btn bg-rose-600 rounded hover:bg-rose-700 text-white w-full"
					>
						Add Membership
					</button>
				</form>
			) : (
				<div>
					<h3 className="text-lg font-medium mb-2">
						Upload Membership Images
					</h3>
					<input
						type="file"
						multiple
						accept="image/*"
						className="file-input file-input-bordered w-full"
						onChange={handleImageChange}
					/>

					{previewImages.length > 0 && (
						<div className="flex gap-2 mt-2">
							{previewImages.map((src, idx) => (
								<img
									key={idx}
									src={src}
									alt="Preview"
									className="w-16 h-16 rounded-md object-cover"
								/>
							))}
						</div>
					)}

					<button
						onClick={handleImageUpload}
						className="btn bg-rose-600 hover:bg-rose-700 rounded text-white w-full mt-2"
						disabled={loading}
					>
						{loading ? "Uploading..." : "Upload Image"}
					</button>
				</div>
			)}
		</div>
	);
};

export default AddMembership;

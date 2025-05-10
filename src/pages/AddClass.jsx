import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import authApiClient from "../services/auth_api_client";

const AddClass = () => {
	const [users, setUsers] = useState([]);
	const [classId, setClassId] = useState(null);

	const [previewImages, setPreviewImages] = useState([]);
	const [images, setImages] = useState([]);
	const [loading, setLoading] = useState(false);

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();

	// fetching users
	useEffect(() => {
		authApiClient.get("/auth/users/").then((res) => setUsers(res.data));
	}, []);

	// adding fitness class
	const handleAddClass = async (data) => {
		const fitnessInfo = {
			name: data.name,
			description: data.description,
			instructor: parseInt(data.instructor),
			schedule: data.schedule,
			duration: parseInt(data.duration),
			capacity: parseInt(data.capacity),
		};

		try {
			const res = await authApiClient.post(
				"/fitness-classes/",
				fitnessInfo
			);

			if (res.status === 201) {
				setClassId(res.data.id);
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
					`/fitness-classes/${classId}/images/`,
					formData
				);

				// status : 201
			}

			setLoading(false);
			setClassId(null);
			alert("Images uploaded successfully");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
			<h2 className="text-2xl font-semibold mb-4">Add New Class</h2>

			{!classId ? (
				<form
					onSubmit={handleSubmit(handleAddClass)}
					className="space-y-4"
				>
					<div>
						<label className="block text-sm font-medium">
							Class Name
						</label>
						<input
							{...register("name", { required: true })}
							className="input input-bordered w-full"
							placeholder="Class Name"
						/>
						{errors.name && (
							<p className="text-red-500 text-xs">
								Class name is required
							</p>
						)}
					</div>

					<div>
						<label className="block text-sm font-medium">
							Description
						</label>
						<textarea
							{...register("description", { required: true })}
							className="textarea textarea-bordered w-full"
							placeholder="Description"
						></textarea>
						{errors.description && (
							<p className="text-red-500 text-xs">
								Description is required
							</p>
						)}
					</div>

					{/* Dropdown for instructor */}
					<div>
						<label className="block text-sm font-medium">
							Instructor
						</label>
						<select
							{...register("instructor", { required: true })}
							className="select select-bordered w-full"
						>
							<option value="">Select instructor</option>
							{users.map((user) => (
								<option key={user.id} value={user.id}>
									{user.email}
								</option>
							))}
						</select>
						{errors.instructor && (
							<p className="text-red-500 text-xs">
								Instructor is required
							</p>
						)}
					</div>

					<div>
						<label className="block text-sm font-medium">
							Schedule
						</label>
						<input
							type="date"
							{...register("schedule", {
								required: "Schedule is required",
							})}
							className="input input-bordered w-full"
							placeholder="Date"
						/>
						{errors.schedule && (
							<p className="text-red-500 text-xs">
								{errors.price.message}
							</p>
						)}
					</div>

					<div>
						<label className="block text-sm font-medium">
							Duration
						</label>
						<input
							type="number"
							{...register("duration", { required: true })}
							className="input input-bordered w-full"
							placeholder="Class length in minutes"
						/>
						{errors.duration && (
							<p className="text-red-500 text-xs">
								Duration is required
							</p>
						)}
					</div>

					<div>
						<label className="block text-sm font-medium">
							Capacity
						</label>
						<input
							type="number"
							{...register("capacity", { required: true })}
							className="input input-bordered w-full"
							placeholder="Max number of students"
						/>
						{errors.capacity && (
							<p className="text-red-500 text-xs">
								Capacity is required
							</p>
						)}
					</div>

					<button
						type="submit"
						className="btn bg-rose-600 rounded text-white hover:bg-rose-700 w-full"
					>
						Add Class
					</button>
				</form>
			) : (
				<div>
					<h3 className="text-lg font-medium mb-2">
						Upload Class Image
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
						className="btn bg-rose-600 text-white rounded hover:bg-rose-700 w-full mt-2"
						disabled={loading}
						onClick={handleImageUpload}
					>
						{loading ? "Uploading..." : "Upload Image"}
					</button>
				</div>
			)}
		</div>
	);
};

export default AddClass;

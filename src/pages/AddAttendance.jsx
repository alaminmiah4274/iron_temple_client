import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import authApiClient from "../services/auth_api_client";
import apiClient from "../services/api_client";

const AddAttendance = () => {
	const [loading, setLoading] = useState(false);
	const [users, setUsers] = useState([]);
	const [fitnessClasses, setFitnessClasses] = useState([]);

	// react hook form functionality
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm();

	// fetching users info
	useEffect(() => {
		authApiClient.get("/auth/users/").then((res) => setUsers(res.data));
	}, []);

	// fetching fitness class info
	useEffect(() => {
		apiClient
			.get("/fitness-classes/")
			.then((res) => setFitnessClasses(res.data));
	}, []);

	// submitting attendance form
	const handleMarkAttendance = async (data) => {
		const attendanceInfo = {
			user: parseInt(data.customer),
			fitness_class: parseInt(data.class_name),
			date: data.date,
			status: data.status,
		};

		setLoading(true);
		try {
			const response = await authApiClient.post(
				"/attendance/",
				attendanceInfo
			);

			if (response.status === 201) {
				return alert("Attendance successfully created");
			}
		} catch (err) {
			console.log(err);
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="max-w-2xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
			<h2 className="text-2xl font-semibold mb-4">Mark Attendance</h2>

			<form
				onSubmit={handleSubmit(handleMarkAttendance)}
				className="space-y-4"
			>
				<div>
					<label className="block text-sm font-medium">
						Customer
					</label>
					<select
						{...register("customer", { required: true })}
						className="select select-bordered w-full"
					>
						<option value="">Select User</option>
						{users.map((user) => (
							<option key={user.id} value={user.id}>
								{user.email}
							</option>
						))}
					</select>
					{errors.customer && (
						<p className="text-red-500 text-xs">
							Customer is required
						</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium">
						Class Name
					</label>
					<select
						{...register("class_name", { required: true })}
						className="select select-bordered w-full"
					>
						<option value="">Select Class</option>
						{fitnessClasses.map((fitnessClass) => (
							<option
								key={fitnessClass.id}
								value={fitnessClass.id}
							>
								{fitnessClass.name}
							</option>
						))}
					</select>
					{errors.class_name && (
						<p className="text-red-500 text-xs">
							Class is required
						</p>
					)}
				</div>

				<div>
					<label className="block text-sm font-medium">Date</label>
					<input
						type="date"
						{...register("date", { required: true })}
						className="input input-bordered w-full"
					/>
					{errors.date && (
						<p className="text-red-500 text-xs">Date is required</p>
					)}
				</div>

				{/* Dropdown for status */}
				<div>
					<label className="block text-sm font-medium">Status</label>
					<select
						{...register("status", { required: true })}
						className="select select-bordered w-full"
					>
						<option value="">Select Status</option>
						<option value="PRESENT">PRESENT</option>
						<option value="ABSENT">ABSENT</option>
					</select>
					{errors.status && (
						<p className="text-red-500 text-xs">
							Status is required
						</p>
					)}
				</div>

				<button
					type="submit"
					className="btn bg-rose-600 text-white rounded w-full mt-5"
					disabled={loading}
				>
					{loading ? "Submitting..." : "Mark Attendance"}
				</button>
			</form>
		</div>
	);
};

export default AddAttendance;

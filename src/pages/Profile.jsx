import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import ProfileForm from "../components/Dashboard/Profile/ProfileForm";
import PasswordChangeForm from "../components/Dashboard/Profile/PasswordChangeForm";
import ProfileButton from "../components/Dashboard/Profile/ProfileButton";
import SuccessAlert from "../components/SuccessAlert";
import ErrorAlert from "../components/ErrorAlert";
import useAuthContext from "../hooks/useAuthContext";

const Profile = () => {
	const [isEditing, setIsEditing] = useState(false);
	const {
		user,
		updateUserProfile,
		changePassword,
		errorMessage,
		successMessage,
	} = useAuthContext();

	const {
		register,
		handleSubmit,
		watch,
		setValue,
		formState: { errors, isSubmitting },
	} = useForm();

	// to show user info in react form to update
	useEffect(() => {
		Object.keys(user).forEach((key) => setValue(key, user[key]));
	}, [user, setValue]);

	const handleProfileForm = async (data) => {
		try {
			// profile update
			const profilePayload = {
				email: data.email,
				first_name: data.first_name,
				last_name: data.last_name,
				address: data.address,
				phone_number: data.phone_number,
			};

			await updateUserProfile(profilePayload);

			// password change
			if (data.new_password && data.current_password) {
				await changePassword({
					new_password: data.new_password,
					current_password: data.current_password,
				});
			}
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className="card w-full max-w-2xl mx-auto bg-base-100 shadow-xl">
			<div className="card-body">
				{errorMessage && <ErrorAlert error={errorMessage} />}
				{successMessage && <SuccessAlert success={successMessage} />}

				<h2 className="card-title text-2xl mb-4">Profile Info</h2>

				<form onSubmit={handleSubmit(handleProfileForm)}>
					<ProfileForm
						register={register}
						errors={errors}
						isEditing={isEditing}
					/>

					<PasswordChangeForm
						register={register}
						errors={errors}
						isEditing={isEditing}
						watch={watch}
					/>

					<ProfileButton
						isEditing={isEditing}
						setIsEditing={setIsEditing}
						isSubmitting={isSubmitting}
					/>
				</form>
			</div>
		</div>
	);
};

export default Profile;

const ProfileButton = ({ isEditing, setIsEditing, isSubmitting }) => {
	return (
		<div className="flex justify-center pt-4">
			{isEditing ? (
				<div className="space-x-4">
					<button
						type="submit"
						className="btn bg-rose-600 text-white px-8"
						disabled={isSubmitting}
					>
						{isSubmitting ? "Saving..." : "Save Changes"}
					</button>

					<button
						type="button"
						className="btn btn-outline px-8"
						onClick={() => setIsEditing(false)}
					>
						Cancel
					</button>
				</div>
			) : (
				<button
					type="button"
					className="btn bg-rose-600 text-white px-8"
					onClick={() => setIsEditing(true)}
				>
					Edit Profile
				</button>
			)}
		</div>
	);
};

export default ProfileButton;

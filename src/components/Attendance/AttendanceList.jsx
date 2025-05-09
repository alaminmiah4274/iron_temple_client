import useAuthContext from "../../hooks/useAuthContext";

const AttendanceList = ({ attendance }) => {
	const { user } = useAuthContext();

	const statusClass =
		attendance.status === "PRESENT"
			? "badge badge-success text-white"
			: "badge badge-error text-white";

	return (
		<tr>
			<td>{attendance.id}</td>
			{user.is_staff ? <td>{attendance.user.email}</td> : ""}
			<td>{attendance.fitness_class.name}</td>
			<td>
				<div className={statusClass}>{attendance.status}</div>
			</td>
			<td>{attendance.date}</td>
		</tr>
	);
};

export default AttendanceList;

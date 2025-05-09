import useAuthContext from "../../hooks/useAuthContext";
import AttendanceList from "./AttendanceList";

const AttendanceTable = ({ attendances }) => {
	const { user } = useAuthContext();

	return (
		<table className="table table-zebra">
			<thead>
				<tr>
					<th>Id</th>
					{user.is_staff ? <th>Customer</th> : ""}
					<th>Class</th>
					<th>Status</th>
					<th>Date</th>
				</tr>
			</thead>
			<tbody>
				{attendances.map((attendance) => (
					<AttendanceList
						key={attendance.id}
						attendance={attendance}
					/>
				))}
			</tbody>
		</table>
	);
};

export default AttendanceTable;

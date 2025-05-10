import { useEffect, useState } from "react";
import authApiClient from "../services/auth_api_client";
import Spinner from "../components/Spinner";
import AttendanceTable from "../components/Attendance/AttendanceTable";

const Attendance = () => {
	const [attendances, setAttendances] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);
		authApiClient
			.get("/attendance/")
			.then((res) => setAttendances(res.data))
			.finally(() => setLoading(false));
	}, []);

	return (
		<div className="mt-6 card bg-white shadow-sm">
			<div className="card-body">
				<h3 className="text-xl">Attendance</h3>

				{loading ? (
					<Spinner />
				) : (
					<div className="overflow-x-auto text-xs md:text-lg">
						<AttendanceTable attendances={attendances} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Attendance;

import { useEffect, useState } from "react";
import Spinner from "../components/Spinner";
import authApiClient from "../services/auth_api_client";

const Users = () => {
	const [users, setUsers] = useState([]);
	const [userLoading, setUserLoading] = useState(false);

	useEffect(() => {
		setUserLoading(true);
		authApiClient
			.get("/auth/users/")
			.then((res) => setUsers(res.data))
			.finally(() => setUserLoading(false));
	}, []);

	return (
		<div className="mt-6 card bg-white shadow-sm">
			<div className="card-body">
				<h3 className="text-xl">Users</h3>

				{userLoading ? (
					<Spinner />
				) : (
					<div className="overflow-x-auto">
						<table className="table table-zebra">
							<thead>
								<tr>
									<th>User Id</th>
									<th>Name</th>
									<th>Email</th>
									<th>Role</th>
								</tr>
							</thead>
							<tbody>
								{users.map((user) => (
									<tr key={user.id}>
										<td>{user.id}</td>
										<td>
											{user.first_name} {user.last_name}
										</td>
										<td>{user.email}</td>
										<td>
											<div>{user.role}</div>
										</td>
										<td></td>
									</tr>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</div>
	);
};

export default Users;

import { useEffect, useState } from "react";
import apiClient from "../services/api_client";
import Spinner from "../components/Spinner";
import DashboardMembershipTable from "../components/DashboardMembership/DashboardMembershipTable";

const DashboardMembership = () => {
	const [memberships, setMemberships] = useState([]);
	const [membershipLoading, setMembershipLoading] = useState(false);

	useEffect(() => {
		setMembershipLoading(true);
		apiClient
			.get("/memberships/")
			.then((res) => setMemberships(res.data))
			.finally(() => setMembershipLoading(false));
	}, []);

	if (membershipLoading) return <Spinner />;

	return (
		<div className="mt-6 card bg-white shadow-sm">
			<div className="card-body">
				<h3 className="text-xl">Memberships</h3>

				<div className="overflow-x-auto">
					<DashboardMembershipTable memberships={memberships} />
				</div>
			</div>
		</div>
	);
};

export default DashboardMembership;

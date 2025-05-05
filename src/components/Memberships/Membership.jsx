import { useEffect, useState } from "react";
import MembershipList from "./MembershipList";
import axios from "axios";
import apiClient from "../../services/api_client";
import Spinner from "../Spinner";

const Membership = () => {
	const [memberships, setMemberships] = useState([]);
	const [membershipLoading, setMembershipLoading] = useState(false);

	// fetching membership plans
	useEffect(() => {
		setMembershipLoading(true);
		apiClient
			.get("/memberships/")
			.then((res) => setMemberships(res.data))
			.finally(() => setMembershipLoading(false));
	}, []);

	return (
		<div className="my-[100px] px-10">
			<div className="flex flex-col items-center justify-center mb-10">
				<h1 className="text-4xl md:text-5xl text-center font-semibold mb-5 md:mb-10">
					Our Membership Plans
				</h1>

				<hr className="text-rose-500 border-2 w-[80px] md:w-[150px] mb-5 md:mb-10" />
			</div>

			{membershipLoading ? (
				<Spinner />
			) : (
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
					{memberships.map((membership) => (
						<MembershipList
							key={membership.id}
							membership={membership}
						/>
					))}
				</div>
			)}
		</div>
	);
};

export default Membership;

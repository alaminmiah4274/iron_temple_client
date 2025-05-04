import { useEffect, useState } from "react";
import MembershipList from "./MembershipList";
import axios from "axios";

const Membership = () => {
	const [memberships, setMemberships] = useState([]);

	useEffect(() => {
		axios
			.get("https://iron-temple-swart.vercel.app/api/v1/memberships/")
			.then((res) => setMemberships(res.data));
	}, []);

	return (
		<div>
			{memberships.map((membership) => (
				<MembershipList key={membership.id} membership={membership} />
			))}
		</div>
	);
};

export default Membership;

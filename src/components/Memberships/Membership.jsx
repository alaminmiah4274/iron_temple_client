import { useEffect, useState } from "react";
import MembershipList from "./MembershipList";
import apiClient from "../../services/api_client";
import Spinner from "../Spinner";
import MembershipSearchField from "./MembershipSearchField";
import MembershipPagination from "./MembershipPagination";
import authApiClient from "../../services/auth_api_client";
import useAuthContext from "../../hooks/useAuthContext";
import { useNavigate } from "react-router";

const ITEMS_PER_PAGE = 6;

const Membership = () => {
	const [memberships, setMemberships] = useState([]);
	const [membershipLoading, setMembershipLoading] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const { user } = useAuthContext();
	const navigate = useNavigate();

	// fetching membership plans
	useEffect(() => {
		setMembershipLoading(true);
		apiClient
			.get(`/memberships/?search=${searchQuery}`)
			.then((res) => {
				setMemberships(res.data);
				setTotalPages(Math.ceil(res.data.length / ITEMS_PER_PAGE));
			})
			.finally(() => setMembershipLoading(false));
	}, [searchQuery]);

	// sliced membership items for pagination
	const currentItems = memberships.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE
	);

	// to subscribe membership
	const handleMembershipSubscription = async (membershipId) => {
		// preventing the user from subscribing without login
		if (user) {
			alert("You need to log in");
			return;
		}

		try {
			const response = await authApiClient.post("/subscriptions/", {
				membership_id: membershipId,
			});
			console.log(response);
			if (response.status === 201) {
				alert("Your subscription is done");
			}
			navigate("/dashboard/makePayment");
		} catch (err) {
			if (err.response.status === 400) {
				alert(err.response?.data[0]);
			}
		}
	};

	return (
		<div className="my-[50px] px-10">
			<div className="flex flex-col md:flex-row items-center justify-between mb-15">
				<h1 className="text-2xl md:text-4xl text-center font-semibold mb-5 md:mb-0">
					Our Membership Plans
				</h1>

				{/* Search Field */}
				<MembershipSearchField
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
				/>
			</div>

			{/* cards */}
			{membershipLoading ? (
				<Spinner />
			) : (
				<div>
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
						{currentItems.map((membership) => (
							<MembershipList
								key={membership.id}
								membership={membership}
								handleSubscription={
									handleMembershipSubscription
								}
							/>
						))}
					</div>

					<MembershipPagination
						totalPages={totalPages}
						currrentPage={currentPage}
						handleCurrentPage={setCurrentPage}
					/>
				</div>
			)}
		</div>
	);
};

export default Membership;

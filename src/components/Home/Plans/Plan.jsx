import axios from "axios";
import { useEffect, useState } from "react";
import PlanList from "./PlanList";
import { Link } from "react-router";

const Plan = () => {
	const [plans, setPlans] = useState([]);

	useEffect(() => {
		axios
			.get("https://iron-temple-swart.vercel.app/api/v1/memberships/")
			.then((res) => setPlans(res.data.slice(0, 3)));
	}, []);

	return (
		<section className="my-[100px] md:my-[200px]">
			{/* HEADLINE OF THE PLAN (MEMBERSHIP->HOME PAGE) SECTION */}
			<div className="flex flex-col items-center justify-center mb-10">
				<h1 className="text-4xl md:text-5xl text-center font-semibold mb-5 md:mb-10">
					Our Membership Plans
				</h1>
				<hr className="text-rose-500 border-2 w-[80px] md:w-[150px] mb-5 md:mb-10" />
			</div>

			{/* SHOWING THE PLAN (MEMBERSHIPS) CARD */}
			<div className="grid grid-cols-1 md:grid-cols2 lg:grid-cols-3 gap-10 px-5">
				{plans.map((plan) => (
					<PlanList key={plan.id} plan={plan} />
				))}
			</div>

			{/* BUTTON FOR GOING TO MEMBERSHIP COMPONENT */}
			<div className="flex items-center justify-center mt-10 md:my-[80px]">
				<Link
					to="/memberships"
					className="btn md:py-8 bg-rose-600 rounded text-white text-xs md:text-xl hover:bg-rose-700"
				>
					Explore Membership Options
				</Link>
			</div>
		</section>
	);
};

export default Plan;

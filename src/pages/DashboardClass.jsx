import { useEffect, useState } from "react";
import apiClient from "../services/api_client";
import DashboardClassTable from "../components/DashboardClass/DashboardClassTable";
import Spinner from "../components/Spinner";

const DashboardClass = () => {
	const [fitnessClasses, setFitnessClasses] = useState([]);
	const [classesLoading, setClassesLoading] = useState(false);

	useEffect(() => {
		setClassesLoading(true);
		apiClient
			.get("/fitness-classes/")
			.then((res) => setFitnessClasses(res.data))
			.finally(() => setClassesLoading(false));
	}, []);

	return (
		<div className="mt-6 card bg-white shadow-sm">
			<div className="card-body">
				<h3 className="text-xl">Classes</h3>

				{classesLoading ? (
					<Spinner />
				) : (
					<div className="overflow-x-auto">
						<DashboardClassTable fitnessClasses={fitnessClasses} />
					</div>
				)}
			</div>
		</div>
	);
};

export default DashboardClass;

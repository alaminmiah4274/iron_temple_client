import { useEffect, useState } from "react";
import axios from "axios";
import ClassList from "./ClassList";
import apiClient from "../../services/api_client";
import Spinner from "../Spinner";

const ClassPage = () => {
	const [classes, setClasses] = useState([]);
	const [classLoading, setClassLoading] = useState(false);

	// fetching fitness class info
	useEffect(() => {
		setClassLoading(true);
		apiClient
			.get("/fitness-classes/")
			.then((res) => setClasses(res.data))
			.finally(() => setClassLoading(false));
	}, []);

	return (
		<section className="my-[80px] px-10">
			<div className="flex flex-col items-center justify-center mb-10">
				<h1 className="text-4xl md:text-5xl text-center font-semibold mb-5 md:mb-10">
					Our Fitness Classes
				</h1>

				<hr className="text-rose-500 border-2 w-[80px] md:w-[150px] mb-5 md:mb-10" />
			</div>

			{classLoading ? (
				<Spinner />
			) : (
				<div>
					{/* class info sending to the class list component */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
						{classes.map((classInfo) => (
							<ClassList
								key={classInfo.id}
								classInfo={classInfo}
							/>
						))}
					</div>
				</div>
			)}
		</section>
	);
};

export default ClassPage;

/*
https://iron-temple-swart.vercel.app/api/v1/

axios
  .get("https://iron-temple-swart.vercel.app/api/v1/fitness-classes/")
  .then((res) => setClasses(res.data.slice(0, 3)));

*/

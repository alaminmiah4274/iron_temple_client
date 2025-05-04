import { useEffect, useState } from "react";
import axios from "axios";
import ClassList from "./ClassList";

const ClassPage = () => {
	const [classes, setClasses] = useState([]);

	useEffect(() => {
		axios
			.get("https://iron-temple-swart.vercel.app/api/v1/fitness-classes/")
			.then((res) => setClasses(res.data));
	}, []);

	return (
		<section className="my-10">
			<h1 className="text-4xl text-center font-semibold mb-10">
				Our Fitness Classes
			</h1>
			<div>
				{classes.map((classInfo) => (
					<ClassList key={classInfo.id} classInfo={classInfo} />
				))}
			</div>
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

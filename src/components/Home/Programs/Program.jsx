import axios from "axios";
import { useEffect, useState } from "react";
import ProgramList from "./ProgramList";
import { Link } from "react-router";
import Spinner from "../../Spinner";

const Program = () => {
	const [programs, setPrograms] = useState([]);
	const [programLoading, setProgramLoading] = useState(false);

	// ONLY 3 FITNESS CLASS DATA IS BEING FETCHING FOR HOME PAGE
	useEffect(() => {
		setProgramLoading(true);
		axios
			.get("https://iron-temple-swart.vercel.app/api/v1/fitness-classes/")
			.then((res) => setPrograms(res.data.slice(0, 3)))
			.finally(() => setProgramLoading(false));
	}, []);

	return (
		<section className="my-[100px] md:my-[150px]">
			{/* HEADLINE OF THE PROGRAM (FITNESS CALSS HOME PAGE) SECTION */}
			<div className="flex flex-col items-center justify-center mb-10">
				<h1 className="text-4xl md:text-5xl text-center font-semibold mb-5 md:mb-10">
					Our Fitness Classes
				</h1>
				<hr className="text-rose-500 border-2 w-[80px] md:w-[150px] mb-5 md:mb-10" />
			</div>

			{programLoading ? (
				<Spinner />
			) : (
				<div>
					{/* SHOWING THE PROGRAM (FITNESS CALSS HOME PAGE) INFO */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
						{programs.map((program) => (
							<ProgramList key={program.id} program={program} />
						))}
					</div>

					{/* BUTTON FOR GOING TO FITNESS CLASS COMPONENT */}
					<div className="flex items-center justify-center mt-10 md:my-[80px]">
						<Link
							to="/classes"
							className="btn md:py-8 bg-rose-600 rounded text-white text-xs md:text-xl hover:bg-rose-700"
						>
							Explore More Classes
						</Link>
					</div>
				</div>
			)}
		</section>
	);
};

export default Program;

/*
https://iron-temple-swart.vercel.app/api/v1/
*/

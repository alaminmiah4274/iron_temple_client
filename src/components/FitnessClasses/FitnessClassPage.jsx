import { useEffect, useState } from "react";
import apiClient from "../../services/api_client";
import Spinner from "../Spinner";
import FitnessSearchField from "./FitnessSearchField";
import FitnessPagination from "./FitnessPagination";
import FitnessClassList from "./FitnessClassList";
import authApiClient from "../../services/auth_api_client";
import useAuthContext from "../../hooks/useAuthContext";

const ITEMS_PER_PAGE = 6;

const FitnessClassPage = () => {
	const [classes, setClasses] = useState([]);
	const [classLoading, setClassLoading] = useState(false);
	const [totalPages, setTotalPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchQuery, setSearchQuery] = useState("");
	const { user } = useAuthContext();

	// fetching fitness class info
	useEffect(() => {
		setClassLoading(true);
		apiClient
			.get(`/fitness-classes/?search=${searchQuery}`)
			.then((res) => {
				setClasses(res.data);
				setTotalPages(Math.ceil(res.data.length / ITEMS_PER_PAGE));
			})
			.finally(() => setClassLoading(false));
	}, [searchQuery]);

	// to slice fitness class for pagination purpose
	const currentItems = classes.slice(
		(currentPage - 1) * ITEMS_PER_PAGE,
		currentPage * ITEMS_PER_PAGE
	);

	// to book fitness class
	const handleFitnessClassBooking = async (classId) => {
		if (user) {
			try {
				const response = await authApiClient.post("/bookings/", {
					fitness_class: classId,
				});

				if (response.status === 200) {
					alert(response.data.status);
				}
			} catch (err) {
				if (err.status === 400) {
					alert(err.response?.data?.non_field_errors[0]);
				}
			}
		} else {
			alert("You need to log in");
		}
	};

	return (
		<section className="my-[80px] px-10">
			<div className="flex flex-col md:flex-row items-center justify-between mb-15">
				<h1 className="text-2xl md:text-4xl text-center font-semibold mb-5 md:mb-0">
					Our Fitness Classes
				</h1>

				{/* search input field */}
				<FitnessSearchField
					searchQuery={searchQuery}
					setSearchQuery={setSearchQuery}
				/>
			</div>

			{classLoading ? (
				<Spinner />
			) : (
				<div>
					<div>
						{/* class info sending to the class list component */}
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
							{currentItems.map((classInfo) => (
								<FitnessClassList
									key={classInfo.id}
									classInfo={classInfo}
									handleBooking={handleFitnessClassBooking}
								/>
							))}
						</div>
					</div>

					<FitnessPagination
						totalPages={totalPages}
						currentPage={currentPage}
						handleCurrentPage={setCurrentPage}
					/>
				</div>
			)}
		</section>
	);
};

export default FitnessClassPage;

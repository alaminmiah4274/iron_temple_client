import fullyEquipped from "/src/assets/facility/fully_equipped.svg";
import personalTraining from "/src/assets/facility/personal_training.svg";
import dietPlan from "/src/assets/facility/diet-plan.svg";
import steamBath from "/src/assets/facility/steam_bath.svg";
import locker from "/src/assets/facility/lockers.svg";
import trainer from "/src/assets/facility/p_trainer.svg";
import FacilityItem from "./FacilityItem";

const Facility = () => {
	const items = [
		{
			name: "Fully Equipped Gym",
			logo: fullyEquipped,
		},

		{
			name: "Personal Training",
			logo: personalTraining,
		},
		{
			name: "Diet Plan",
			logo: dietPlan,
		},
		{
			name: "Steam Bath",
			logo: steamBath,
		},
		{
			name: "Lockers",
			logo: locker,
		},
		{
			name: "Devoted Trainers",
			logo: trainer,
		},
	];

	return (
		<section className="my-[100px]">
			<div className="flex flex-col items-center justify-center mb-10">
				<h1 className="text-4xl md:text-5xl text-center px-3 md:px-0 font-semibold mb-5 md:mb-10">
					Why Choose Us
				</h1>
				<hr className="text-rose-500 border-2 w-[80px] md:w-[150px] mb-5 md:mb-10" />
			</div>

			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-5">
				{items.map((item, idx) => (
					<FacilityItem key={idx} index={idx} item={item} />
				))}
			</div>
		</section>
	);
};

export default Facility;

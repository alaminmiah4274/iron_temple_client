import HeroCarousel from "../components/Home/Carousel/HeroCarousel";
import Facility from "../components/Home/Facilities/Facility";
import Plan from "../components/Home/Plans/Plan";
import Program from "../components/Home/Programs/Program";
import About from "./About";
import Contact from "./Contact";

const Home = () => {
	return (
		<>
			<HeroCarousel />
			<Facility />
			<Program />
			<About />
			<Plan />
			<Contact />
		</>
	);
};

export default Home;

import ContactUs from "@/components/contactUs";
import GenericContent from "@/components/genericContent";
import Hero from "@/components/global/hero";

export const metadata = {
	title: 'Terms of Services',
};


const heroData = { title: "Terms of Services", description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim ipsum aliquam est accusantium nostrum repellat natus id quaerat necessitatibus officia, deserunt, harum possimus quam consectetur in ut temporibus placeat excepturi?'};

const PrivacyPage = () => {
	return (
	<main>
		<Hero data={heroData} />
		<GenericContent />
		<ContactUs />
	</main>
	);
};

export default PrivacyPage;

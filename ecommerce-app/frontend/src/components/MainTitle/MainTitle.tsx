import "aos/dist/aos.css";

type MainTitleProps = {
	title: string;
	description: string;
};
const MainTitle = ({ title, description }: MainTitleProps) => {
	return (
		<div className="title text-center mb-5" data-aos="fade-up">
			<h1 className="fw-bold fs-2 text-capitalize">{title}</h1>
			<p className="text-black-50">{description}</p>
		</div>
	);
};

export default MainTitle;

import "./BigBannel.css";
import "aos/dist/aos.css";

type BigBannelProps = {
	className: string;
	text: string;
	title: string;
	description: string;
	dataAos: string;
}

const BigBannel = ({ className, text, title, description, dataAos }: BigBannelProps) => {
	return (
		<div
			className={`big-bannel ${className} d-flex justify-content-center align-items-start flex-column px-5`}
			data-aos={dataAos}
		>
			<p className="text-white-50 fs-4">{title}</p>
			<h1>{text}</h1>
			<p className="mt-2 fs-5">{description}</p>
			<button className="btn btn-outline-light mt-2 text-capitalize">
				learn more
			</button>
		</div>
	);
};

export default BigBannel;

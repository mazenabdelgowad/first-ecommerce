import "./SmallBannels.css"
import "aos/dist/aos.css"
type SmallBannelsProps = {
	className: string;
	description: string;
	title: string;
	dataAos: string;
}
const SmallBannels = ({ className, description, title, dataAos }: SmallBannelsProps) => {
	return (
		<div className={`small-bannels ${className} d-flex flex-column justify-content-center rounded`}
			data-aos={dataAos}
		>
			<h3 className="fw-bold text-uppercase">{title}</h3>
			<p className="text-danger fw-bold">{description}</p>
		</div>
	)
}

export default SmallBannels

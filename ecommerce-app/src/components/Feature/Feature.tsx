type FeaturePropsType = {
	url: string;
	text: string;
}
const Feature = ({ url, text }: FeaturePropsType) => {
	return (
		<div className="feature rounded bg-white text-center p-2 text-capitalize"
			style={{ boxShadow: "0 0 10px #ddd", border: "1px solid #dedede" }}
		>
			<img src={url} alt={text} />
			<h5 className="mt-2">{text}</h5>
		</div>
	)
}

export default Feature

import { FaCheck, FaTimes } from "react-icons/fa";

type LableProps = {
	id: string;
	labelText: string;
	validInput: boolean;
	input: string | number;
};

const Label = ({ id, labelText, validInput, input }: LableProps) => {
	return (
		<label htmlFor={id}>
			<span>{labelText} </span>
			{validInput && input && (
				<span className="text-success">
					<FaCheck />
				</span>
			)}
			{!validInput && input && (
				<span className="text-danger">
					<FaTimes />
				</span>
			)}
		</label>
	);
};

export default Label;

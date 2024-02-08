type InputProps = {
	type: string;
	name: string;
	id: string;
	value: string | number;
	onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
	ariaDescribedby: string;
	autoComplete: string;
	validInput: boolean;
};

const Input = ({
	type,
	name,
	id,
	value,
	autoComplete,
	ariaDescribedby,
	onChange,
	validInput,
}: InputProps) => {
	return (
		<input
			className="sign-input"
			type={type}
			name={name}
			id={id}
			value={value}
			autoComplete={autoComplete}
			onChange={onChange}
			required
			aria-invalid={validInput ? "false" : "true"}
			aria-describedby={ariaDescribedby}
		/>
	);
};

export default Input;

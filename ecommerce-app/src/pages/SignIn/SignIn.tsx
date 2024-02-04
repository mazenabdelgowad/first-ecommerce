import { FormEvent, useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const SignIn = () => {
	const [email, setEmail] = useState<string>("");
	const [validEmail, setValidEmail] = useState<boolean>(true); // =============================
	const emailRef = useRef<HTMLInputElement | null>(null);

	const [password, setPassword] = useState<string>("");
	const [validPassword, setValidPassword] = useState<boolean>(true);
	const passRef = useRef<HTMLInputElement | null>(null);

	const storedEmail = localStorage.getItem("email");
	const storedPass = localStorage.getItem("password");
	const navigate = useNavigate();

	useEffect(() => {
		emailRef?.current?.focus();
	}, [])

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (email !== storedEmail) {
			emailRef?.current?.focus();
			setEmail("");
			setValidEmail(false);
			return;
		}
		if (password !== storedPass) {
			passRef?.current?.focus();
			setPassword("");
			setValidPassword(false);
			return;
		}
		localStorage.setItem("IsSigned-up", "signed-up")
		navigate("/")
	};

	return (
		<div>
			<div className="sign-page d-flex flex-column justify-content-center align-items-center gap-2">
				<NavLink to="/" className="mt-2">
					<img src={logo} alt="Logo" />
				</NavLink>
				<div className="form">
					<form className="sign-up" onSubmit={(e) => handleSubmit(e)}>
						<h3 className="fw-bold mb-3 text-center">Welcome back</h3>
						<label htmlFor="user-email">Email</label>
						<input
							className="sign-input"
							type="text"
							name="email"
							ref={emailRef}
							id="user-email"
							value={email}
							required
							autoComplete="on"
							onChange={(e) => {
								setValidEmail(true);
								setEmail(e.target.value);
							}}
							aria-describedby="emailIdnNote"
							aria-invalid={validEmail}
						/>
						<p
							id="emailIdnNote"
							className={validEmail === false ? "instructions" : "offscreen"}
						>
							wrong email
							<span className="ms-1 text-danger">
								<FaTimes />
							</span>
						</p>

						<label id="password">Password</label>
						<input
							className="sign-input"
							type="password"
							ref={passRef}
							name="user-pass"
							id="password"
							value={password}
							onChange={(e) => {
								setValidPassword(true);
								setPassword(e.target.value);
							}}
							aria-describedby="pwdnote"
							aria-invalid={validPassword}
							autoComplete="off"
						/>
						<p
							id="pwdnote"
							className={validPassword === false ? "instructions" : "offscreen"}
						>
							wrong password
							<span className="text-danger ms-1">
								<FaTimes />
							</span>
						</p>

						<input type="submit" value="Continue" className="sign-input mt-4" />
						<p className="mt-2">
							<span className="me-1">Don't have an account?</span>
							<NavLink to="/signup">sign up</NavLink>
						</p>
					</form>
				</div>
			</div>
		</div>
	);
};

export default SignIn;

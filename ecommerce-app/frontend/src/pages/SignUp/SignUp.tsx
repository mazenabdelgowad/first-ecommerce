import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FormEvent, useEffect, useRef, useState } from "react";
import { FaInfoCircle, FaTimes } from "react-icons/fa";
import Label from "../../components/Label/Label";
import useDebounce from "../../hooks/useDepounce";
import { useNavigate } from "react-router-dom";

const USER_REGEX = /^[A-z][A-z0-9-_" "]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const SignUp = () => {
	// User name
	const [userName, setUserName] = useState<string>("");
	const [validUserName, setValidUserName] = useState<boolean>(false);
	const userDebounce = useDebounce<string>(userName);
	const userRef = useRef<HTMLInputElement | null>(null);
	// User Email
	const [email, setEmail] = useState<string>("");
	const [validEmail, setValidEmail] = useState<boolean>(false);
	const emailDebounce = useDebounce<string>(email);
	const emailRef = useRef<HTMLInputElement | null>(null);

	// User Password
	const [password, setPassword] = useState<string>("");
	const [validPassword, setValidPassword] = useState<boolean>(false);
	const [focusPassword, setFocusPassword] = useState<boolean>(false);
	const passwordDebounce = useDebounce<string>(password);
	const passRef = useRef<HTMLInputElement | null>(null);
	// User confirm Password
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [validConfirmPassword, setValidConfirmPassword] =
		useState<boolean>(false);
	const [focusConfirmPassword] = useState<boolean>(false);
	const confirmPasswordDebounce = useDebounce<string>(confirmPassword);
	const confirmPassRef = useRef<HTMLInputElement | null>(null);

	const navigate = useNavigate();
	// console.log(navigator.geolocation.getCurrentPosition(() => {
	// 	console.log("location");
	// }));

	useEffect(() => {
		userRef?.current?.focus();
	}, []);

	//  Validation functions
	useEffect(() => {
		const validUser = USER_REGEX.test(userName);
		setValidUserName(validUser);
	}, [userName, userDebounce]);

	useEffect(() => {
		const validEmail = EMAIL_REGEX.test(email);
		setValidEmail(validEmail);
	}, [email, emailDebounce]);

	useEffect(() => {
		const validPassword = PWD_REGEX.test(password);
		setValidPassword(validPassword);
		const match = confirmPassword === password;
		setValidConfirmPassword(match);
	}, [confirmPassword, password, passwordDebounce, confirmPasswordDebounce]);

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!userName || !email || !password || !confirmPassword) {
			if (!userName) userRef?.current?.focus();
			else if (!email) emailRef?.current?.focus();
			else if (!password) passRef?.current?.focus();
			else if (!confirmPassword) confirmPassRef?.current?.focus();
		} else {
			console.log(`welcome ${userName}`);
			const newUser = {
				userName,
				email,
				password,
			};
			console.log(newUser);
			localStorage.setItem("email", email);
			localStorage.setItem("password", password);
			navigate("/signin");
		}
	};

	return (
		<div className="sign-page d-flex flex-column justify-content-center align-items-center gap-2">
			<NavLink to="/" className="mt-2">
				<img src={logo} alt="Logo" />
			</NavLink>
			<div className="form">
				<form className="sign-up" onSubmit={(e) => handleSubmit(e)}>
					<h3 className="fw-bold mb-3">Create account</h3>

					<Label
						id="username"
						labelText="Your name"
						validInput={validUserName}
						input={userDebounce}
					/>
					<input
						type="text"
						name="user"
						ref={userRef}
						id="username"
						value={userName}
						autoComplete="off"
						onChange={(e) => {
							setUserName(e.target.value);
						}}
						aria-describedby="uidnote"
						aria-invalid={validUserName ? "false" : "true"}
					/>
					<p
						id="uidnote"
						className={
							userDebounce && !validUserName ? "instructions" : "offscreen"
						}
					>
						<span>
							<FaInfoCircle />{" "}
						</span>
						4 to 24 characters.
						<br />
						Must begin with a letter.
						<br />
						Letters, numbers, undersconers, hyphen allowed.
					</p>

					<Label
						id="user-email"
						labelText="Email"
						validInput={validEmail}
						input={emailDebounce}
					/>
					<input
						type="text"
						name="email"
						ref={emailRef}
						id="user-email"
						value={email}
						autoComplete="on"
						onChange={(e) => setEmail(e.target.value)}
						aria-describedby="emailIdnNote"
						aria-invalid={validEmail ? "false" : "true"}
					/>
					<p
						id="emailIdnNote"
						className={
							emailDebounce && !validEmail ? "instructions" : "offscreen"
						}
					>
						<span className="text-danger">
							<FaTimes />
						</span>
						unvalid email
					</p>

					<Label
						id="password"
						labelText="Password"
						validInput={validPassword}
						input={passwordDebounce}
					/>
					<input
						type="password"
						name="user-pass"
						ref={passRef}
						id="password"
						value={password}
						onChange={(e) => {
							setPassword(e.target.value)
						}}
						aria-describedby="pwdnote"
						aria-invalid={validPassword ? "false" : "true"}
						autoComplete="off"
						onFocus={() => setFocusPassword(true)}
						onBlur={() => setFocusPassword(false)}
					/>
					<p
						id="pwdnote"
						className={
							focusPassword && !validPassword ? "instructions" : "offscreen"
						}
					>
						<span className="me-1">
							<FaInfoCircle />
						</span>
						8 to 24 characters. <br />
						Must inclued an uppercase, <br />
						lowercase letters, a number, <br />
						and a special character. <br />
						Allowed special characters:
						<span aria-label="exclamation mark">!</span>
						<span aria-label="at symbol">@</span>
						<span aria-label="hastag">#</span>
						<span aria-label="dollar sign">$</span>
						<span aria-label="percent">%</span>
					</p>

					<Label
						id="password-confirm"
						labelText="Re-enter password"
						validInput={validConfirmPassword}
						input={confirmPasswordDebounce}
					/>
					<input
						type="password"
						name="user-confirm-pass"
						ref={confirmPassRef}
						id="password-confirm"
						value={confirmPassword}
						onChange={(e) => setConfirmPassword(e.target.value)}
						aria-describedby="confirmPwdnote"
						ariea-invalid={validConfirmPassword ? "false" : "true"}
						autoComplete="off"
					/>
					<p
						id="confirmPwdnote"
						className={
							!validConfirmPassword &&
								focusConfirmPassword &&
								confirmPasswordDebounce
								? "instructions"
								: "offscreen"
						}
					>
						<span className="me-1">
							<FaInfoCircle />
						</span>
						Must match the above password.
					</p>
					<input type="submit" value="Continue" className="sign-input" />
					<p className="mt-2">
						<span>Already have an account? </span>
						<NavLink to="/signin">sign in</NavLink>
					</p>
				</form>
			</div>
		</div>
	);
};

export default SignUp;

//let userData = new FormData(e.target as HTMLFormElement);
// 	let data = Object.fromEntries(userData.entries());

// 	data["lat"] = position[0];
// 	data["long"] = position[1];

// 	fetch("/api/users", { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } })
// 	axios.post("/api/register", data).then((res) => {
// 		window.localStorage.setItem("token", res.data.token);
// 		history.push("/dashboard");
// 	}).catch((err) => alert(err.message));
// };

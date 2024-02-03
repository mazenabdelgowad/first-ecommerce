/* eslint-disable @typescript-eslint/no-unused-vars */
import "./SignUp.css";
import logo from "../../assets/images/logo.png";
import { NavLink } from "react-router-dom";
import { FormEvent, useEffect, useRef, useState } from "react";
import { FaInfoCircle, FaTimes } from "react-icons/fa";
import Label from "../../components/Label/Label";
import useDebounce from "../../hooks/useDepounce";
import { useNavigate } from "react-router-dom"

const USER_REGEX = /^[A-z][A-z0-9-_" "]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;

const SignUp = () => {
	const userRef = useRef<HTMLInputElement | null>(null);

	const [userName, setUserName] = useState<string>("");
	const [validUserName, setValidUserName] = useState<boolean>(false);
	const [, setFocusUserName] = useState<boolean>(false);
	const userDebounce = useDebounce<string>(userName);

	const [password, setPassword] = useState<string>("");
	const [validPassword, setValidPassword] = useState<boolean>(false);
	const [focusPassword, setFocusPassword] = useState<boolean>(false);
	const passwordDebounce = useDebounce<string>(password);

	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [validConfirmPassword, setValidConfirmPassword] =
		useState<boolean>(false);
	const [focusConfirmPassword, setFocusConfirmPassword] =
		useState<boolean>(false);
	const confirmPasswordDebounce = useDebounce<string>(confirmPassword);

	const [email, setEmail] = useState<string>("");
	const [validEmail, setValidEmail] = useState<boolean>(true);
	const [, setFocusEmail] = useState<boolean>(false);
	const emailDebounce = useDebounce<string>(email);

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
		if (!userName) {
			setFocusUserName(true);
		} else if (!email) {
			setFocusEmail(true);
		} else if (!password) {
			setFocusPassword(true);
		} else if (!confirmPassword) {
			setFocusConfirmPassword(true);
		} else {
			console.log(`welcome ${userName}`);
			const newUser = {
				userName,
				email,
				password,
			};
			console.log(newUser);
			navigate("/signin")
		}
	};

	return (
		<div className="sign-up-page d-flex flex-column justify-content-center align-items-center gap-2">
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
						id="username"
						ref={userRef}
						value={userName}
						autoComplete="off"
						onChange={(e) => {
							setUserName(e.target.value);
						}}
						required
						aria-invalid={validUserName ? "false" : "true"}
						aria-describedby="uidnote"
						onFocus={() => setFocusUserName(true)}
						onBlur={() => setFocusUserName(false)}
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
						id="user-email"
						value={email}
						autoComplete="on"
						onChange={(e) => setEmail(e.target.value)}
						required
						aria-invalid={validUserName ? "false" : "true"}
						aria-describedby="emailIdnNote"
						onFocus={() => setFocusEmail(true)}
						onBlur={() => setFocusEmail(false)}
					/>
					<p
						id="emailIdnNote"
						className={emailDebounce && !validEmail ? "instructions" : "offscreen"}
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
						id="password"
						value={password}
						placeholder="Password"
						onChange={(e) => setPassword(e.target.value)}
						required
						aria-invalid={validPassword ? "false" : "true"}
						aria-describedby="pwdnote"
						onFocus={() => setFocusPassword(true)}
						onBlur={() => setFocusPassword(false)}
					/>
					<p
						id="pwdnote"
						className={
							focusPassword && !validPassword ? "instructions" : "offscreen"
						}
					>
						<span>
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
						id="password-confirm"
						value={confirmPassword}
						placeholder="Confirm Password"
						onChange={(e) => setConfirmPassword(e.target.value)}
						required
						aria-invalid={validConfirmPassword ? "false" : "true"}
						aria-describedby="confirmPwdnote"
						onFocus={() => setFocusConfirmPassword(true)}
						onBlur={() => setFocusConfirmPassword(false)}
					/>
					<p
						id="confirmPwdnote"
						className={
							(!validConfirmPassword &&
								focusConfirmPassword &&
								confirmPasswordDebounce)
								? "instructions"
								: "offscreen"
						}
					>
						<span className="me-1">
							<FaInfoCircle />
						</span>
						Must match the above password.
					</p>
					<input type="submit" value="Continue" />
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

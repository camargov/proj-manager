"use client";
import Link from "next/link";
import classes from "./signInUp.module.css";
import { useState } from "react";

const SignInUp = (props) => {
	const { signIn = true, onSubmit } = props;

	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [passwordVisible, setPasswordVisible] = useState(false);

	const handlePasswordVisibleClick = () => {
		setPasswordVisible((prev) => !prev);
	};

	const handleSubmit = () => {
		onSubmit?.();
	};

	return (
		<div className={classes.container}>
			<h2>{signIn ? "Welcome back" : "Welcome to Project Manager"}</h2>
			<form onSubmit={handleSubmit}>
				{!signIn && (
					<>
						<label>Name</label>
						<input
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
						/>
					</>
				)}

				<label>Email</label>
				<input
					id="email"
					name="email"
					type="email"
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>

				<label>Password</label>
				<input
					id="password"
					name="password"
					type={passwordVisible ? "text" : "password"}
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<div className={classes.visible} onClick={handlePasswordVisibleClick}>
					Look
				</div>

				<input
					type="submit"
					value={signIn ? "Log in" : "Sign up"}
					className={classes.submit}
				/>
			</form>

			<div>
				<p>{signIn ? "Don't have an account?" : "Already have an account?"}</p>
				<Link href={signIn ? "/signUp" : "/logIn"}>
					{signIn ? "Create an account" : "Log in"}
				</Link>
			</div>
		</div>
	);
};

export default SignInUp;

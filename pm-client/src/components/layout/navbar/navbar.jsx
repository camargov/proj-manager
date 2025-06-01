"use client";
import Button from "@/components/buttons/button/button";
import UserIcon from "@/components/buttons/userIcon/userIcon";
import { DefaultUser } from "@/util/constants";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import classes from "./navbar.module.css";

const Navbar = () => {
	const user = DefaultUser; // TODO: get user from authentication function
	const guestUser = user.id === 1;
	const router = useRouter();

	const handleLogInClick = () => {
		router.push("/logIn");
	};

	const handleSignUpClick = () => {
		router.push("/signUp");
	};

	return (
		<div className={classes.container}>
			<Link href={guestUser ? "/" : "/dashboard"}>
				<Image
					src="logo.svg"
					alt="Project Manager logo"
					width={40}
					height={40}
				/>
			</Link>
			<div className={classes.rightContainer}>
				{guestUser ? (
					<UserIcon name={user.profile.name} />
				) : (
					<div>
						<Button caption="Log in" onClick={handleLogInClick} />
						<Button caption="Sign up" onClick={handleSignUpClick} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;

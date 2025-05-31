"use client";
import Button from "@/components/buttons/button";
import UserIcon from "@/components/buttons/userIcon";
import { DefaultUser } from "@/util/constants";
import Link from "next/link";
import { useRouter } from "next/navigation";

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
		<div>
			<div>
				<Link href={guestUser ? "/" : "/dashboard"}>Project Manager</Link>
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

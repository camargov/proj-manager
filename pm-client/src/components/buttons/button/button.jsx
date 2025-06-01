"use client";
import classes from "./button.module.css";

const Button = (props) => {
	const { caption, onClick } = props;

	return (
		<button onClick={onClick} className={classes.container}>
			{caption}
		</button>
	);
};

export default Button;

"use client";
import { useState } from "react";
import classes from "./dropdown.module.css";
import Image from "next/image";

const Dropdown = (props) => {
	const {
		defaultIndex = 0,
		options = ["Option 1"],
		onOptionClick,
		standard = true,
	} = props;

	const [selectedIndex, setSelectedIndex] = useState(defaultIndex);
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen((prev) => !prev);
	};

	const handleOptionClick = (index) => {
		setSelectedIndex(index);
		onOptionClick?.(index);
	};

	const arrowWidth = standard ? 24 : 30;
	return (
		<div>
			<div
				onClick={handleClick}
				className={`${classes.mainBox} ${
					standard ? classes.standard : classes.projectType
				} ${options.length > 1 ? classes.active : {}}`}
			>
				{options[selectedIndex]}
				{options.length > 1 && (
					<Image
						src="arrowDown.svg"
						alt="Down arrow"
						width={arrowWidth}
						height={arrowWidth}
					/>
				)}
			</div>
			{open && (
				<div>
					{options.length > 0 &&
						options.map((option, index) => {
							if (index !== selectedIndex) {
								return (
									<div
										key={`option-${index}`}
										onClick={() => handleOptionClick(index)}
										className={classes.option}
									>
										{option}
									</div>
								);
							}
						})}
				</div>
			)}
		</div>
	);
};

export default Dropdown;

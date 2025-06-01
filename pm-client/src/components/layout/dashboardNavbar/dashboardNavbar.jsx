"use client";
import Button from "@/components/buttons/button/button";
import UserIcon from "@/components/buttons/userIcon/userIcon";
import Dropdown from "@/components/dropdown/dropdown";
import Image from "next/image";
import classes from "./dashboardNavbar.module.css";
import { SMALL_ICON_WIDTH } from "@/util/constants";

const DashboardNavbar = (props) => {
	const { project, user } = props;

	const handlePageDropdown = () => {
		console.log("handlePageDropdown");
	};

	const handleViewDropdown = () => {
		console.log("handle view dropdown");
	};

	return (
		<div className={classes.container}>
			<div className={classes.topRow}>
				<Dropdown options={[project?.name]} standard={false} />
				<Button caption="Create Project" />
			</div>
			<div className={classes.bottomRow}>
				<Dropdown
					options={["Dashboard", "Documents"]}
					onOptionClick={handlePageDropdown}
				/>
				<div className={classes.bottomRight}>
					<Button caption="Add Task" />
					<Dropdown
						options={[
							<Image
								src="viewColumn.svg"
								alt="Column view"
								width={SMALL_ICON_WIDTH}
								height={SMALL_ICON_WIDTH}
							/>,
							<Image
								src="viewTable.svg"
								alt="Table view"
								width={SMALL_ICON_WIDTH}
								height={SMALL_ICON_WIDTH}
							/>,
						]}
						onOptionClick={handleViewDropdown}
					/>

					{project?.users && user && (
						<div>
							{project.users
								.filter((o) => o.id !== user.id)
								.map((o) => {
									return <UserIcon name={o.name} />;
								})}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default DashboardNavbar;

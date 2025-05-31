import Button from "@/components/buttons/button";
import UserIcon from "@/components/buttons/userIcon";
import Image from "next/image";

const DashboardNavbar = (props) => {
	const { project, user } = props;

	return (
		<div>
			<div>
				<div>
					<h2>{project?.name}</h2>
				</div>
				<Button caption="Create Project" />
			</div>
			<div>
				<Button caption="Dashboard" />
				<div>
					<Button caption="Add Task" />
					<Button
						caption={
							<div>
								<Image
									src="viewColumn.svg"
									alt="Column view"
									width={100}
									height={100}
								/>
								<Image
									src="arrowDown.svg"
									alt="Down arrow"
									width={50}
									height={50}
								/>
							</div>
						}
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

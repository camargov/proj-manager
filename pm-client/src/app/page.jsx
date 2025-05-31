import DashboardNavbar from "@/components/layout/dashboardNavbar/dashboardNavbar";
import styles from "./page.module.css";
import { DefaultProject, DefaultUser } from "@/util/constants";

export default function Home() {
	return (
		<div className={styles.page}>
			<DashboardNavbar
				project={{
					...DefaultProject,
					users: [DefaultUser],
					owners: [DefaultUser],
				}}
				user={DefaultUser}
			/>
		</div>
	);
}

import classes from "./userIcon.module.css";

const UserIcon = (props) => {
	const { name } = props;
	return <div className={classes.container}>{name.substring(0, 1)}</div>;
};

export default UserIcon;

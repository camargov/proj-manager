const UserIcon = (props) => {
	const { name } = props;
	return <div>{name.substring(0, 1)}</div>;
};

export default UserIcon;

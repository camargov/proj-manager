const Button = (props) => {
	const { caption, onClick } = props;

	return <button onClick={onClick}>{caption}</button>;
};

export default Button;

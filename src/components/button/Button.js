/* eslint-disable import/no-anonymous-default-export */
import "./button.css";
function Button(props) {
	return (
		<button onClick={props.onClick} className={props.variant}>
			{props.text}
		</button>
	);
}

export default Button;

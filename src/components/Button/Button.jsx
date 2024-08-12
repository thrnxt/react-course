import './Button.css';
export default function Button({text, onClick}) {
	return(
		<button onClick={onClick} className="button accent">{text}</button>
	);
}

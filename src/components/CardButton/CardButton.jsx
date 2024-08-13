import './CardButton.css';
export default function CardButton({children, className}) {
	const cl = 'card-button' + (className? ' ' + className : '');
	const block = <button className='card-button block'/>
	return(
		<button className={cl}>
			{children? children : block }
		</button>
	);
}



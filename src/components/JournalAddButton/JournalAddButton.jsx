import './JournalItem.css';
export default function JournalItem({text,title,date}) {
	const formatedDate = new Intl.DateTimeFormat('ru-Ru').format(date);
	return(
		<>
			<h2 className='journal-item__header'>{title}</h2>
			<h2 className='journal-item__body'>
				<div className='journal-item__date'>{formatedDate}</div>
				<div className='journal-item__text'>{text}</div>
			</h2>
		</>
	);
}


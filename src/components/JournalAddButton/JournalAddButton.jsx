import './JournalAddButton.css';
import CardButton from './../CardButton/CardButton';
export default function JournalAddButton() {
	return(
		<CardButton className='journal-add'>
			<img style={{width:'14px'}} src="/plus.svg" alt="" />
			Новое воспоминание
		</CardButton>
	);
}


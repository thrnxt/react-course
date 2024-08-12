import './JournalForm.css';
import Button from '../Button/Button';
import { useState } from 'react';
export default function JournalForm() {
	const [inputData, setInputData] = useState('');
	const [state, setState] = useState({
		age:31
	});

	const inputChange = (event)=>{
		setInputData(event.target.value);
	};

	function addJournalItem(event){
		event.preventDefault();
		state.age= 40;
		setState({...state});
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);

		console.log(formProps);
	}
	return(
		<form className='journal-from' action="" onSubmit={addJournalItem}>
			{state.age}
			<input type='text' name='title' />

			<input type='date' name='date'/>
			<input type='text' name='tag' value={inputData} onChange={inputChange}/>
			<textarea name="post" id="" cols={36} rows={10}></textarea>
			<Button onClick={()=> {console.log('asd')}} text='сохранить'/>
		</form>
	);
}

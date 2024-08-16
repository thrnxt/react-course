import './JournalForm.css';
import Button from '../Button/Button';
import { useState } from 'react';


export default function JournalForm({onSubmit}) {
	const [formValidState, setFormValidState] = useState({
		title: true,
		post:true,
		date: true
	});

	function addJournalItem(event){
		event.preventDefault();
		const formData = new FormData(event.target);
		const formProps = Object.fromEntries(formData);
		
		let isValid = true;
		if(!formProps.title?.trim().length){
			setFormValidState((prevState)=>({...prevState,title:false}))
			isValid = false
		}else{
			setFormValidState((prevState)=>({...prevState,title:true}))
		}
		if(!formProps.text?.trim().length){
			setFormValidState((prevState)=>({...prevState,post:false}))
			isValid = false
		}else{
			setFormValidState((prevState)=>({...prevState,post:true}))
		}
		if(!formProps.date?.trim().length){
			setFormValidState((prevState)=>({...prevState,date:false}))
			isValid = false
		}else{
			setFormValidState((prevState)=>({...prevState,date:true}))
		}
		if(!isValid){
			return
		}
		onSubmit(formProps)
	}
	return(
		<form className='journal-from' action="" onSubmit={addJournalItem}>
			<div>
				<input type='text' name='title'  className={`input ${formValidState.title? 'input-title' : 'invalid'}`} />
			</div>

			<div className='form-row'>
				<label htmlFor="date" className='form-label'>
					<img src="" alt="икон" />
					<span>Дата</span>
				</label>
				<input type='date' id='date' name='date' className={`input ${formValidState.date? '' : 'invalid'}`} />
			</div>
			<div className='form-row'>
				<label htmlFor="tag" className='form-label'>
					<img src="" alt="икон" />
					<span>Метки</span>
				</label>
				<input className='input' type='text' id='tag' name='tag' />
			</div>
			<textarea name="text" id=""  className={`input ${formValidState.post? '' : 'invalid'}`} cols={36} rows={10}></textarea>
			<Button onClick={()=> {console.log('asd')}} text='сохранить'/>
		</form>
	);
}

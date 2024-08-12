import { useState } from 'react';
import './App.css';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournalForm from './components/JournalForm/JournalForm';

function App() {

	const data = [
		{
			title:'подготовка к обновлению курсов',
			text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, hic!',
			date: new Date()
		},
		{
			title:'second',
			text: 'second text!',
			date: new Date()
		}
	];

	

	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
					<CardButton>	
						<JournalItem 
							title={data[0].title}
							text={data[0].text}
							date={data[0].date}
							// data={data[0]}
						/>
					</CardButton>
					<CardButton>
						<JournalItem 
							title={data[1].title}
							text={data[1].text}
							date={data[1].date}
						/>
					</CardButton>
				</JournalList>
			</LeftPanel>

			<Body>
				<JournalForm/>
			</Body>
			
		</div>
	);
}

export default App;

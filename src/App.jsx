import './App.css';
import CardButton from './components/CardButton/CardButton';
import Header from './components/Header/Header';
import JournalAddButton from './components/JournalAddButton/JournalAddButton';
import JournalItem from './components/JournalItem/JournalItem';
import JournalList from './components/JournalList/JournalList';
import Body from './layouts/Body/Body';
import LeftPanel from './layouts/LeftPanel/LeftPanel';
import JournalForm from './components/JournalForm/JournalForm';
import { useState } from 'react';

const INITIAL_DATA = [
	{
		id: 1,
		title:'подготовка к обновлению курсов',
		text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae, hic!',
		date: new Date()
	},
	{
		id: 2,
		title:'second',
		text: 'second text!',
		date: new Date()
	},
	{
		id: 3,
		title:'second',
		text: 'second text!',
		date: new Date()
	}
];

function App() {
	const [items, setItems] = useState(INITIAL_DATA);
	const addItem = (item)=>{
		setItems((prev)=>[...prev,{
			text: item.text,
			title: item.title,
			date: new Date(item.date),
			id: prev.length > 0 ? Math.max(...prev.map((i)=>{return i.id})) + 1 : 1
		}])
	}
	const sortItems = (a,b) => {
		return b.date - a.date
	}
	return (
		<div className='app'>
			<LeftPanel>
				<Header/>
				<JournalAddButton/>
				<JournalList>
					{items.sort(sortItems).map((element)=>{
						return(
							<CardButton key={element.id}> 
								<JournalItem 
									title={element.title}
									text={element.text}
									date={element.date}
								/>
							</CardButton>
						)
					})}
				</JournalList>
			</LeftPanel>

			<Body>
				<JournalForm onSubmit={addItem}/>
			</Body>
			
		</div>
	);
}

export default App;

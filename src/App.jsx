import './App.css';
import Button from './components/Button/Button';
import CardButton from './components/CardButton/CardButton';
import JournalItem from './components/JournalItem/JournalItem';

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
		<>
			<h1>Зоголовок</h1>
			<p>какой-то текст</p>
			<Button/>
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
		</>
	);
}

export default App;

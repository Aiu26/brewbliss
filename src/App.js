import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

const App = () => {
	const [searchField, setSearchField] = useState('');
	const [monsters, setMonsters] = useState([]);
	const [filteredMonsters, setfilteredMonsters] = useState(monsters);

	useEffect(() => {
		fetch('https://api.sampleapis.com/coffee/hot')
			.then((response) => response.json())
			.then((users) => setMonsters(users));
	}, []);

	useEffect(() => {
		const newFilteredMonsters = monsters.filter((monster) => {
			return monster.title.toLowerCase().includes(searchField);
		});

		setfilteredMonsters(newFilteredMonsters);
	}, [monsters, searchField]);

	const onSearchChange = (event) => {
		const searchFieldString = event.target.value.toLowerCase();
		setSearchField(searchFieldString);
	};

	return (
		<div className='App'>
			<h1 className='app-title'>Brew Bliss</h1>
			<SearchBox
				onChangeHandler={onSearchChange}
				placeholder='search drinks'
				className='monsters-search-box'
			/>
			<CardList monsters={filteredMonsters} />
		</div>
	);
};

export default App;

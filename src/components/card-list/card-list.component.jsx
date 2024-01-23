import './card-list.styles.css';

const CardList = ({ monsters }) => {
	return (
		<div className='card-list'>
			{monsters.map((monster) => (
				<div className='card-container' key={monster.id}>
					<img
						alt={`monster${monster.title}`}
						src={monster.image}
						className='card-image'
					></img>
					<h2>{monster.title}</h2>
					<p>{monster.description}</p>
				</div>
			))}
		</div>
	);
};

export default CardList;

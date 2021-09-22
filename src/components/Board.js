import { useEffect, useState } from 'react';

// importing styles
import '../styles/Board.css';

// importing components
import Card from './Card';
import initializeState from './initializeState';

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function Board(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards(initializeState());
  }, []);

  function shuffleCards() {
    setCards(shuffleArray(Array.from(cards)));
  }

  return (
    <div id="board">
      {cards.map((card) => (
        <Card info={card} key={card.id} shuffleCards={shuffleCards} />
      ))}
    </div>
  );
}

export default Board;

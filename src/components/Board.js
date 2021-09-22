import { useEffect, useState } from 'react';

// importing styles
import '../styles/Board.css';

// importing components
import Card from './Card';
import initializeState from './initializeState';
import ScoreCard from './ScoreCard';

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function Board(props) {
  const [cards, setCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);

  useEffect(() => {
    setCards(initializeState());
  }, []);

  function shuffleCards() {
    setCards(shuffleArray(Array.from(cards)));
  }

  function handleClick() {
    shuffleCards();
  }

  return (
    <div>
      <ScoreCard bestScore={bestScore} currentScore={currentScore} />
      <div id="board">
        {cards.map((card) => (
          <Card info={card} key={card.id} handleClick={handleClick} />
        ))}
      </div>
    </div>
  );
}

export default Board;

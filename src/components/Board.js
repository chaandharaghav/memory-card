import { useEffect, useState } from 'react';
import uniqid from 'uniqid';
import Card from './Card';

function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

function Board(props) {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    setCards([
      {
        id: uniqid(),
        title: 'Bilu',
      },
      {
        id: uniqid(),
        title: 'Hemi',
      },
      {
        id: uniqid(),
        title: 'Roju',
      },
      {
        id: uniqid(),
        title: 'Rimla',
      },
    ]);
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

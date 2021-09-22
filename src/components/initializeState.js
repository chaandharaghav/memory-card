import uniqid from 'uniqid';

// importing images
import curseMark from '../img/cards/curse-mark.png';
import hyugaMark from '../img/cards/hyuga-mark.png';
import konohaSymbol from '../img/cards/konohagakure-symbol.png';
import loveKanji from '../img/cards/love-kanji.png';
import myobokozanSymbol from '../img/cards/myobokozan.png';
import nineTailsSeal from '../img/cards/nine-tails-seal.png';
import uchihaCrest from '../img/cards/uchiha-crest.png';
import uzumakiCrest from '../img/cards/uzumaki-crest.png';

function initializeState() {
  return [
    {
      id: uniqid(),
      name: 'Orochimaru curse mark',
      imageSrc: curseMark,
    },

    {
      id: uniqid(),
      name: 'Hyuga curse mark',
      imageSrc: hyugaMark,
    },
    {
      id: uniqid(),
      name: 'Konoha symbol',
      imageSrc: konohaSymbol,
    },
    {
      id: uniqid(),
      name: 'Love (kanji)',
      imageSrc: loveKanji,
    },
    {
      id: uniqid(),
      name: 'Myobokuzan symbol',
      imageSrc: myobokozanSymbol,
    },
    {
      id: uniqid(),
      name: 'Nine tails seal',
      imageSrc: nineTailsSeal,
    },
    {
      id: uniqid(),
      name: 'Uchiha crest',
      imageSrc: uchihaCrest,
    },
    {
      id: uniqid(),
      name: 'Uzumaki crest',
      imageSrc: uzumakiCrest,
    },
  ];
}

export default initializeState;

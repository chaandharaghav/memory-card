import uniqid from 'uniqid';

// importing images
import curseMark from '../img/cards/curse-mark.png';
import hyugaMark from '../img/cards/hyuga-mark.png';
import konohagakureSymbol from '../img/cards/konohagakure-symbol.png';
import iwagakureSymbol from '../img/cards/iwagakure-symbol.png';
import kirigakureSymbol from '../img/cards/kirigakure-symbol.png';
import komogakureSymbol from '../img/cards/komogakure-symbol.png';
import sunagakureSymbol from '../img/cards/sunagakure-symbol.png';
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
      imgURL: curseMark,
    },

    {
      id: uniqid(),
      name: 'Hyuga curse mark',
      imgURL: hyugaMark,
    },
    {
      id: uniqid(),
      name: 'Konoha symbol',
      imgURL: konohagakureSymbol,
    },
    {
      id: uniqid(),
      name: 'Iwagakure symbol',
      imgURL: iwagakureSymbol,
    },
    {
      id: uniqid(),
      name: 'Sunagakure symbol',
      imgURL: sunagakureSymbol,
    },
    {
      id: uniqid(),
      name: 'Kirigakure symbol',
      imgURL: kirigakureSymbol,
    },
    {
      id: uniqid(),
      name: 'Komogakure symbol',
      imgURL: komogakureSymbol,
    },
    {
      id: uniqid(),
      name: 'Love (kanji)',
      imgURL: loveKanji,
    },
    {
      id: uniqid(),
      name: 'Myobokuzan symbol',
      imgURL: myobokozanSymbol,
    },
    {
      id: uniqid(),
      name: 'Nine tails seal',
      imgURL: nineTailsSeal,
    },
    {
      id: uniqid(),
      name: 'Uchiha crest',
      imgURL: uchihaCrest,
    },
    {
      id: uniqid(),
      name: 'Uzumaki crest',
      imgURL: uzumakiCrest,
    },
  ];
}

export default initializeState;

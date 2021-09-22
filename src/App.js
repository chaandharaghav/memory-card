// importing images
import narutoTitleImg from './img/Naruto title.png';
import sharingan from './img/Sharingan.png';

// importing styles
import './App.css';

// importing components
import Header from './components/HeaderImageOnly';
import HeaderDivision from './components/HeaderDivision';
import Board from './components/Board';

function App() {
  return (
    <div>
      <header>
        <div className="App">
          <Header
            imgURL={narutoTitleImg}
            alternateName="Heading, Naruto Memory"
          />
          <HeaderDivision
            imgURL={sharingan}
            alternateName="Header division image"
          />
        </div>
      </header>
      <Board />
    </div>
  );
}

export default App;

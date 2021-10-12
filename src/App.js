import './App.css';
import cardData from "./assets/recipeData.json"
import CardList from './components/cardList';

function App() {
  return (
    <div className="App">
      <CardList cardData={cardData}></CardList>
    </div>

  );
}

export default App;

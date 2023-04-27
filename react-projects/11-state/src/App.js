import './App.css';
import RandomNumber from './components/RandomNumber';
import generateRandomNum from './utils/generateRandomNum'    

function App() {
  return (
    <div className="App">
      <RandomNumber maxNum={1000}/>
    </div>
  );
}

export default App;

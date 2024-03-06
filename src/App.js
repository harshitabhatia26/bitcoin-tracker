import './App.css';
import NavBar from './Compositions/navbar';
import SimpleContainer from './Compositions/container';
import Suggestion from './Compositions/suggestion';

function App() {
  return (
    <div className="App flex flex-col">
      <NavBar />
      <SimpleContainer/>
      <Suggestion />
    </div>
  );
}

export default App;

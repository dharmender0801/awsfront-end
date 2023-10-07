import './App.css';
import Home from './components/Home';
import LoginSignup from './components/LoginSignup';
import Question from './components/Question';

function App() {
  return (
    <div className="App">
      <LoginSignup />
      <Question />
      <Home />
      <h1>Aws</h1>
    </div>
  );
}

export default App;

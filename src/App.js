import './App.css';
import WarningButton from './components/WarningButton/WarningButton';
import A from './components/A/A'

function App() {
  return (
    <div className="App">
      <A></A>
      <WarningButton />
      <h2> Answer to the fourth question is that an empty div element will be displayed as the check variable is set to 0 and thus the condition inside the return statement is false. Therefore, nothing will be rendered inside the div element.</h2>
    </div>
  );
}

export default App;

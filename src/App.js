import logo from './logo.svg';
import './App.css';
const tasks = ["Learn React","Climb Mt.Everest","Run a Maraton","Feed the dog"];
function App() {
  return (
    <div className="App">
      <h1>Hello Dojo!</h1>
      <ul>
        {
          tasks.map(task=>{
            return <li>{task}</li>
          })
        }
      </ul>
    </div>
  );
}

export default App;

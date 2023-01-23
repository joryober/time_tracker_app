import "./App.css";
import Task from "./components/Task";

function App() {
  return (
    <div className="App">
      <h1>Time Tracker App</h1>

      <Task className="task" name="Piano" />
      <Task name="Coding" />
      <Task name="French" />
    </div>
  );
}

export default App;

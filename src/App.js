import "./App.css";
import AddTask from "./components/AddTask";
import ListTasks from "./components/ListTasks";

function App() {
  return (
    <div className="App">
      <AddTask className='addtask'/>
      <ListTasks className='listtask'/>
    </div>
  );
}

export default App;

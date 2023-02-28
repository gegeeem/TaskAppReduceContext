import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { AddTask } from "./components/AddTask";

function App() {
  const [count, setCount] = useState<string>("priv");

  return (
    <div className="App">
      <AddTask onAddTask={(e) => setCount(e)} />
      {count}
    </div>
  );
}

export default App;

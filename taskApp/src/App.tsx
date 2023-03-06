import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { AddTask } from "./components/AddTask";
import { TaskItem } from "./components/TaskItem";
import { ContextTaskAppProvider } from "./components/Context";
import { ListOfTaskItems } from "./components/ListOfTaskItems";

function App() {
  const [count, setCount] = useState<string>("firts");

  return (
    <ContextTaskAppProvider>
      <div className="App">
        <AddTask />
        <ListOfTaskItems />
      </div>
    </ContextTaskAppProvider>
  );
}

export default App;

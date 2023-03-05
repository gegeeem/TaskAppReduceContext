import { createContext, useState } from "react";
import { ListOfTaskItems } from "./ListOfTaskItems";

const firstList: ListOfTask[] = [
  { id: "1", isDone: true, taskName: "be beeep" },
  { id: "2", isDone: false, taskName: "ta daa!" },
];

interface ListOfTask {
  id: string;
  isDone: boolean;
  taskName: string;
}
interface ContextTaskAppProps {
  arrayLists?: ListOfTask[];
  isCheckin?: (id: string) => void;
}
const initalContextApp: ContextTaskAppProps = {
  arrayLists: firstList,
};

const ContextTaskApp = createContext<ContextTaskAppProps | undefined>(
  initalContextApp
);

const ContextTaskAppProvider = ({ children }: any) => {
  const [listOfTask, setListOfTask] = useState<Array<ListOfTask> | undefined>(
    firstList
  );
  const setChecking = (id: string) => {
    const newState = listOfTask?.map((el) => {
      if (el.id === id) {
        el.isDone = !el.isDone;
        return el;
      } else return el;
    });
    setListOfTask(listOfTask);
  };
  const hajde: ContextTaskAppProps = {
    arrayLists: listOfTask,
    isCheckin: setChecking,
  };
  return (
    <ContextTaskApp.Provider value={hajde}>{children}</ContextTaskApp.Provider>
  );
};
export { ContextTaskApp, ContextTaskAppProvider };

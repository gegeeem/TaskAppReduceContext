import { createContext, useState } from "react";
import { ListOfTaskItems } from "./ListOfTaskItems";
import { TaskItemProps } from "./TaskItem";

const firstList: TaskItemProps[] = [
  { id: "1", isChecked: true, taskName: "be beeep" },
  { id: "2", isChecked: false, taskName: "ta daa!" },
];

interface ContextTaskAppProps {
  arrayLists: TaskItemProps[];
  isCheckin?: (id: string) => void;
  newTask?: (task: TaskItemProps) => void;
  editTask?: (id: string, newName: string) => void;
}
const initalContextApp: ContextTaskAppProps = {
  arrayLists: firstList,
};

const ContextTaskApp = createContext<ContextTaskAppProps>(initalContextApp);

const ContextTaskAppProvider = ({ children }: any) => {
  const [listOfTask, setListOfTask] = useState<Array<TaskItemProps>>(firstList);

  const setChecking = (id: string) => {
    const newState = listOfTask?.map((el) => {
      if (el.id === id) {
        el.isChecked = !el.isChecked;
        return el;
      } else return el;
    });
    setListOfTask(newState);
  };

  const addNewTask = (task: TaskItemProps) => {
    setListOfTask((prev) => [...prev, task]);
  };

  const editTaskName = (id: string, newTaskName: string) => {
    const newTaskState = listOfTask?.map((el) => {
      if (el.id === id) {
        el.taskName = newTaskName;
        return el;
      } else return el;
    });
    setListOfTask(newTaskState);
  };

  const valueCntx: ContextTaskAppProps = {
    arrayLists: listOfTask,
    isCheckin: setChecking,
    newTask: addNewTask,
    editTask: editTaskName,
  };
  return (
    <ContextTaskApp.Provider value={valueCntx}>
      {children}
    </ContextTaskApp.Provider>
  );
};
export { ContextTaskApp, ContextTaskAppProvider };

import { TaskItemProps } from "../components/TaskItem";
interface taskReducerProps {
  listOfTasks: TaskItemProps[];
}
type State = {
  id: string;
  taskName: string;
  isDone: boolean;
};

type Action = "createTask" | "editTask" | "deleteTask";

export const taskReducer = (state: taskReducerProps, action: Action) => {
  switch (action) {
    case "createTask":
      break;

    default:
      break;
  }
};

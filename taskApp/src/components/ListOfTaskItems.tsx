import React, { useContext } from "react";
import { ContextTaskApp } from "./Context";
import { TaskItem, TaskItemProps } from "./TaskItem";

export const ListOfTaskItems = () => {
  const hajde = useContext(ContextTaskApp);
  console.log();
  return (
    <ul>
      {hajde?.arrayLists?.map((el) => (
        <li id={el.id + 10}>
          <TaskItem id={el.id} isChecked={el.isDone} text={el.taskName} />
        </li>
      ))}
    </ul>
  );
};

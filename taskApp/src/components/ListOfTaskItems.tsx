import React, { useContext } from "react";
import { ContextTaskApp } from "./Context";
import { TaskItem, TaskItemProps } from "./TaskItem";

export const ListOfTaskItems = () => {
  const hajde = useContext(ContextTaskApp);
  console.log();
  return (
    <ul>
      {hajde?.arrayLists?.map((el) => (
        <TaskItem id={el.id} isChecked={el.isChecked} taskName={el.taskName} />
      ))}
    </ul>
  );
};

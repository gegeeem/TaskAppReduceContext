import { useContext, useRef, useState } from "react";
import { ContextTaskApp } from "./Context";

type buttonValue = "edit" | "save";

export interface TaskItemProps {
  id: string;
  isChecked: boolean;
  taskName: string;
}

export const TaskItem = (props: TaskItemProps) => {
  const chekingItemContext = useContext(ContextTaskApp);
  const [text, setText] = useState<string>(props.taskName);
  const [isChecking, setIsChecking] = useState<boolean>(props.isChecked);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  // const [buttonType, setButtonType] = useState<buttonValue>("edit");
  const [focusOnInpute, setFocusOnInput] = useState<boolean>(false);
  const ref = useRef<HTMLInputElement>(null);

  const editText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const hanldeCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecking((prev) => !prev);
    if (chekingItemContext?.isCheckin) {
      chekingItemContext.isCheckin(props.id);
    }
  };
  const buttonAction = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // if (buttonType == "edit") {
    //   setButtonType("save");
    //   setFocusOnInput(true);
    //   document.getElementById("editing")?.focus();
    // }
    // if (buttonType == "save") {
    //   setButtonType("edit");
    //   setFocusOnInput(false);

    // }
    e.preventDefault();
    setIsEditing((prev) => !prev);
    if (isEditing) {
      ref.current?.focus();
    } else {
      setFocusOnInput(false);
    }
    if (chekingItemContext.editTask)
      chekingItemContext.editTask(props.id, text);
  };
  const handleDelete = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    if (chekingItemContext.deleteTask) chekingItemContext.deleteTask(props.id);
  };
  return (
    <li>
      <input type={"checkbox"} checked={isChecking} onChange={hanldeCheck} />

      {isEditing ? (
        <>
          <input
            id={props.id}
            type={"text"}
            value={text}
            ref={ref}
            onChange={editText}
            disabled={false}
          />
          <button onClick={buttonAction}>Save</button>
        </>
      ) : (
        <>
          <input
            id={props.id}
            type={"text"}
            value={text}
            onChange={editText}
            disabled={true}
          />
          <button onClick={buttonAction}>Edit</button>
        </>
      )}

      <button onClick={handleDelete}>Delete</button>
    </li>
  );
};

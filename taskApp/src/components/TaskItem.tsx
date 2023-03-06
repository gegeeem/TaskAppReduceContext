import { useContext, useState } from "react";
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
  const [buttonType, setButtonType] = useState<buttonValue>("edit");
  const [focusOnInpute, setFocusOnInput] = useState<boolean>(false);

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
    if (chekingItemContext.editTask)
      chekingItemContext.editTask(props.id, text);
  };

  console.log("chekingItemContext", chekingItemContext);
  return (
    <li>
      <input type={"checkbox"} checked={isChecking} onChange={hanldeCheck} />
      <input id="editing" type={"text"} value={text} onChange={editText} />
      <button value={buttonType} onClick={buttonAction}>
        {buttonType}
      </button>
      <button>Delete</button>
    </li>
  );
};

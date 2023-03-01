import { useState } from "react";

type edit = "edit";
type save = "save";
interface TaskItemProps {
  isChecked: boolean;
  text: string;
  buttonValue: edit | save;
}
export const TaskItem = (props: TaskItemProps) => {
  const [text, setText] = useState<string>("");
  return (
    <>
      <input type={"checkbox"} checked={props.isChecked} />
      <input type={"text"} value={props.text} />{" "}
      <button value={props.buttonValue} />
      <button value={"delete"} />
    </>
  );
};

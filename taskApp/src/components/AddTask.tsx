import { useState } from "react";
type AddTaskProps = {
  onAddTask: (e: string) => void;
};
export const AddTask = ({ onAddTask }: AddTaskProps) => {
  const [addText, setText] = useState<string>("");

  const handleTextInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setText(event.target.value);
  };
  const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onAddTask(addText);
  };
  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    event.preventDefault();
    setText("kamon kamonlets go lets go");
  };
  console.log("addtext=>", addText);
  return (
    <>
      <input type={"text"} value={addText} onChange={handleTextInput} />
      <button onClick={handleAdd}>Add</button>
      <input type={"checkbox"} onBlur={handleBlur} />
    </>
  );
};

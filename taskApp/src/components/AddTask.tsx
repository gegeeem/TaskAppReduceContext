import { useState } from "react";
type AddTaskProps = {
  onAddTask: (e: string) => void;
};
export const AddTask = ({ onAddTask }: AddTaskProps) => {
  const [addText, setAddText] = useState<string>("");

  const handleTextInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setAddText(event.target.value);
  };
  const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    onAddTask(addText);
  };
  // const handleBlur = (event: React.SyntheticEvent<HTMLInputElement>) => {
  //   setText("kamon kamonlets go lets go");
  // };
  const checkFocus = (event: React.MouseEvent<HTMLInputElement>) => {};
  console.log("addtext=>", addText);
  return (
    <>
      <input type={"text"} value={addText} onChange={handleTextInput} />
      <button onClick={handleAdd}>Add</button>
      {/* <input
        type={"checkbox"}
        id="ja"
        // onClick={(e) => document.getElementById("ja")?.focus()}
        onClick={(e) => e}
        onBlur={handleBlur}
        autoFocus={false}
      /> */}
    </>
  );
};

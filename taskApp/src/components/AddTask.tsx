import { useContext, useState } from "react";
import { ContextTaskApp } from "./Context";
import { v4 } from "uuid";

export const AddTask = () => {
  const contextAppTask = useContext(ContextTaskApp);

  const [addText, setAddText] = useState<string>("");

  const handleTextInput = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setAddText(event.target.value);
  };
  const handleAdd = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (contextAppTask.newTask)
      contextAppTask.newTask({
        id: v4(),
        isChecked: false,
        taskName: addText,
      });
  };
  // const handleBlur = (event: React.SyntheticEvent<HTMLInputElement>) => {
  //   setText("kamon kamonlets go lets go");
  // };
  const checkFocus = (event: React.MouseEvent<HTMLInputElement>) => {};
  const handleEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      if (contextAppTask.newTask)
        contextAppTask.newTask({
          id: v4(),
          isChecked: false,
          taskName: addText,
        });
      e.currentTarget.select();
    }
  };
  console.log("addtext=>", addText);
  return (
    <>
      <input
        type={"text"}
        value={addText}
        enterKeyHint="done"
        onChange={handleTextInput}
        onFocus={(e) => e.target.select()}
        onKeyDown={handleEnter}
      />
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

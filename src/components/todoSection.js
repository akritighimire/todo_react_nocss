import { useRef, useState } from "react";
const TodoSection = () => {
  // let initialValue = ["Buy Shampoo", "Get Medicines", "Clean Room"];

  const [todos, setTodos] = useState([]);

  const todoText = useRef();
  const addData = () => {
    // console.log(todoText.current.value)
    setTodos([todoText.current.value, ...todos]);
  };

  return (
    <>
      {todos.length > 4 && <div className="warning">Too Many Data</div>}
      <div className="adder">
        <input type="text" ref={todoText} />
        <button onClick={addData}>+Add Todo</button>
      </div>

      <div className="todos">
        <b>Todos</b>
      </div>

      {todos.map((element) => {
        return (
          <>
            <div className="singleItem">
              <li>{element}</li>
            </div>
          </>
        );
      })}
      <button onClick={addData}>Add Value</button>

      {todos.length === 0 && (
        <>
          <div className="nodata">No Data</div>
        </>
      )}
    </>
  );
};

export default TodoSection;

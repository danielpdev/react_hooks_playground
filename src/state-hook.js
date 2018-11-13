import React, { useState } from "react";
export default () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([{ text: "first" }]);
  const [todo, setTodo] = useState({ text: "value" });
  return (
    <div>
      <p> you clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Add to count</button>

      {todos &&
        todos.map(todo => {
          return <p>{todo.text}</p>;
        })}
      <input
        placeholder={todo.text}
        onChange={({ target }) => setTodo({ text: target.value })}
      />
      <button onClick={() => setTodos([todo, ...todos])}>Add todo</button>
    </div>
  );
};

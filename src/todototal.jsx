import React, { useState } from "react";
import styled from "styled-components";
// import React, { useState } from "react";

const Todolist = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  console.log(text);
  const addTodo = (e) => {
    e.preventDefaulte();
    const value = text.trim();
    if (!value) return;

    const newTodo = {
      id: Date.now(),
      text: value,
      done: false,
    };
    setTodo((prev) => [newTodo, ...prev]);
    setTodo("");
  };
//   console.log(todo);
  return (
    <Container>
      <TodoWrapper>
        <h1>Todo {todo.length} List</h1>
        <Form onSubmit={addTodo}>
          <input
            type="text"
            placeholder="Todo lsit"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <Button type="submit">Add</Button>
        </Form>
        <span>Total:</span>
        {/* <ul>
          <div style={{ display: "flex" }}>
            <input type="checkbox" />
            <li>Runnuing</li>
            <button>delete</button>
          </div>
        </ul> */}
        <ul>
          {todo.map((value, index) => {
            return (
                <div style={{ display: "flex" }} key={value.id}>
              <li key={value.id}>
                {index} {value.text}{" "}
              </li>
              <button>delete</button>
              </div>
            );
          })}
        </ul>
      </TodoWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const TodoWrapper = styled.div`
  display: flex;
  flex-direction: column;

  text-align: center;

  border: 1px solid lightgray;
  border-radius: 8px;
  width: 500px;
  padding: 20px;
`;

const Form = styled.form`
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 7px 20px;
  margin-left: 10px;
`;

const Input = styled.input`
  width: 250px;
  padding-left: 10px;
`;

export default Todolist;

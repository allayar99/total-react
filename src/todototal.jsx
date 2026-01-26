import React, { useState } from "react";
import styled from "styled-components";
// import React, { useState } from "react";

const Todolist = () => {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  console.log(text);
  const addTodo = (e) => {
    e.preventDefault();
    const value = text.trim();
    if (!value) return;

    const newTodo = {
      id: Date.now(),
      text: value,
      done: false,
    };
    setTodo((prev) => [newTodo, ...prev]);
    setText("");
  };

  const daleteTodo = (id)=>{
   setTodo((prev)=> prev.filter((d)=> d.id !== id));
  }

  const toggleTodo = (id) => {
    setTodo((prev) =>
     prev.map((data)=> data.id !== id ? {...data, done: !data.done} : data,)
  )
  }
  
  const clearAll = () => {
    setTodo([])
  }

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
          <Button onClick={clearAll}>Clear All</Button>
        </Form>
        <span>Total:{todo.length} </span>
        <span>Done: {todo.filter((data)=> data.done).length} </span>
        
        <ul>
          {todo.map((value, index) => {
            return (
                <div style={{ display: "flex" }} key={value.id}>
              <li>
                <input type="checkbox" 
                // checked={value.id} 
                onChange={()=> toggleTodo(value.id)}/>
                <span style={{
                  flex: 1,
                  textDecoration: value.done ? "line-through" : "none"}}>
                {index} {value.text}{" "}
                </span>
              </li>
              <button onClick={() => daleteTodo(value.id)}>delete</button>
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

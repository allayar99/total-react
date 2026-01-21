import React from "react"
import styled from "styled-components"

const Todolist = () => {
    // const [todo, setTodo] = useState([]);
    // const [text, setText] = useTate("");
    // console.log(text);
    const addTodo = () => {

    }
    return (
        <Container>
            <TodoWrapper>
            <h1>Todo List</h1>
            <Form>
                <input type="text" placeholder="Todo lsit" />
                <Button>Add</Button>
            </Form>
            <ul>
                <li>Runnuing</li>
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
text-align: center;

border: 1px solid lightgray;
border-radius: 8px;
width: 500px;
`;

const Form = styled.form`
display: flex;
justify-content: center;

`;

const Button = styled.button`
padding: 7px 20px;
margin-left: 10px;

`

const Input = styled.input`
width: 250px;
padding-left: 10px;
`



export default Todolist;
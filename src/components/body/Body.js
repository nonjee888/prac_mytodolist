import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Body = () => {

    const todos = useSelector((state) => state.todos.todos)
    console.log(todos)

    return (
        <StContainer>
        {todos.map((todo) => (                      //매개변수의 이름은 아무거나해두 상과니없어
            <StTodobox key={todo.id}>{todo.title}</StTodobox>
        ))}
        </StContainer>
    );
}

export default Body;

const StTodobox = styled.div`
    border: #eee 1px solid;
    border-radius: 10px;
    height: 100px;
    width: 260px;
    display: flex;
    align-items: center;
    padding-left: 30px;
`
const StContainer = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
`
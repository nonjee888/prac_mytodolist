import React, { useState } from "react";
import { useSelector , useDispatch } from "react-redux";
import { addTodos } from "../../redux/modules/todos";
import styled from "styled-components";

let id=3;
const Header = () => {

    const [title, setTitle] = useState("")

    console.log(setTitle)
    const todos = useSelector((state) => state.todos.todos)
    console.log(todos)
    const dispatch = useDispatch();

    const onChangeHandler = (event) => {
        setTitle(event.target.value);
    }

    const onSubmitHandler = (event) => {
        event.preventDefault();
        dispatch(addTodos({title, id:id++}))
        setTitle("")
            
    }

    return (
        <StHeader>
        <StForm onSubmit={onSubmitHandler}>
        <div>Todos의 제목을 입력하세요.</div>
        <StInput 
        type="text"
        name="title"
        value={title}
        onChange={onChangeHandler}
        required/>
        <StButton 
        >추가하기</StButton></StForm>
        </StHeader>
    )
}

export default Header;

const StHeader = styled.div`
padding : 30px;
gap : 24px;
display: flex;
`
const StForm = styled.form`
display: block;
margin-top: 0em;
align-items: center;       //한줄로 정렬해줌
display: flex;
`
const StInput = styled.input`
    border: 1px solid #eee;
    margin: 0 24px;
    height: 25px;
    width: 300px;
    border-radius: 12px;
    outline: none;
    padding: 0 10px;
`
const StButton = styled.button`
    height: 30px;
    width: 150px;
    border-radius: 15px;
    border:none;
`

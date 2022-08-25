//초기 상태값
const initialState = {
todos:[{
    id:"1",
    title:"todolist입니다."
},
{
    id:"2",
    title:"todolist 연습 입니다."
}] 
}

//액션밸류
const ADD_TODOS = "ADD_TODOS";

//액션크리에이터
export const addTodos = (payload) => {
    return {
        type : ADD_TODOS,
        payload,
    };
};

//리듀서
const todos = (state = initialState, action) => {
       console.log(state)
       switch (action.type) {
        case ADD_TODOS:
            return{
                ...state,
                todos: [...state.todos, action.payload],
    
            };
        default:
            return state;
    
       };
};

export default todos;
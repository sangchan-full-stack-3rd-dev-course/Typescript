import { useState } from "react";
import { Button } from "react-bootstrap";
import Clock from "./Clock";
import TodoModal from "../day-5/TodoModal";

export type ToDo = {
    id : number;
    text : string;
    isChecked : boolean;
};

const TodoList : React.FC = () => {
    const title : string = "오늘 할 일";

    // 구조 분해 할당
    const [todos, setTodos] = useState<ToDo[]>([
        {id : 1, text : '공부하기', isChecked : false},
        {id : 2, text : '잠자기', isChecked : false},
        {id : 3, text : '일어나기', isChecked : false}
    ]);

    const [newTodo, setNewTodo] = useState<string>("");

    const todoCheck = (todoId : number) => {
        setTodos((prevs)=>
            prevs.map((todo)=> 
                todo.id === todoId ? {...todo, isChecked : !todo.isChecked} : {...todo}
            )
        );
    }

    const addTodo = (text : string) => {
        if(newTodo === ''){
            return;
        }

        setTodos((prevs)=>[...prevs, {id : Date.now(), text : text, isChecked : false}]);
        setNewTodo('');
    }

    const removeTodo = (todoId : number) => {
        setTodos(todos.filter((todo)=>todo.id!== todoId));
    }

    // modal 띄우기 위한 state, 메소드
    const [showDatail, setShowDatail] = useState<boolean>(false);
    const [selectedTodo, setSelectedTodo] = useState<ToDo|null>(null);

    const handleOpenDetail = (todo : ToDo) => {
        setShowDatail(true);
        setSelectedTodo(todo);
    };

    const handleCloseDetail = () => {
        setShowDatail(false);
        setSelectedTodo(null);
    }

    return (
        <div>
            <TodoModal show={showDatail} todo={selectedTodo} handleClose={handleCloseDetail}></TodoModal>
            <h1> {title} </h1>
            <p></p>
            <div className="container">
                <div>
                    <input type="text" placeholder="할 일 입력" style = {{
                        marginRight : '10px',
                        writingMode : 'horizontal-tb'
                    }} onChange={(e)=>{setNewTodo(e.target.value)}}></input>
                    <Button variant="warning" onClick={()=>{addTodo(newTodo);}}>추가</Button>
                </div>
                <p></p>
                <div className="board">
                    <ul>
                        {
                            todos.map((todo, index) => {
                                return (
                                    <div>
                                        <li key={index} onClick={()=>{
                                            console.log(todos);
                                            todoCheck(todo.id);
                                        }}>
                                            <input type="checkbox" defaultChecked={todo.isChecked}></input>
                                            <span onClick={()=>{
                                                if(!showDatail){
                                                    handleOpenDetail(todo);
                                                } else {
                                                    handleCloseDetail();
                                                }
                                            }}>{todo.text}</span>
                                            <button className="del_btn" onClick={()=>removeTodo(todo.id)}>삭제</button></li>
                                    </div>
                                );
                            })
                        }
                    </ul>
                </div>
            </div>
            <div className="container">
                <Clock></Clock>
            </div>
        </div>
    );
}

export default TodoList;
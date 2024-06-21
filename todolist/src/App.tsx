import './App.css';
import ClassCom from './component/day-4/ClassCom';
import FuncCom from './component/day-4/FuncCom';
import TodoList from './component/day-4/TodoList';

function App () {
  let hello = "반갑습니다.";
  let name = "sangchan";

  return (
      <div>
        <div className="App-header">
          <h1> Hello, { name !== undefined ? (<h1>{name}</h1>) : (<h1>누구쎄용</h1>) } </h1>
          <p> {hello} </p>
          <ClassCom></ClassCom>
          <FuncCom></FuncCom>
        </div>
        <div className='container'>
          <TodoList></TodoList>
        </div>
      </div>
  );
}

export default App;
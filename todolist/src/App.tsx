import './App.css';

function App () {
  let hello = "반갑습니다.";
  let name = "sangchan";

  return (
      <div className="App-header">
          <h1> Hello, { name !== undefined ? (<h1>{name}</h1>) : (<h1>누구쎄용</h1>) } </h1>
          <p> {hello} </p>
      </div>
  );
}

export default App;
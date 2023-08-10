import './App.css';

function App() {
  // create a variable
  const name = "kanha tomar";
  // list items are typed to string and merged to create a single string
  const list = [1,2,2,5,45];
  return (
    <div className="App">
      <h1>{ name }</h1>
      <h1>{list}</h1>     
      <h1>{Math.random()}</h1>     
    </div>
  );
}

// export App so that is imported by other files
export default App;

import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);

  const onChange = (event) => {
    setToDo(() => event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo !== "") {
      setToDos((current) => [toDo, ...current]);
      setToDo("");
    }
  };

  return (
    <div>
      <h1>Your To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="Write To Do"></input>
        <button>Add</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

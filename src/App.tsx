import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [user, setUser] = useState({
    name: "John",
    email: "john@gmail.com",
  });

  const increment = () => {
    setCount(count + 1);
  };

  const incrementAsync = () => {
    setTimeout(() => {
      setCount((currentCount) => currentCount + 1);
    }, 2000);
  };

  const changeUsername = () => {
    setUser((prev) => ({ ...prev, name: input }));
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={incrementAsync}>Increment async</button>

      <input
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="input new name"
      />
      <button onClick={changeUsername}>change name</button>
      <span>name is {user.name}</span>
    </>
  );
}

export default App;

import ButtonOne from "./ButtonOne";
import ButtonTwo from "./ButtonTwo";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

function App() {
  const [counter, setCounter] = useState(0);
  const onClick = () => {
    setCounter((counter) => (counter += 1));
  };

  useEffect(() => {
    console.log("YOyo");
  }, []);

  return (
    <div>
      <h1 className={styles.head}>Clicked {counter} times</h1>
      <ButtonOne onClick={onClick} />
      <ButtonTwo />
    </div>
  );
}

export default App;

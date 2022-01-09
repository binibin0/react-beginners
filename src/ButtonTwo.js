import { useState } from "react";
import { useEffect } from "react/cjs/react.development";

const ButtonTwo = () => {
  const Surprise = () => {
    useEffect(() => {
      console.log("Created!");
      return () => {
        console.log("Deleted..");
      };
    }, []);
    return <h1>Surprise!!!</h1>;
  };

  const [show, setShow] = useState(true);
  const onClick = () => {
    setShow((prev) => !prev);
  };

  return (
    <div>
      <button onClick={onClick}>{show ? "Hide" : "Show"}</button>
      {show ? <Surprise /> : null}
    </div>
  );
};

export default ButtonTwo;

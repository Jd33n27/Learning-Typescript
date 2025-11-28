import { useState, useEffect, useRef } from "react";
import "./App.css";
import Button from "./components/button/button";
import Display from "./components/display/display";

const App = () => {
  const [count, setCount] = useState<number>(0);
  const prevCountRef = useRef<number>(0);

  const increase = () => {
    setCount((prev: number) => prev + 1);
  };

  const decrease = () => {
    setCount((prev: number) => prev - 1);
  };

  useEffect(() => {
    const prevCount = prevCountRef.current;

    if (count > prevCount) {
      console.log(`Count has been increased to ${count}`);
    } else if (count < prevCount) {
      console.log(`Count has been decreased to ${count}`);
    }

    prevCountRef.current = count;
  }, [count]);

  return (
    <>
      <div className="container">
        <div>
          <div className="display-container">
            <Display count={count} />
          </div>
          <div className="btn-container">
            <Button onClick={decrease}>-</Button>
            <Button onClick={increase}>+</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;

import { useState, useEffect, useRef } from "react";
import "./App.css";
import Button from "./components/button/button";
import Display from "./components/display/display";

/*
 * ### App Component Usage and Logic
 *
 * This `App` component serves as the main entry point and orchestrator for the counter application.
 * It manages the `count` state using React's `useState` hook.
 * The `increase` and `decrease` functions update this state, which are passed as props to the `Button` components.
 * The current `count` value is passed to the `Display` component for rendering.
 * A `useEffect` hook, in conjunction with a `useRef` to store the previous count,
 * monitors state changes and logs whether the count has increased or decreased to the console.
 * This setup demonstrates basic state management, component interaction, and side effects in React.
 */
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

import React from "react";
import { useState } from "react";

const Content = () => {
  function handleNameChange() {
    const names = ["Earn", "Grow", "Give"];
    const int = Math.floor(Math.random() * 3);
    return names[int];
  }
  const [count, setCount] = useState(99);

  function incrementFunction() {
    setCount(count + 1);
  }
  //   const handleClick = (e) => {
  //     console.log(e.target.innerText);
  //   };
  //   const handleClick2 = (name) => {
  //     console.log(`Success , ${name}`);
  //   };
  return (
    <main>
      {/* <p onDoubleClick={() => handleClick2("Surya")}>
        Lets {handleNameChange()} Money
      </p>
      <button onClick={(e) => handleClick(e)}>Mark</button> */}
      <p>Lets Earn Money</p>
      <button>Mark</button>
      <button>-</button>
      <span>{count}</span>
      <button onClick={incrementFunction()}>+</button>
    </main>
  );
};

export default Content;

/**
 * We cannot able to use use State hooks in class components
 * 
 * if (true) {
    useState();
} - Not to use useState in conditions.
 */

/**
 * useState - returns array of values.
 * consist of 2 values.
 */
/**
 * current value = count
 * value change - setCount
 */

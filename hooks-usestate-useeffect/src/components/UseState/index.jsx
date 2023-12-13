import { useState } from "react";

const UseState = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <h1>Counter</h1>
      <button onClick={() => { setCounter(counter + 1) }}>
        {`Contador: ${counter}`}
      </button>
    </div>
  );
}

export default UseState;
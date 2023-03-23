import React, { useState, useEffect } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);

  useEffect(() => {
    document.title = `Clicked ${count}`;
  });

  return (
    <div className="d-flex ju">
      <h1>You Clicked {count} Time</h1>
      <input
        type="number"
        value={step}
        onChange={(event) => setStep(parseInt(event.target.value))}
      />
      <button onClick={() => setCount(count + step)}>Click me</button>
    </div>
  );
};

export default Counter;

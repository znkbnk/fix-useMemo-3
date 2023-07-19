//correct

import React, { useState, useEffect } from "react";

function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(count + 1);
  }, [count]);

  return (
    <div>
      <h1>My App</h1>

      <p>The current count is: {count}</p>

      <button onClick={() => setCount(count + 1)}>Click to increase</button>

      <ChildComponent count={count} />
    </div>
  );
}

function ChildComponent({ count }) {
  return <p>Count from parent is {count}</p>;
}

export default MyComponent;

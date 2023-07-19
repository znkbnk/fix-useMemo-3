//incorrect

import React, { useState, useEffect, useMemo } from 'react';

function MyComponent() {
  const [count, setCount] = useState(0);
  const memoizedCount = useMemo(() => count, []);
  
  useEffect(() => {
    setCount(count + 1);
  }, []);

  return (
    (<div>  
      <h1>My App</h1>
      <p>The current count is: {count}
      <button onClick={handleClick}>
        Cilck to increase
      </button>
      <React.Fragment>
        <ChildComponent/>
      </React.Fragment>
    </div>)
  )
  const unusedCount = 0;
}
function ChildComponent({ county }) {

  return <p>Count from parent is {county}</p>
}

export default MyComponent;

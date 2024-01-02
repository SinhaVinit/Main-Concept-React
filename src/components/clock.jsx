import React, { useState, useEffect } from "react";

function MyComponent() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <h1>The current time is: {time.toLocaleTimeString()}</h1>
    </div>
  );
}

export default MyComponent;

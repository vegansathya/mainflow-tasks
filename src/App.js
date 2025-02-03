import React, { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "http://localhost:5000/api/counter";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get(API_URL).then((res) => setCount(res.data.count));
  }, []);

  const increaseCounter = () => {
    axios.post(`${API_URL}/increase`).then((res) => setCount(res.data.count));
  };

  const decreaseCounter = () => {
    axios.post(`${API_URL}/decrease`).then((res) => setCount(res.data.count));
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Counter App</h1>
      <h2>{count}</h2>
      <button onClick={increaseCounter}>Increase</button>
      <button onClick={decreaseCounter}>Decrease</button>
    </div>
  );
}

export default App;

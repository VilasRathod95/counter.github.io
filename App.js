import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setvalue] = useState(0);
  function incraement() {
    setvalue((coun) => coun + 1);
  }
  function decreament() {
    setvalue(count - 1);
  }

  return (
    <>
      <div>
        <button className="btn1" onClick={incraement}>
          {" "}
          increament{" "}
        </button>
        <span> {count}</span>
        <button className="btn2" onClick={decreament}>
          decreament
        </button>
      </div>
    </>
  );
}

export default App;
export { useState };

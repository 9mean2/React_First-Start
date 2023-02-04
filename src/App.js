import React, { useState } from "react";

function App() {
  const [fruit, setFruit] = useState("");

  return (
    <div>
      과일 :{" "}
      <input
        value={fruit}
        onChange={function (event) {
          setFruit(event.target.value);
        }}
      />
      <br />
      {fruit}
    </div>
  );
}

export default App;

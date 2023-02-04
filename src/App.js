import React, { useState } from "react";

function App() {
  const [name, setName] = useState("오일남할아버지");

  return (
    <div>
      {name}
      <br />
      <button
        onClick={function () {
          setName("숨겨진 반전 ㄷㄷ");
        }}
      >
        클릭
      </button>
    </div>
  );
}

export default App;

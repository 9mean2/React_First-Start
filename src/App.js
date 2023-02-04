import React from "react";

function App() {
  const number = 1;

  const pTagStyle = {
    color: "red",
  };

  return (
    <div>
      <p style={pTagStyle}>안녕하세요 리액트입니다.</p>
      <p style={pTagStyle}>
        {number > 10 ? number + "은 10 보다 크다" : number + "는 10보다 작다"}
      </p>
    </div>
  );
}

export default App;

import React from "react";

function Son() {
  return <div>전 아들인데요</div>;
}

function Mother() {
  return <Son />;
}

function GrandFather() {
  return <Mother />;
}

function App() {
  return <GrandFather />;
}

export default App;

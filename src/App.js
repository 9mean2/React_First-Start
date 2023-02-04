import React from "react";

// props 를 통해 부모에서 자식 데이터가 전달
function Son(props) {
  console.log("props", props);
  return <div>응애 나 {props.gfn} 손자ㅋㅋ</div>;
}

// 부모에서 자식 한테 정보를 전달했다
function Mother(props) {
  // console.log("props", props.GrandFatherName);
  const gfn = props.GrandFatherName;

  const name = "흥부인";
  return <Son gfn={gfn} />;
}

function GrandFather() {
  const name = "오일남";
  return <Mother GrandFatherName={name} />;
}

function App() {
  return <GrandFather />;
}

export default App;

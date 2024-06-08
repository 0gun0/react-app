import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목1, x] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  let [따봉, 따봉변경] = useState(0);
  console.log(글제목1[0]);

  function 함수() {
    console.log(1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "white", fontSize: "30px" }}>ReactBlog</h4>
      </div>
      <div className="list">
        <h4>
          {" "}
          {글제목1[0]}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            좋아요👍
          </span>
          {따봉}
          <button
            onClick={() => {
              x(["여자 코트 추천", "강남 우동맛집", "파이썬 독학"]);
            }}
          >
            버튼s
          </button>
        </h4>
        <p2>2월 17일 발행</p2>
      </div>
      <div className="list">
        <h4> {글제목1[1]} </h4>
        <p2>2월 17일 발행</p2>
      </div>
      <div className="list">
        <h4> {글제목1[2]} </h4>
        <p2>2월 17일 발행</p2>
      </div>
      <h4></h4>
    </div>
  );
}

export default App;

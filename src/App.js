import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, x] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);

  let [따봉, 따봉변경] = useState(0);

  function 함수() {
    console.log(1);
  }

  return (
    <div className="App">
      <div className="black-nav">
        <h4 style={{ color: "white", fontSize: "30px" }}>ReactBlog</h4>
      </div>
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.sort();
          x(copy);
        }}
      >
        {" "}
        가나다순 정렬
      </button>{" "}
      {/* 버튼 누르면 글제목 가나다순 정렬기능 만들기 array 정렬? */}
      <div className="list">
        <h4>
          {" "}
          {글제목[0]}
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
              let copy = [...글제목];
              copy[0] = "여자 코트 추천";
              x(copy);
            }}
          >
            글수정
          </button>
        </h4>
        <p2>2월 17일 발행</p2>
      </div>
      <div className="list">
        <h4> {글제목[1]} </h4>
        <p2>2월 17일 발행</p2>
      </div>
      <div className="list">
        <h4> {글제목[2]} </h4>
        <p2>2월 17일 발행</p2>
      </div>
      <Modal />
      <인적사항 />
    </div>
  );
}

//바깥에 만드셈
function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

function 인적사항() {
  return (
    <div className="list">
      <h3>이름 : </h3>
      <p> 나이 : </p>
      <p> 직업 : </p>
    </div>
  );
}

export default App;

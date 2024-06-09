import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, Change] = useState([
    "남자 코트 추천",
    "강남 우동맛집",
    "파이썬 독학",
  ]);
  let [title, setTitle] = useState(2);
  let [입력값, 입력값변경] = useState("");

  let [따봉, 따봉변경] = useState([0, 0, 0]);

  let [modal, setModal] = useState(false);

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
          Change(copy);
        }}
      >
        {" "}
        가나다순 정렬
      </button>{" "}
      {/* 버튼 누르면 글제목 가나다순 정렬기능 만들기 array 정렬? */}
      {/* <div className="list">
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
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {" "}
          {글제목[2]}{" "}
        </h4>
        <p2>2월 17일 발행</p2>
      </div> */}
      {글제목.map(function (a, i) {
        return (
          <div className="list" key={i}>
            <h4
              onClick={() => {
                setModal(!modal);
                setTitle(i);
              }}
            >
              {글제목[i]}
              <span
                onClick={() => {
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }}
              >
                좋아요👍
              </span>{" "}
              {따봉[i]}
              {/* 좋아요. 여기가 카운트 보여지는곳. 각 카운트를 센다. useState */}
            </h4>
            <p2>2월 17일 발행</p2>
            <button
              onClick={() => {
                let copy = [...글제목];
                copy.splice(i, 1);
                Change(copy);
              }}
            >
              {" "}
              삭제{" "}
            </button>
          </div>
        );
      })}
      {/* <button onClick={() => setTitle(0)}> 글제목0</button>
      <button onClick={() => setTitle(1)}> 글제목1</button>
      <button onClick={() => setTitle(2)}> 글제목2</button> */}
      <input
        onChange={(e) => {
          입력값변경(e.target.value);
          console.log(입력값);
        }}
      />
      <button
        onClick={() => {
          let copy = [...글제목];
          copy.unshift(입력값);
          Change(copy);
        }}
      >
        글발행
      </button>
      {
        // 조건식 ? 참일때 실행할코드 : 거짓일 때 실행할 코드
        modal == true ? (
          <Modal
            title={title}
            Change={Change}
            color={"yellow"}
            글제목={글제목}
          />
        ) : null
      }
    </div>
  );
}

//바깥에 만드셈
function Modal(props) {
  return (
    <div className="modal" style={{ background: props.color }}>
      <h4>{props.글제목[props.title]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button
        onClick={() => {
          props.Change(["여자코트 추천", "강남 우동맛집", "파이썬독학"]);
        }}
      >
        글수정
      </button>
    </div>
  );
}

export default App;

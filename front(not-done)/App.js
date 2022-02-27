import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Link, Route, BrowserRouter as Router } from "react-router-dom";
import Profile from "./settings/Profile";

function App() {

  return (
    // <Router>
    <div className="App">
      <header>
        <div className="black-nav">
          re:mind
          <div className="icons">
            <div>아이콘1</div>
            <div>아이콘2</div>
          </div>
        </div>
      </header>

      <main>
        <div className="divider">
          <div className="menu">
            <div className="menu-list">개인정보 수정</div>
            {/* <Route exact path="/settings" component={Profile} /> */}
            <div className="menu-list">환경설정</div>
            {/* <Route exact path="/settings" component={Manage} /> */}
            <div className="menu-list">게시판 관리</div>
            {/* <Route exact path="/settings" component={Board} /> */}
            <div className="menu-list">다이어리 관리</div>
            {/* <Route exact path="/settings" component={Diary} /> */}
          </div>
          <div className="submenu">
            <div className="submenu-list">
              <div>글제목1</div>
              <div>내용1</div>
            </div>
            <div className="submenu-list">
              <div>글제목1</div>
              <div>내용1</div>
            </div>
            <div className="submenu-list">
              <div>글제목1</div>
              <div>내용1</div>
            </div>
            <Modal></Modal>
          </div>
        </div>
      </main>
    </div>

    // </Router>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h2>제목</h2>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;

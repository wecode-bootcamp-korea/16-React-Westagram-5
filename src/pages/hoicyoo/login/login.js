import React, { Component } from "react";

import "./Login.scss";

class LoginYhi extends Component {
  constructor() {
    super();
    this.state = {
      id: "",
      pw: "",
      productList: [],
    };
  }

  handleIdInput = (e) => {
    this.setState({
      id: e.target.value,
    });
  };

  handlePwInput = (e) => {
    this.setState({
      pw: e.target.value,
    });
  };

  render() {
    const checkId = this.state.id.includes("@");
    const checkPw = this.state.pw.length >= 5;
    const changeColorBtn = checkId && checkPw;
    return (
      <main className="Login">
        <div className="login_wrap">
          <div className="login_logo">Westargram</div>
          <div className="login_tool">
            <input
              onChange={this.handleIdInput}
              value={this.state.id}
              className="login_id"
              id="id"
              type="text"
              placeholder="전화번호, 사용자 이름 또는 이메일"
            />
            <input
              onChange={this.handlePwInput}
              value={this.state.pw}
              className="login_pw"
              id="pw"
              type="password"
              placeholder="비밀번호"
            />
            <button
              className={changeColorBtn ? "change_btn" : "login_btn"}
              id="btn"
              type="submit"
            >
              로그인
            </button>
            <span className="login_forget">비밀번호를 잊으셨나요?</span>
          </div>
        </div>
      </main>
    );
  }
}

export default LoginYhi;

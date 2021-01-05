import React from "react";

import "./main.scss";

class Login extends React.Component {
  render() {
    return (
      <div className="title_area_wrapper">
        <div className="title_area">
          <h1 className="title">Westargram</h1>
          <div className="search_box">
            <input type="text" placeholder="검색" className="input_search" />
          </div>
          <nav className="nav_box">
            <a href="" className="link_nav">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
                alt="map"
                width="22"
                height="22"
              />
            </a>
            <a href="" className="link_nav">
              <img
                src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png "
                alt="heart"
                width="22"
                height="22"
              />
            </a>
            <div className="link_box">
              <a href="" className="link_nav">
                <img
                  src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
                  alt="mypage"
                  width="22"
                  height="22"
                />
              </a>
              <div className="link_page_box" style="display: none;">
                <a href="" className="link_page">
                  프로필
                </a>
                <a href="" className="link_page">
                  저장됨
                </a>
                <a href="" className="link_page">
                  설정
                </a>
                <a href="" className="link_page">
                  계정 전환
                </a>
                <a href="" className="link_page logout">
                  로그아웃
                </a>
              </div>
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

export default MainYhi;

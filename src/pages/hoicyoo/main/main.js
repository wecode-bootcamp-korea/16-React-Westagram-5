import React, { Component } from "react";

import "./Main.scss";

class MainYhi extends Component {
  render() {
    return (
      <main>
        <div className="feeds">
          <article>
            <img className="picture" src="../images/47.PNG" alt="mypicture" />
            <div className="feed_comment">
              <ul className="list_comment" id="feed_list">
                <li className="item_comment">
                  <span className="comment_id">hoic</span>
                  <span className="comment_desc">사진이 참 멋진걸?</span>
                </li>
              </ul>
              <div className="feed_entry">
                <input className="input_feed" placeholder="댓글달기..." />
                <button className="input_btn" type="button" id="btn_comment">
                  게시
                </button>
              </div>
            </div>
          </article>
        </div>
        <div className="main-right"></div>
      </main>
    );
  }
}

export default MainYhi;

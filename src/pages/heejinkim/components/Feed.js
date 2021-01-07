import React from 'react'; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faComment, faHeart, faCompass, faHome, faLocationArrow, faSearch, faTimesCircle, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart, faCompass as farCompass, faComment as farComment, faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";

class Feed extends React.Component {
    render() {
        return (
            <div class="div-main-feeds_feed">
                                <div class="feed-profile">
                                    <div class="feed-profile-box">
                                        <div class="feed-profile_pic">
                                            <img src="https://www.allkpop.com/upload/2020/01/content/181813/1579389188-aee70205-f9ac-4903-acb7-25d27940c050.jpeg"/>
                                        </div>
                                        <span class="feed-profile_name">Suzy</span>
                                    </div>
                                    <FontAwesomeIcon icon={faEllipsisH} />
                                </div>
                                <div class="feed-picture">
                            <img src="https://t1.daumcdn.net/cfile/tistory/997301365E567FD701"/>
                        </div>
                                <div class="feed-comment">
                                    <div class="feed-comment-icons">
                                    <div class="feed-comment-icons_left">
                                    <FontAwesomeIcon className="comment-icon" icon={farHeart} size="lg" />
                                    <FontAwesomeIcon className="comment-icon" icon={farComment} size="lg" />
                                    <FontAwesomeIcon className="comment-icon" icon={faLocationArrow} size="lg" />
                                </div>
                                    <FontAwesomeIcon icon={farBookmark} size="lg" />    
                                    </div>
                                    <div class="feed-comment-likes">
                                    <span>좋아요 0개</span>
                                    </div>
                                <div class="feed-comment-article">
                                <div>
                                    <span class="feed-comment-article__user">Suzy</span>
                                    <span class="feed-comment-article__content">
                                        인스타그램 피드 페이지 클론 레이아웃 작업 진행 중...
                                    </span>
                                </div>
                                <div class="feed-comment-article__allcomment">
                                    댓글 0개 모두 보기
                                </div>
                            </div>
                            <div class="article-new__comment">
                                <div class="article-new__comment--txt">
                                    
                                </div>
                                <FontAwesomeIcon className="article-new__comment--icon" icon={farHeart} size="xs" />
                            </div>
                        </div>
                            <div class="feed-comment-form">
                                <input type="text" placeholder="댓글 달기..."/>
                                <input type="submit" value="게시"/>
                            </div>
                            </div>
            );
    }
}

export default Feed;
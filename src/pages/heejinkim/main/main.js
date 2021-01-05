import React from 'react'; 
import Nav from '../components/Nav';
import "../main/main.scss";
import "../../../styles/common.scss";
import "../../../styles/reset.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark, faComment, faHeart, faCompass, faHome, faLocationArrow, faSearch, faTimesCircle, faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { faHeart as farHeart, faCompass as farCompass, faComment as farComment, faBookmark as farBookmark } from "@fortawesome/free-regular-svg-icons";

class Main extends React.Component {
    render() {
        return (
            <div>
                <Nav />
                <main>
                    <div class="div-main-feeds">
                        <div>
                            <div class="div-main-feeds_story">
                                <div class="feeds-story__column">
                                    <img src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/suzy_selfies.jpg"/>
                                    <span class="feeds-story__name">suzy</span>
                                </div>
                                <div class="feeds-story__column">
                                    <img src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/suzy_selfies.jpg"/>
                                    <span>suzy</span>
                            </div>
                                <div class="feeds-story__column">
                                    <img src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/suzy_selfies.jpg"/>
                                    <span>suzy</span>
                            </div>
                                <div class="feeds-story__column">
                                    <img src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/suzy_selfies.jpg"/>
                                    <span>suzy</span>
                            </div>
                                <div class="feeds-story__column">
                                    <img src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/suzy_selfies.jpg"/>
                                    <span>suzy</span>
                            </div>
                                <div class="feeds-story__column">
                                    <img src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/suzy_selfies.jpg"/>
                                    <span>suzy</span>
                            </div>
                                <div class="feeds-story__column">
                                    <img src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/suzy_selfies.jpg"/>
                                    <span>suzy</span>
                            </div>
                                <div class="feeds-story__column">
                                    <img src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/suzy_selfies.jpg"/>
                                    <span>suzy</span>
                            </div>
                                <div class="feeds-story__column">
                                    <img src="https://www.pinkvilla.com/files/styles/amp_metadata_content_image_min_696px_wide/public/suzy_selfies.jpg"/>
                                    <span>suzy</span>
                            </div>
                            </div>
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
                                    <span>user1</span>
                                    <span>자바스크립트 적용은 언제하지 ㅠㅠ?</span>
                                </div>
                                <FontAwesomeIcon className="article-new__comment--icon" icon={farHeart} size="xs" />
                            </div>
                        </div>
                        <div class="feed-comment-form">
                            <input type="text" placeholder="댓글 달기..."/>
                            <input type="submit" value="게시"/>
                        </div>
                    </div>
                </div>            
            </div>
                    <div class="div-main-right">
                        <div class="div-main-right__aside">
                            <div class="div-main-right_myaccount">
                                <div class="main-myaccount"> 
                                    <img src="https://www.allkpop.com/upload/2020/01/content/181813/1579389188-aee70205-f9ac-4903-acb7-25d27940c050.jpeg"/>
                                    <span>Suzy</span>
                                </div>
                                <span class="main-myaccount_switch">전환</span>
                            </div>
                            <div class="div-main-right_rec">
                                    <div class="rec_txt">
                                        <span>회원님을 위한 추천</span>
                                        <span>모두 보기</span>
                                    </div>
                                    <div class="rec_row">
                                        <div class="rec_row_column">
                                            <img src="https://image.mycelebs.com/celeb/sq/531_sq_01.jpg"/>
                                            <div class="rec_comment">
                                                <span>guess_korea</span>
                                                <span>Suzy님이 팔로우합니다.</span>
                                            </div>
                                        </div>
                                        <span class="rec_follow">팔로우</span>
                                    </div>
                                </div>
                            <footer>
                                <span>소개·도움말·홍보 센터·API채용 정보·</span>
                                <span>개인정보처리방침·약관·위치·인기 계정·해시태그·언어</span>
                                <span>© 2020 INSTAGRAM FROM FACEBOOK</span>
                            </footer>
                        </div>
                    </div>
                </main>
            </div>
            );
    }
}

export default Main;
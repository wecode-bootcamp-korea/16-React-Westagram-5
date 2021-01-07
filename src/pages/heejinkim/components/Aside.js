import React from 'react'; 

class Aside extends React.Component {
    render() {
        return (
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
            );
    }
}

export default Aside;
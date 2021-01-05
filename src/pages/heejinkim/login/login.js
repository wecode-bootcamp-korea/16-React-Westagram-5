import React from 'react'; 
import { Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import "../login/login.scss";
import "../../../styles/common.scss";
import "../../../styles/reset.scss";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          idValue : '',
          pwValue : '',
          ChangeBtn:""
        }
      } 

    goToMain = () => {
        this.props.history.push('/Main');
    }
    
    handleIdValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };
    
    handlePwValue = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    render() {

        const changeBtn = (this.state.idValue.length > 5 && this.state.idValue.includes("@") && this.state.pwValue.length > 5);

        return (
        <div class="main-box">
            <div class="login-box">
                <h1>Westagram</h1>
                <form>
                    <input 
                        type="text"
                        name="idValue"
                        value={this.state.idValue}
                        onChange={(e) => this. handleIdValue(e) }
                        placeholder="전화번호, 사용자 이름 또는 이메일" />
                    <input 
                        type={this.state.showPw ? "text" : "password"}
                        name='pwValue'
                        value={this.state.pwValue}
                        onChange={(e) => this.handlePwValue(e)}
                        placeholder="비밀번호" />               
                    <Link to="/main-heejinkim">
                        <button className={`${changeBtn ? 'changecolor' : ''}`} >Link 로그인</button>
                    </Link>
                    <button className="js-btn" onClick={this.goToMain}>withRouter 로그인</button>   
                </form>    
                <a href="#">비밀번호를 잊으셨나요?</a>
            </div>
        </div>   
        );
    }
}

export default withRouter(Login);
import React from 'react'; 
import {SIGNUP_API, SIGNIN_API } from '../config'
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
          pwValue : ''
        }
      }  
 
    handleInput = (e) => {
        const { value, name } = e.target;
        this.setState ({[name] : value})

    }

    
    handleButton = () => {
        fetch(SIGNIN_API, {
            method: "POST",
            body: JSON.stringify({
                email: this.state.idValue,
                password: this.state.pwValue
            }),
        })
            .then(response => response.json())
            .then(result => {
                console.log({result});
                if(result.message === "SUCCESS") {
                    alert ("로그인 성공")
                    this.props.history.push('/main-heejinkim');
                } 
                if (result.message === 'UNAUTHORIZED') {
                    alert('확인해주세요.');
                  }
                if (result.message === `KEY_ERROR: 'email' and 'password'`) {
                    alert('입력해주세요');
                  }
            })
        }


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
                        onChange={(e) => this. handleInput(e) }
                        placeholder="전화번호, 사용자 이름 또는 이메일" />
                    <input 
                        type={this.state.showPw ? "text" : "password"}
                        name='pwValue'
                        value={this.state.pwValue}
                        onChange={(e) => this.handleInput(e)}
                        placeholder="비밀번호" />               
                    <Link to="/main-heejinkim">
                        <button className={`${changeBtn ? 'changecolor' : ''}`} onClick={this.handleButton}>Link 로그인</button>
                    </Link>
                    <button className={`${changeBtn ? 'changecolor' : ''}`}  type="button" onClick={this.handleButton} >withRouter 로그인</button>   
                </form>    
                <a href="#">비밀번호를 잊으셨나요?</a>
            </div>
        </div>   
        );
    }
}

export default withRouter(Login);
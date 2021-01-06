import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// 동하's 컴포넌트
import LoginKdh from "./pages/donghakim/login/login";
import MainKdh from "./pages/donghakim/main/main";

// 새봄's 컴포넌트
import LoginLsb from "./pages/saebomlee/Login/Login";
import MainLsb from "./pages/saebomlee/Main/Main";

// 호익's 컴포넌트
import LoginYhi from "./pages/hoicyoo/login/login";
import MainYhi from "./pages/hoicyoo/main/main";

// 필제's 컴포넌트
import LoginLpj from "./pages/piljelee/login/login";
import MainLpj from "./pages/piljelee/main/main";

// 희진's 컴포넌트
import LoginKhj from "./pages/heejinkim/login/login";
import MainKhj from "./pages/heejinkim/main/main";

// import 각 경로
class Routes extends React.Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route expact path="/login-donhakim" component={LoginKdh} />
                    <Route expact path="/login-saebomlee" component={LoginLsb} />
                    <Route expact path="/login-hoicyoo" component={LoginYhi} />
                    <Route expact path="/login-piljelee" component={LoginLpj} />
                    <Route expact path="/login-heejinkim" component={LoginKhj} />
                    <Route exapct path="/main-donhakim" component={MainKdh} />
                    <Route exapct path="/main-saebomlee" component={MainLsb} />
                    <Route exapct path="/main-hoicyoo" component={MainYhi} />
                    <Route exapct path="/main-piljelee" component={MainLpj} />
                    <Route exapct path="/main-heejinkim" component={MainKhj} />
                </Switch>
            </Router>
        );
    }
}

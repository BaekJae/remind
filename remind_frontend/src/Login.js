// 최초 프로그램 실행 시 한 번만 실행
// 이후에는 LocalStorage 내부의 아이템을 가져온다.

import React from 'react';
import { call } from './service/ApiService';
import {TextField, Button} from "@material-ui/core";

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Info : {userId: props.userId, userPassword : props.userPassword},
        }
    }

    componentDidMount() {
        const userId = localStorage.getItem("userId");
        const userPassword = localStorage.getItem("userPassword");
        if((userId !== undefined && userId !== null) && (userPassword !== undefined && userPassword !== null)){
            this.login(userId, userPassword);
        }
    }

    onIdInputChange = (e) => {
        console.log("Id Changed: " + e.target.value);
        const thisItem = this.state.Info;
        thisItem.userId = e.target.value;
        this.setState({Info: thisItem});
    }

    onPwInputChange = (e) => {
        console.log("Pw Changed: " + e.target.value);
        const thisItem = this.state.Info;
        thisItem.userPassword = e.target.value;
        this.setState({Info: thisItem});
    }

    onButtonClick = (e) => {
        e.preventDefault();
        console.log("Id: " + this.state.Info.userId);
        console.log("PassWord: " + this.state.Info.userPassword);
        let userDTO = this.state.Info;
        localStorage.setItem("userId", this.state.Info.userId);
        localStorage.setItem("userPassword", this.state.Info.userPassword);
        call("/auth/login", "POST", userDTO, null)
            .then((response) => {
                alert("로그인 성공.<br>토큰이 저장됩니다.");
                localStorage.setItem("ACCESS_TOKEN", response.token);
                window.location.href="/";
            })
    }


    login = (userId, userPw) => {
        let userDTO = {};
        userDTO.userId = userId;
        userDTO.userPassword = userPw;
        call("/auth/login", "POST", userDTO, null)
            .then((response) => {
                alert("로그인 성공");
                localStorage.setItem("ACCESS_TOKEN", response.token);
                window.location.href="/";
            })
            .catch(() => {
                alert("로그인 실패.")
            })
    }

    render(){
        return(
            <div className="LoginForm">
                userId
                <br/>
                <TextField
                    label="아이디 입력"
                    variant="outlined"
                    type="text"
                    id="userId"
                    name="userId"
                    style={{"width":"80%"}}
                    value={this.state.Info.userId}
                    onChange={this.onIdInputChange}
                />
                <br/>
                userPassword
                <br/>
                <TextField
                    label="비밀번호 입력"
                    variant="outlined"
                    type="password"
                    id="userPassword"
                    name="userPassword"
                    style={{"width":"80%"}}
                    value={this.state.Info.userPassword}
                    onChange={this.onPwInputChange}
                />
                 <div className="BtnArea"style={{"marginTop":"2%"}}>
                <Button
                    variant="outlined"
                onClick={this.onButtonClick}>
                    Submit
                </Button>
                </div>
            </div>
        )
    }
}

export default Login;

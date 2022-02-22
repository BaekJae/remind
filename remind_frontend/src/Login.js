// 최초 프로그램 실행 시 한 번만 실행
// 이후에는 LocalStorage 내부의 아이템을 가져온다.

import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            Info : {userId: props.userId, userPassword : props.userPassword},
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
        localStorage.setItem("userId", this.state.Info.userId);
        localStorage.setItem("userPassword", this.state.Info.userPassword);
    }

    login = (userId, userPw) => {
        if(userId == undefined || userPw == undefined){
            return 0;
        }
        else{
            alert("Login success");
            window.location.href("/");
            
        }
    }

    render(){
        const item = this.state.Info;
        console.log("Stored userId: " + localStorage.getItem("userId"));
        console.log("Stored userPassword: " + localStorage.getItem("userPassword"));
        this.login(localStorage.getItem("userId"), localStorage.getItem("userPassword"));
        return(
            <div className="LoginForm">
                userId : 
                <input
                type="text"
                id={item.id}
                name={item.id}
                value={item.userId}
                onChange={this.onIdInputChange}
                />
                <br/>
                userPassword:
                <input
                type="text"
                id={item.id}
                name={item.id}
                value={item.userPassword}
                onChange={this.onPwInputChange}
                />
                 <div className="BtnArea">
                <button
                onClick={this.onButtonClick}>
                    Submit
                </button>
                </div>
            </div>
        )
    }
}

export default Login;
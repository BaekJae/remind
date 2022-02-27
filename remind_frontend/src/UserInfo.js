import React from 'react'
import UserLogin from "./UserLogin";
import UserInfoSection from "./UserInfoSection";
import {Link} from 'react-router-dom';

const UserInfo = (props) => {
    if(localStorage.getItem("ACCESS_TOKEN")){
        return <UserInfoSection/>
    }
    else{
        return(
            <Link to = "/login">
                로그인 하러가기
            </Link>
        )
    }
}

export default UserInfo;

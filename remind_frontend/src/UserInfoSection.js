import React from 'react'
import {Link} from "react-router-dom";

const UserInfoSection = (props) => {
    return(
        <div style={{"fontSize":"1.5em"}}>
            {localStorage.getItem("userId")}님 환영합니다!
            <br/>
            <Link to="/logout">
                로그아웃
            </Link>
        </div>
    )
}

export default UserInfoSection;

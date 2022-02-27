import React, {useEffect} from 'react';
import {useNavigate} from "react-router-dom";
import {Button} from "@material-ui/core";

const Logout = () => {
    const navigate = useNavigate();
    const logout = (e) => {
        e.preventDefault();
        localStorage.clear();
        alert("로그아웃 완료");
        navigate(-1);
    }
    return(
        <Button
            size="small"
            onClick={logout}
        >
            Logout
        </Button>
    )
}

export default Logout;

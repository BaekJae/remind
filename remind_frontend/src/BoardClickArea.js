import React from 'react';
import {Link} from "react-router-dom";

class BoardClickArea extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="ClickArea1"
            style={{"width":"15vh", "height":"80vh", "float":"left"}}>
                <Link to="/board">
                    <div style={{"opacity":"0", "backgroundColor":"red","width":"100%","height":"55%"}}>

                    </div>
                </Link>
                <Link to="/board">
                    <p style={{"marginTop":"5%"}}>
                        <i className="arrow left"></i>
                        <i className="arrow left"></i>
                        <i className="arrow left"></i>
                        <br/>
                        <span style={{"fontSize":"0.5em"}}>게시판</span>
                    </p>
                </Link>
                <Link to="/board">
                    <div style={{"opacity":"0", "backgroundColor":"red","width":"45%","height":"40%"}}>

                    </div>
                </Link>
            </div>
        )
    }
}

export default BoardClickArea;

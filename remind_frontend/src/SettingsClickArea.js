import React from 'react';
import {Link} from "react-router-dom";

class SettingsClickArea extends React.Component{
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <div className="ClickArea3"
            style={{"width":"70%", "marginLeft":"15%", "marginTop":"5.5%"}}>
                <Link to="#">
                    <ul style={{"marginTop":"5%"}}>
                        <li><i className="arrow down"></i></li>
                        <li><i className="arrow down"></i></li>
                        <li><i className="arrow down"></i></li>
                        <li style={{"fontSize":"0.5em", "lineHeight":"6em"}}>환경설정</li>
                    </ul>
                </Link>
            </div>
        )
    }
}

export default SettingsClickArea;

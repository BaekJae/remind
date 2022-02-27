import React from 'react';
import moment from 'moment';
import BoardClickArea from "./BoardClickArea";
import DiaryClickArea from "./DiaryClickArea";
import SettingsClickArea from "./SettingsClickArea";
import UserInfo from "./UserInfo";
import {Link} from 'react-router-dom';

class Main extends React.Component{
    constructor(props){
        super(props);
        this.state = {d : new Date()};
    }

    componentDidMount() {
        this.timeID = setInterval(
            () => this.Change(), 1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timeID);
    }

    Change = () => {
        this.setState({
            d : new Date(),
        })
    }

    render(){
        const nowTime=moment().format('HH:mm:ss');
        const nowDate =moment().format('YYYY년 MM월 DD일');
        return(
            <div className="MainLayout">
                <div className="MainArea"
                style={{"width":"70vh", "height":"80vh", "margin":"auto", "display":"inline-block"}}>
                    <div className="DateTimeArea" style={{"margin-top":"35vh"}}>
                        <span className="TimeArea" style={{"fontSize":"7em"}}>
                            {nowTime}
                        </span>
                        <br/>
                        <span className="DateArea" style={{"fontSize":"2em"}}>
                            {nowDate}
                        </span>
                    </div>
                    <UserInfo/>

                </div>
                <BoardClickArea/>
                <DiaryClickArea/>
                <SettingsClickArea/>
            </div>

        )
    }
}

export default Main;

import React, {useRef} from 'react';
import {Link} from 'react-router-dom';
import {Button} from "@material-ui/core";

class BoardSelectPage extends React.Component{
    value = React.createRef();
    value2 = React.createRef();
    constructor(props) {
        super(props);
    }

    clickHandler1 = (e) => {
        e.preventDefault();
        const boardId = this.value.current.value;
        window.location.href="/board/list?boardId="+boardId;
    }

    clickHandler2 = (e) => {
        e.preventDefault();
        const boardId = this.value2.current.value;
        window.location.href="/board/list?boardId="+boardId;
    }

    clickHandler3 = (e) => {
        window.location.href="/";
    }

    render(){
        return(
                <div className="BoardSelectPage" style={{"height": "95%"}}>
                    <div className="bg-image1 studySelection"></div>
                        <div className="bg-text2">
                            <Button
                                style={{"color": "white", "fontSize":"3em", "marginTop":"50vh", "width":"50%"}}
                                value="1"
                                onClick={this.clickHandler1}
                                ref={this.value}
                            >
                                학습게시판
                            </Button>
                        </div>
                    <div className="bg-image1 chatSelection"></div>
                        <div className="bg-text3">
                            <Button
                                style={{"width":"50%", "color": "white", "marginTop":"50vh", "fontSize":"3em"}}
                                value="2"
                                onClick={this.clickHandler2}
                                ref={this.value2}
                            >
                                자유게시판
                            </Button>
                        </div>
                    <div>
                        <Button
                            variant="outlined"
                            style={{"width":"100%", "overflow": "hidden"}}
                            onClick={this.clickHandler3}
                        >
                            메인으로 돌아가기
                        </Button>
                    </div>
                </div>
        )
    }
}

export default BoardSelectPage;

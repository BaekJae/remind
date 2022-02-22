import React, { useEffect, useState } from 'react';
import { call } from './service/ApiService';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Button, TextField } from '@material-ui/core';


class BoardComment extends React.Component{
    constructor(props){
        super(props);
        this.state={
            noteId: props.noteId,
            comments: props.comments,
            commentContent: ""
        }
    }

    componentDidMount(){
        const token = localStorage.getItem("ACCESS_TOKEN");
        call("/comment/get/"+this.state.noteId,"GET",null,token)
        .then((response)=>this.setState({comments: response}))
    }

    changeHandler = (e) => {
        this.setState({commentContent: e.target.value});
    }
    
    clickHandler = (e) => {
        let commentInput = {};
        const token = localStorage.getItem("ACCESS_TOKEN");
        commentInput.noteId = this.state.noteId;
        commentInput.commentContent = this.state.commentContent;
        call("/comment/register", "POST", commentInput, token)
        .then(() => {
            alert("댓글 등록 성공");
            call("/comment/get/"+this.state.noteId,"GET",null,token)
            .then((response)=>this.setState({comments: response}))
        })
    }

    render(){
        return(
            <div className='commentArea'>
                <h3> 댓글 </h3>
                <br/>
                <div className='commentInsertArea' style={{"width":"80%"}}>
                    <div className='commentContentInput'>
                        <TextField
                            id='commentContent'
                            variant= 'outlined'
                            onChange = {this.changeHandler}
                            style={{"width":"80%"}}
                        />
                        <Button
                            style={{"width":"10%", "float":"right"}}
                            onClick = {this.clickHandler}
                            variant = 'contained'
                        >
                            작성
                        </Button>
                    </div>
                    
                </div>
                {this.state.comments && this.state.comments.map((comment) => (
                    <div className='comment'>
                        <div className='commentHeader'>
                            <div className='commentWriter' style={{"float": "left"}}>
                                {comment.commentWriter}
                            </div>
                            <div className='commentWritedDate' style={{"float": "right"}}>
                                {comment.commentRegisteredDate}&nbsp;&nbsp;{comment.commentRegisteredTime}
                            </div>
                        </div>
                        <div className="commentContent">
                            {comment.commentContent}
                        </div>
                    </div>
                ))}
            </div> 
        )
    }
}
export default BoardComment;
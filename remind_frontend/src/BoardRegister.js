import React, {useState} from 'react';
import { TextField, Button} from '@material-ui/core';
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor';
import { call } from './service/ApiService';
import BoardHeader from './BoardHeader.js';
import {useNavigate, useSearchParams} from 'react-router-dom';

const BoardRegister = (props) => {
    const navigate = useNavigate();
    const editorRef = React.createRef();
    const [boardTitle, setBoardTitle] = useState("");
    const [params, setParams] = useSearchParams();

    const changeHandler = (e)=>{
        setBoardTitle(e.target.value);
    }

    const clickHandler = (e) => {
        navigate(-1);
    }

    const enterSubmit = () => {
        const token = localStorage.getItem("ACCESS_TOKEN");
        const boardContent = editorRef.current.getInstance().getHTML();

        let boardWriting = new Object();
        boardWriting.boardId = params.get("boardId");
        boardWriting.noteTitle = boardTitle;
        boardWriting.noteContent = boardContent;

        call("/board/register", "POST", boardWriting, token)
            .then(() => {
                alert("board Register Success");
                window.location.href = "/board";
            })
            .catch(() => {
                alert("board Register Cancel");
            })
    }
        return(
            <div className="EditorSection">
                <BoardHeader/>
                <h5 style={{"textAlign": "left", "paddingLeft": "2.5%"}}>제목</h5>
                <TextField
                    id="boardTitle"
                    name="boardTitle"
                    style={{"width": "95%"}}
                    onChange={changeHandler}
                    placeholder="제목"
                />
                <h5 style={{"textAlign": "left", "paddingLeft": "2.5%"}}>내용</h5>
                <div style={{"textAlign": "justify", "width": "95%", "paddingLeft": "2.5%"}}>
                    <Editor
                        usageStatistics={false}
                        ref={editorRef}
                        placeholder="이곳에 글을 작성하세요"
                        initialEditType='wysiwyg'
                    />
                </div>
                <div className="btn_area">
                    <Button
                        variant='outlined'
                        color='red'
                        style={{"float": "left", "marginTop":"2%", "marginLeft":"2.5%"}}
                        onClick={clickHandler}
                    > 취소 </Button>
                    <Button variant="outlined" onClick={enterSubmit} style={{"marginTop":"2%", "float": "right", "marginRight": "3%"}}>
                        제출
                    </Button>
                </div>
            </div>
        )
}

export default BoardRegister;

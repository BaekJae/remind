import React, {useEffect, useState} from 'react';
import {useNavigate, useSearchParams} from "react-router-dom";
import { call } from "./service/ApiService";
import BoardHeader from "./BoardHeader";
import {Button, TextField} from "@material-ui/core";
import {Editor} from "@toast-ui/react-editor";

const BoardUpdate = (props) => {
    const navigate = useNavigate();
    const editorRef1 = React.createRef();
    const [boardTitle, setBoardTitle] = useState("");
    const [params, setParams] = useSearchParams();
    const [noteContent, setNoteContent] = useState("");

    useEffect(() => {
        const token = localStorage.getItem("ACCESS_TOKEN");
        call("/board/update/" + params.get("id"), "GET", null, token)
            .then((response) => {
                editorRef1.current.getInstance().setHTML(response.noteContent);
                setBoardTitle(response.noteTitle);
            })
            .catch(() => {
                alert("board GET Cancel");
            })
    },[]);

    const changeHandler = (e)=>{
        setBoardTitle(e.target.value);
    }

    const clickHandler = (e) => {
        navigate(-1);
    }

    const enterSubmit = () => {
        const token = localStorage.getItem("ACCESS_TOKEN");
        const boardContent = editorRef1.current.getInstance().getHTML();

        let boardWriting = new Object();
        boardWriting.noteTitle = boardTitle;
        boardWriting.noteContent = boardContent;
        call("/board/update/" + params.get("id"), "PUT", boardWriting, "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJraXM4OTU3NiIsInJvbGVzIjoiUk9MRV9VU0VSIiwiaWF0IjoxNjQ1OTMwNzU5LCJleHAiOjE2NDU5MzI1NTl9.AbtAgy0OHRXykA8kxwtcg0lB4RNj26qIQvMXODcrm3M")
            .then(() => {
                alert("board Modify Success");
                navigate(-1);
            })
            .catch(() => {
                alert("board Modify Cancel");
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
                value={boardTitle}
            />
            <h5 style={{"textAlign": "left", "paddingLeft": "2.5%"}}>내용</h5>
            <div style={{"textAlign": "justify", "width": "95%", "paddingLeft": "2.5%"}}>
                <Editor
                    id="noteContentEditor"
                    usageStatistics={false}
                    ref={editorRef1}
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

export default BoardUpdate;

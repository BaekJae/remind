import React, { useEffect, useState } from 'react';
import { call } from './service/ApiService';
import { useLinkClickHandler, useParams } from 'react-router-dom';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Button } from '@material-ui/core';
import BoardComment from './BoardComment';
import { Viewer } from '@toast-ui/react-editor';

const BoardDetail = (props) => {
    const [boardDetail, setBoardDetail] = useState({});
    const params = useParams();

    const clickHandler = (e) => {
        window.location.href="/board";
    }

    useEffect(() => {
        const token = localStorage.getItem("ACCESS_TOKEN");
        call("/board/detail/"+ params.id, "GET", null, token)
        .then((response) => setBoardDetail(response));
    }, [])

    return(
        <div className = "DetailArea" style={{"width": "80%", "margin": "auto"}}>
            <div className = 'TitleArea'>
                {boardDetail.noteTitle}
            </div>
            <div className = "ContentArea">
                <div dangerouslySetInnerHTML={{__html:boardDetail.noteContent}}/>
                <Viewer initialValue={boardDetail.noteContent}/>
            </div>
            <div className = "detailBtnArea">
                <Button variant='outlined' onClick={clickHandler}>
                    메인으로 가기
                </Button>
            </div>
            <BoardComment noteId={params.id}/>
        </div>
    )
}

export default BoardDetail;
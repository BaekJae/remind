import React, { useEffect, useState } from 'react';
import { call } from './service/ApiService';
import {  useParams } from 'react-router-dom';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import { Button } from '@material-ui/core';
import BoardComment from './BoardComment';
import { Viewer } from '@toast-ui/react-editor';
import BoardHeader from "./BoardHeader";
import {Link} from 'react-router-dom';

const BoardDetail = (props) => {
    const [boardDetail, setBoardDetail] = useState({});
    const [isUpdated, setIsUpdated] = useState(false);
    const params = useParams();

    useEffect(() => {
        const token = localStorage.getItem("ACCESS_TOKEN");
        call("/board/detail/"+ params.id, "GET", null, token)
        .then((response) => setBoardDetail(response));
    }, [])

    useEffect(() => {
        const token = localStorage.getItem("ACCESS_TOKEN");
        call("/board/detail/"+ params.id, "GET", null, token)
            .then((response) => setBoardDetail(response));
    }, [isUpdated])

    const clickHandler = (e) => {
        const token = localStorage.getItem("ACCESS_TOKEN");
        call("/board/recommend/"+params.id,"GET",null,token)
            .then((response) => {
                alert("추천이 완료되었습니다.");
                setIsUpdated(!isUpdated);
            })
    }
    return(
        <div>
            <BoardHeader/>
            <div className = "DetailArea" style={{"width": "80%", "margin": "auto"}}>
                <div className = 'HeadingArea' style={{"marginBottom":"1%"}}>
                    <div className = 'TitleArea'>
                        <h3 style={{"textAlign":"left","paddingLeft":"10%"}}>제목</h3>
                        <div className='SubInfoArea' style={{"fontSize":"0.5em", "textAlign":"right", "paddingRight":"9%"}}>
                            작성일자 : {boardDetail.noteWritedDate}&nbsp;&nbsp;{boardDetail.noteWritedTime}&nbsp;&nbsp;
                            |&nbsp;&nbsp;조회수 : {boardDetail.noteViews}&nbsp;&nbsp;
                            |&nbsp;&nbsp;추천수 : {boardDetail.notePrefer}&nbsp;&nbsp;
                        </div>
                        <hr style={{"width":"80%"}}/>
                        {boardDetail.noteTitle}
                    </div>
                </div>
                <div className = "ContentArea">
                    <h3 style={{"textAlign":"left", "paddingLeft":"10%"}}>내용</h3>
                    <hr style={{"width":"80%"}}/>
                    <div dangerouslySetInnerHTML={{__html:boardDetail.noteContent}}/>
                    <Viewer initialValue={boardDetail.noteContent}/>
                </div>
                <div className = "detailBtnArea" style={{"width":"90%", "height":"5vh","marginTop":"3%"}}>
                    <Link to={"/board/list?boardId="+boardDetail.boardId}>
                        <Button variant='outlined' size="small" style={{"float":"right"}}>
                            메인으로 가기
                        </Button>
                    </Link>
                    <div className="preferBtn" style={{"float":"left", "marginLeft":"10%"}}>
                        <Button
                            variant='outlined'
                            size='small'
                            onClick={clickHandler}
                        > 추천하기</Button>
                    </div>


                </div>
                <hr style={{"width":"90%", "margin":"auto"}}/>
                <BoardComment noteId={params.id}/>
            </div>
        </div>

    )
}

export default BoardDetail;

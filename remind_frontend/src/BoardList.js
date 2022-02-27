import { Button } from '@material-ui/core';
import React, {useEffect,useState} from 'react';
import {Link, useNavigate, useParams, useSearchParams} from 'react-router-dom';
import BoardCards from './BoardCard.js';
import BoardHeader from './BoardHeader.js';

const BoardList = (props) => {
    const [boardId, setBoardId] = useState(1);
    const [params,setParams] = useSearchParams();

    return(
        <div className="BoardLayout">
            <BoardHeader boardId={params.get('boardId')}/>
            <div className="Boardlist" style={{"width": "80%", "margin":"auto", "height": "50vh"}}>
                <BoardCards boardId = {params.get('boardId')}/>
                <div className='BoardBottom' style={{"marginTop":"10%"}}>
                    <Link to = "/board">
                        <Button
                            variant='outlined'
                            style={{"float": "left"}}
                        > 게시판 선택 </Button>
                    </Link>
                    <Link to = {"/board/register?boardId=" + params.get('boardId') + "&isEditSection=true"}>
                        <Button
                            variant='outlined'
                            style={{"float": "right"}}
                        > 글쓰기 </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default BoardList;

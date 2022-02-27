import React, {useState, useEffect} from 'react';
import StudyHeader from "./StudyHeader";
import CommentHeader from "./CommentHeader";
import WriteHeader from "./WriteHeader";
import {useSearchParams} from "react-router-dom";

function BoardHeader(props){
    const [boardId, setBoardId] = useState(props.boardId)
    const [params, setParams] = useSearchParams();

    useEffect(() => {
        console.log(props.boardId);
        setBoardId(params.get("boardId"));
        console.log("effect set boardId: "+boardId);
    },[params])

    if(params.get("boardId") && params.get("boardId")) {
        if (params.get("boardId") == 1) {
            if(params.get("isEditSection")){
                return <WriteHeader/>
            }
            else{
                return <StudyHeader/>;
            }

        } else {
            if(params.get("isEditSection")){
                return <WriteHeader/>
            }
            else{
                return <CommentHeader/>;
            }
        }
    }
    else{
        return <WriteHeader/>
    }
}

export default BoardHeader;

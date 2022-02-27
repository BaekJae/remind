import React, {useEffect} from 'react';
import {Routes, Route, useSearchParams} from 'react-router-dom';
import BoardList from './BoardList';
import BoardDetail from './BoardDetail';
import BoardRegister from './BoardRegister';
import BoardSelectPage from "./BoardSelectPage";

function Board(){

    return(
        <Routes>
            <Route exact path="/" element={<BoardSelectPage/>}/>
            <Route path="/list" element={<BoardList/>}/>
            <Route path="/detail/:id" element={<BoardDetail/>}/>
            <Route path="/register" element={<BoardRegister/>}/>
        </Routes>
        )
    }

export default Board;

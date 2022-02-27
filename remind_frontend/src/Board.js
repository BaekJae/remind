import React, {useEffect} from 'react';
import {Routes, Route, useSearchParams} from 'react-router-dom';
import BoardList from './BoardList';
import BoardDetail from './BoardDetail';
import BoardRegister from './BoardRegister';
import BoardSelectPage from "./BoardSelectPage";
import BoardUpdate from "./BoardUpdate";

function Board(){

    return(
        <Routes>
            <Route exact path="/" element={<BoardSelectPage/>}/>
            <Route path="/list" element={<BoardList/>}/>
            <Route path="/detail/:id" element={<BoardDetail/>}/>
            <Route path="/register" element={<BoardRegister/>}/>
            <Route path="/update" element={<BoardUpdate/>}/>
        </Routes>
        )
    }

export default Board;

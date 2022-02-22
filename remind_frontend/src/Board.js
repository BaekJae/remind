import React from 'react';
import {Routes, Route} from 'react-router-dom';
import BoardList from './BoardList';
import BoardDetail from './BoardDetail';
import BoardRegister from './BoardRegister';

function Board(){
    return(
        <Routes>
            <Route exact path="/" element={<BoardList/>}/>
            <Route path="/detail/:id" element={<BoardDetail/>}/>
            <Route path="/register" element={<BoardRegister/>}/>
        </Routes>
        )
    }

export default Board;
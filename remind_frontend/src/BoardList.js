import { Button } from '@material-ui/core';
import React from 'react';
import BoardCards from './BoardCard.js';
import { call } from './service/ApiService.js';
import Pagination from 'react-js-pagination';

class BoardList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            totalCount: 0
        }
    }

    componentDidMount(){
        const token = localStorage.getItem("ACCESS_TOKEN");
        call("/board/count", "GET", null, token)
        .then((response) => {
            this.setState({totalCount: response});
        })
    }

    render(){
        console.log("BoardList in");
        return(
            <div className="Boardlist">
                <BoardCards/>
                <div className='BoardBottom'>
                <Button
                    variant='outlined'
                    style={{"float": "right"}}
                > 글쓰기 </Button>
                </div>
            </div>
            
        )
    }
}


export default BoardList;
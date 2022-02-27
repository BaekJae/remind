import * as React from 'react';
import {Card} from '@material-ui/core';
import {CardContent} from '@material-ui/core';
import {CardMedia} from '@material-ui/core';
import {Typography} from '@material-ui/core';
import { CardActionArea } from '@material-ui/core';
import {Grid} from '@material-ui/core';
import {call} from './service/ApiService';
import FavoriteIcon from '@material-ui/icons/Favorite';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Pagination from 'react-js-pagination';
import './pagination.css'
import {useSearchParams} from "react-router-dom";

class BoardCards extends React.Component{
    constructor(props){
        super(props);
        this.state = {items : props.items, pageNum:1, totalCount:0, boardId: props.boardId};
    }

    componentDidMount(){
        const token = localStorage.getItem("ACCESS_TOKEN");
        console.log("Component Didmount");
        call("/board/count/"+this.state.boardId, "GET", null, token)
            .then((count) => {
                this.setState({totalCount:count});
            })
    }

    componentDidUpdate(){
        const token = localStorage.getItem("ACCESS_TOKEN");
        call("/board/list?pageNum="+this.state.pageNum+"&boardId="+this.state.boardId, "GET", null, token)
        .then((response) => {
            if(this.state.items == undefined || response[0].noteId !== this.state.items[0].noteId){
                this.setState({items: response});
            }
        });
    }

    onclickHandler = (e) => {
        window.location.href = "/board/detail/" + e.target.getAttribute("value");
    }

    handlePageChange = (page) => {
        this.setState({pageNum: page});
    }

    render(){
        return(
            <div style={{"height": "50vh"}}>
            <Grid container spacing={1} style={{"height": "60vh", "marginTop": "1%"}}>
                {this.state.items && this.state.items.map((item) => (
                    <Grid item sm={3} xs={3} key={item.noteId} style={{"width":"25%"}}>
                        <Card>
                            <CardActionArea>
                                <CardMedia
                                    component="img"
                                    height="100"
                                    image="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
                                    alt="shiba dog"
                                    onClick = {this.onclickHandler}
                                    value = {item.noteId}
                                />
                            </CardActionArea>
                            <CardContent style={{"overflowWrap":"break-word", "height":"30px", "overflow":"hidden"}}>
                                <Typography gutterBottom variant="subtitle2" component="div" style={{"textAlign":"left"}}>
                                    {item.noteTitle}
                                </Typography>
                                <Typography variant="body2" color="textSecondary" style={{"textAlign":"left", "fontSize": "0.8em"}}>
                                    {item.noteContent.replace(/(<([^>]+)>)/ig,"")}
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <div className="etcSection" >
                                    <div className="writerSection" style={{"float": "left", "fontSize": "0.5em"}}>
                                        by {item.noteWriter}
                                    </div>
                                    <div className="numberSection" style={{"float": "right", "fontSize": "0.5em"}}>
                                        <FavoriteIcon style={{"fontSize": "1.5em", "color": "red"}}/>
                                        &nbsp;&nbsp;
                                        <span style={{"marginBottom":"65px"}}>
                                        {item.notePrefer}
                                        </span>
                                        &nbsp;&nbsp;
                                        <VisibilityIcon style={{"fontSize": "1.5em"}}/>
                                        &nbsp;&nbsp;
                                        <span>
                                        {item.noteViews}
                                        </span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}

            </Grid>
            <Pagination
            activePage={this.state.pageNum}
            itemsCountPerPage={8}
            totalItemsCount={this.state.totalCount}
            pageRangeDisplayed={5}
            prevPageText={"<"}
            nextPageText={">"}
            onChange={this.handlePageChange}
            />
            </div>
        )
    }
}

export default BoardCards;

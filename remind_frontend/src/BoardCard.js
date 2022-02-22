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

class BoardCards extends React.Component{
    constructor(props){
        super(props);
        this.state = {items : props.items, pageNum:1, totalCount:0 };
    }

    componentDidMount(){
        const token = localStorage.getItem("ACCESS_TOKEN");
        console.log("Component Didmount");
        call("/board/count", "GET", null, token)
            .then((count) => {
                this.setState({totalCount:count});
            })

    }

    componentDidUpdate(){
        const token = localStorage.getItem("ACCESS_TOKEN");
        call("/board/list?pageNum="+this.state.pageNum, "GET", null, token)
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
            <div>
            <Grid container spacing={1}>
                {this.state.items && this.state.items.map((item) => (
                    <Grid item xs={3} key={item.noteId}>
                        <Card>
                            <CardActionArea >
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image="https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E"
                                    alt="shiba dog"
                                    onClick = {this.onclickHandler}
                                    value = {item.noteId}
                                />
                            </CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {item.noteTitle}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {item.noteContent.replace(/(<([^>]+)>)/ig,"")}
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <div className="etcSection" >
                                    <div className="writerSection" style={{"float": "left"}}>
                                        by {item.noteWriter}
                                    </div>
                                    <div className="numberSection" style={{"float": "right"}}>
                                        <FavoriteIcon fontSize="small"/>
                                        &nbsp;&nbsp;
                                        <span style={{"marginBottom":"65px"}}>
                                        {item.notePrefer}
                                        </span>
                                        &nbsp;&nbsp;
                                        <VisibilityIcon fontSize="small"/>
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

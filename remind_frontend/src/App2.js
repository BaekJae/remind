import React, { Component } from 'react'
import Header from './Header'
import Calendar from './Calendar'
import moment from 'moment'
import './style/RCA.css'



export default class App2 extends Component {


    state = {
        calendarYM: moment(),
        today: moment(),
        selected: moment().format("YYYY-MM-DD")
    }

    static defaultProps = {
        clickFn: () => { }
    }

    moveMonth = (month) => {
        this.setState({
            calendarYM: this.state.calendarYM.add(month, 'M')
        })
    }

    changeSelected = (clickedDate) => {

        if (moment(clickedDate).isSame(this.state.selected, 'day')) {
            this.props.clickFn(clickedDate);
            return;
        }

        this.setState({
            selected: clickedDate
        })

        this.props.clickFn(clickedDate)

        if (moment(clickedDate).isBefore(this.state.calendarYM, 'month')) {
            this.moveMonth(-1)
        } else if (moment(clickedDate).isAfter(this.state.calendarYM, 'month')) {
            this.moveMonth(1)
        }
    }


    render() {
        return (
            <div className="test-layout">

                <div className="RCA-app-container">

                    <Header calendarYM={this.state.calendarYM.format("MM월")}
                            today={this.state.today.format("YYYY.MM.DD")}
                            moveMonth={this.moveMonth}
                    />

                    <Calendar YM={this.state.calendarYM.format("YYYY.MM.DD")}
                              selected={this.state.selected}
                              changeSelected={this.changeSelected}
                    />
                </div>


            </div>



        );
    }
}


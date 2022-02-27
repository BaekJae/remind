import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (

            <div className="RCA-header-container">
                <h2 className="RCA-header-calendarYM RCA-header-middle">
                    {this.props.calendarYM}
                </h2>
                <h3 className="RCA-header-today RCA-header-middle">
                    {this.props.today}
                </h3>
                <ul className="RCA-header-buttons RCA-header-middle">
                    <li>
                        <i className="move-button left-img icon" onClick={() => { this.props.moveMonth(-1) }}>
                        </i>
                    </li>
                    <li>
                        <i className="move-button right-img icon" onClick={() => { this.props.moveMonth(1) }}>

                        </i>
                    </li>
                </ul>
            </div>
        )
    }
}

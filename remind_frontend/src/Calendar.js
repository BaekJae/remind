import React, { Component } from 'react'
import moment from 'moment';

class DateHeader extends Component {

    dateToArray = (dates) => {
        if (Array.isArray(dates)) {
            return dates
        } else if (typeof dates === "string") {
            return dates.split(',')
        } else {
            return ["일", "월", "화", "수", "목", "금", "토"]
        }
    }

    mapArrayToDate = (dateArray) => {
        try {
            if (dateArray.length !== 7) {
                console.log(new Error("dates props must be had 7 date"))
                dateArray = ["일", "월", "화", "수", "목", "금", "토"]
            }

            return dateArray.map((date, index) => {
                const className = () => {
                    let className = "RCA-calendar-date-component";
                    if (index === 0) {
                        return className + " date-sun"
                    } else if (index === 6) {
                        return className + " date-sat"
                    } else {
                        return className + " date-weekday"
                    }
                }
                return (
                    <div className={className()} key={"RCA-header-" + date}>
                        {date}
                    </div>
                )
            })
        } catch {
            throw new Error("date must be string or component")
        }
    }

    render() {
        return (
            <div className="RCA-calendar-date-header">
                {this.mapArrayToDate(this.dateToArray(this.props.dates))}
            </div>
        )
    }
}

class Week extends Component {

    state = {}

    Days = (firstDayFormat, weekIndex) => {
        const _days = [];

        for (let i = 0; i < 7; i++) {

            const Day = moment(firstDayFormat).add(i, 'd');
            _days.push({
                yearMonthDayFormat: Day.format("YYYY-MM-DD"),
                getDay: Day.format('D'),
                isHolyDay: false,
                weekIndex
            });
        }

        return _days;
    }

    mapDaysToComponents = (Days, calendarMonthYear, selectedDayFormat, fn = () => { }) => {

        const thisMonth = moment(calendarMonthYear);

        return Days.map((dayInfo, i) => {

            let className = "date-weekday-label";

            if (!thisMonth.isSame(dayInfo.yearMonthDayFormat, 'month')) {
                className = "date-notThisMonth";
            } else if (i === 0) {
                className = "date-sun"
            } else if (i === 6) {
                className = "date-sat"
            }

            if (moment(dayInfo.yearMonthDayFormat).isSame(selectedDayFormat, 'day')) {
                className = "selected"
            }

            return (
                <div className={"RCA-calendar-day " + className} key={`RCA-${dayInfo.weekIndex}-${i}-day`} onClick={() => fn(dayInfo.yearMonthDayFormat)}>
                    <label className="RCA-calendar-day-label">
                        {dayInfo.getDay}
                    </label>
                </div>
            )
        })
    }



    render() {
        return (
            <div className="RCA-calendar-week">
                {this.mapDaysToComponents(this.Days(this.props.firstDayOfThisWeekformat, this.props.weekIndex),
                    this.props.ymOfThisCalendar,
                    this.props.selected,
                    this.props.fn
                )}
            </div>
        )
    }
}

export default class Calendar extends Component {

    Weeks = (monthYear, selected, clickFn) => {
        const firstDayOfMonth = moment(monthYear).startOf('month');
        const firstDateOfMonth = firstDayOfMonth.get('d');

        const firstDayOfWeek = firstDayOfMonth.clone().add(-firstDateOfMonth, 'd');

        const _Weeks = [];

        for (let i = 0; i < 6; i++) {
            _Weeks.push((
                <Week key={`RCA-calendar-week-${i}`}
                      weekIndex={i}
                      ymOfThisCalendar={firstDayOfMonth.format("YYYY-MM")}
                      firstDayOfThisWeekformat={firstDayOfWeek.clone().add(i * 7, 'd').format("YYYY-MM-DD")}
                      selected={selected}
                      fn={clickFn}
                />
            ))
        }
        return _Weeks
    }


    render() {
        return (
            <div className="RCA-calendar-container">
                <DateHeader dates={"Sun, Mon, Tue, Wed, Thu, Fri, Sat"} />
                {this.Weeks(this.props.YM, this.props.selected, this.props.changeSelected)}
            </div>
        )
    }
}


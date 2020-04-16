import React from 'react';
import { connect } from 'react-redux';
import { setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
    state = {
        focused: null
    };
    onDatesChange = ({ startDate, endDate }) => {
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (focused) => {
        this.setState(() => ({ focused }));
    };
    render() {
        return (
            <div className="content-container">
                <div className="input-group">
                    <div className = "input-group__item">
                        <input type ="text" className = "text-input" placeholder= "Search Expenses" value={this.props.filter.text} onChange={(e) => {
                            this.props.dispatch(setFilterText(e.target.value));
                        }} />
                    </div>
                    <div className="input-group__item">
                        <select className="select" value={this.props.filter.sortBy} onChange={(e) => {
                            if (e.target.value == "date")
                                this.props.dispatch(sortByDate(e.target.value));
                            else
                                this.props.dispatch(sortByAmount(e.target.value));
                        }}>
                            <option value="date">Date</option>
                            <option value="amount">Amount</option>
                        </select>
                    </div>
                    <div className="input-group__item"><DateRangePicker
                        startDate={this.props.filter.startDate}
                        endDate={this.props.filter.endDate}
                        onDatesChange={this.onDatesChange}
                        focusedInput={this.state.focused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                        showClearDates={true} /></div>
                </div>
            </div>
        )

    }
}
const mapStateToProps = (state) => {
    return {
        filter: state.filters
    };
};
export default connect(mapStateToProps)(ExpenseListFilters);
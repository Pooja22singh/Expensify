import React from 'react';
import { connect } from 'react-redux';
import { setFilterText, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
    state = {
        focused: null
    };
    onDatesChange = ({ startDate, endDate })=>{
     this.props.dispatch(setStartDate(startDate));
     this.props.dispatch(setEndDate(endDate));
    };
    onFocusChange = (focused)=>{
    this.setState(()=>({focused}));
    };
    render() {
        return (
            <div>
                <input type="text" value={this.props.filter.text} onChange={(e) => {
                    props.dispatch(setFilterText(e.target.value));
                }} />
                <select value={this.props.filter.sortBy} onChange={(e) => {
                    if (e.target.value == "date")
                        props.dispatch(sortByDate(e.target.value));
                    else
                        props.dispatch(sortByAmount(e.target.value));

                }}>
                    <option value="date">Date</option>
                    <option value="amount">Amount</option>
                </select>
                <DateRangePicker
                  startDate={this.props.filter.startDate}
                  endDate={this.props.filter.endDate} 
                  onDatesChange={this.onDatesChange}  
                  focusedInput={this.state.focused} 
                  onFocusChange ={this.onFocusChange}
                  numberOfMonths = {1} 
                  isOutsideRange ={ () => false }
                  showClearDates = { true }/>
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
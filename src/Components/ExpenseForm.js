import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';
const now = moment();
console.log(now.format());
export default class ExpenseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            amount: props.expense ? props.expense.amount : "",
            createDate: props.expense ? moment(props.expense.createDate) : moment(),
            focused: false,
            error: ""
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({ note }));
    }
    onAmountChange = (e) => {
        const amount = e.target.value;
        if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/))
            this.setState(() => ({ amount }));
    }
    onDateChange = (createDate) => {
        if (createDate)
            this.setState(() => ({ createDate }));
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ focused }));
    }
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount)
            this.setState(() => ({ error: "Please provide description and amount" }));
        else {
            this.setState(() => ({ error: "" }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                note: this.state.note,
                createDate: this.state.createDate.valueOf(),
            });
        }
    }
    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <p className="form-error">{this.state.error}</p>}
                <input className="text-input" type="text" value={this.state.description} onChange={this.onDescriptionChange} autoFocus placeholder="Description" />
                <input className="text-input" type="number" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />
                <SingleDatePicker
                    date={this.state.createDate}
                    onDateChange={this.onDateChange}
                    focused={this.state.focused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false} />
                <textarea className="textarea" value={this.state.note} onChange={this.onNoteChange} placeholder="Note"></textarea>
                <div>
                    <button className="button">Save Expense}</button>
                </div>
            </form>
        );
    }
}
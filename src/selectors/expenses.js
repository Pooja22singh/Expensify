import moment from 'moment';
/** Expenses Selectors to list down expenses based on some filters */

//based on the filter display the objects of the expenses
export default (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        //since we have store createDate in timestamp ie milliseconds so we need a proper date 
        //to be used in isSameorBefore Method
        const createMoment= moment(expense.createDate);
        const startDateMatch = startDate ? startDate.isSameOrBefore(moment(createMoment),'day'):true;
        const endDateMatch = endDate ? endDate.isSameOrAfter(moment(createMoment),'day'):true;
        const textMatch = expense.description.toLowerCase().includes(text.toLowerCase())
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date')
            return a.createDate < b.createDate ? 1 : -1;
        else {
            return a.amount < b.amount ? 1 : -1;
        }
    });
}

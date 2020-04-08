import uuid from "uuid";
/** Expenses action generators*/

//Add Expense
export const addExpense = ({ description = "", note = "", amount = 0, createDate = 0 } = {}) => ({
    type: "ADD_EXPENSE",
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createDate
    }
}
);
//Remove Expense
export const removeExpense = ({ id } = {}) => ({
    type: "REMOVE_EXPENSE",
    id
});
//Edit Epense
export const editExpense = (id, updates) => ({
    type: "EDIT_EXPENSE",
    id,
    updates
});

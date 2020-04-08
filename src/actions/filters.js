/** Filter Action generators */

/* Filter Text */
export const setFilterText = (text) => ({
    type: "SET_TEXT_FILTER",
    text
});

//Sort by date filter
export const sortByDate = () => ({
    type: "SORT_BY_DATE",
});

//Sort by amount filter
export const sortByAmount = () => ({
    type: "SORT_BY_AMOUNT",
});

//Set Start date
export const setStartDate = (date) => ({
    type: "SET_START_DATE",
    date
});

//Set End date
export const setEndDate = (date) => ({
    type: "SET_END_DATE",
    date
});

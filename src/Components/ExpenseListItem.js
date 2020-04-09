import React from 'react';
import {Link} from 'react-router-dom';
import moment from 'moment';
export default ( {id, description, amount, createDate} ) => (
    <div>
        <h3><Link to={`/edit/${ id }`}>{description}</Link></h3>
        <p>Amount : {amount}, Created At : {moment(createDate).format("DD MMM YYYY")}</p>
    </div>
)
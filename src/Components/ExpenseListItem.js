import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
export default ({ id, description, amount, createDate }) => (
    <Link className="list-item" to={`/edit/${id}`}>
        <div>
            <h3 className="list-item-title">{description}</h3>
            <span className="list-item-sub-title"> {moment(createDate).format("DD MMM YYYY")}</span>
        </div>
            <h3 className="list-item-data"> {amount}</h3>
    </Link>
);
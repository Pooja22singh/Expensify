import React from 'react';
import {Link} from 'react-router-dom';
const NotFoundPage = () => (
    <p>Error 404<Link to="/">Go Home</Link></p>
);
export default NotFoundPage;
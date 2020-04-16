import React from 'react';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';
import { Link } from 'react-router-dom';
const Header = (props) => (
    <div>
        <header className="header">
            <div className="content-container">
                <div className="header-container">
                    <Link className="header__title" to="/dashboard"><h1>Expensify</h1></Link>
                    <button onClick={props.startLogout}>Logout</button>
                </div>
            </div>
        </header>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogout: () => dispatch(startLogout())
});
export default connect(undefined, mapDispatchToProps)(Header);


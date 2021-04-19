import React, { Fragment } from 'react';

import './styles.css';

const Header = () => {
    return (
        <Fragment>
            <div className="header">
                <a href="#default" className="logo">Todo List</a>
                <div className="header-right">
                </div>
            </div>
        </Fragment>
    )
}


export default Header;
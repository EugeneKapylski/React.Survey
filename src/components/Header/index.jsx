import React from 'react';
import HeaderTitle from './../HeaderTitle';
import './header.scss';

const Header = () => {
    return (
        <div className="header">
            <div className="title-container">
                <HeaderTitle />
            </div>
        </div>
    );
};

Header.displayName = 'Header';

export default Header;
import React from 'react';
import HeaderTitle from './../HeaderTitle';
import './header.scss';

export default () => {
    return (
        <div className="header">
            <div className="title-container">
                <HeaderTitle />
            </div>
        </div>
    );
};
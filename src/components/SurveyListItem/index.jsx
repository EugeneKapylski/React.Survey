import React from 'react';
import { Link } from 'react-router-dom';

import './survey-list-item.scss'

const SurveyListItem = (props) => {
    return (
        <li className="survey-list-item list-group-item">
            <Link to={`/surveys/${props.survey.id}`}>
                {props.survey.title}
            </Link>
        </li>
    );
};

SurveyListItem.disaplyname = 'SurveyListItem';

export default SurveyListItem;
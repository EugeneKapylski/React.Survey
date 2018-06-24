import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import SurveyListItem from './../SurveyListItem';

import './surveys-index.scss';

const renderSurveys = (surveys) => _.map(surveys, survey => (<SurveyListItem key={survey.id} survey={survey} />));

const SurveysIndex = ({ surveys }) => (
    <div className="survey-index">
        <div className="row survey-info-title">
            <div className="col-sm-10">
                <h1 className="surveys-list-header">Surveys List</h1>
            </div>
            <div className="col-sm-2 add-new-survey">
                <Link className="btn btn-primary btn-block" to="/surveys/add">
                    Add a new Survey
                        </Link>
            </div>
        </div>
        <ul className="list-group">
            {renderSurveys(surveys)}
        </ul>
    </div>
);

export default SurveysIndex;
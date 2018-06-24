import React from 'react';
import { Link } from 'react-router-dom';
import SurveyStatistic from './../SurveyStatistic';
import surveyType from './../../constants/prop-types/surveyType';

import './survey-view.scss';

const SurveyViewForm = ({ survey, onDeleteClick }) => {
    if (!survey) {
        return <div>Loading...</div>;
    }

    return (
        <div className="survey-view">
            <div className="back-to-surveys-list">
                <Link to="/">Back To Surveys List</Link>
            </div>
            <div className="row survey-info-title">
                <div className="col-sm-10">
                    <h1 className="surveys-list-header">{survey.title}</h1>
                </div>
                <div className="col-sm-2 add-new-survey">
                    <button
                        className="btn btn-danger pull-xs-right"
                        onClick={onDeleteClick.bind(this)}
                    >
                        Delete Survey
                    </button>
                </div>
            </div>
            <SurveyStatistic surveyId={survey.id} />
        </div>
    );
}

SurveyViewForm.propTypes = {
    survey: surveyType.isRequired
};

export default SurveyViewForm;
import React from 'react';
import UserAnswersByQuestions from './../UserAnswersByQuestions';

const SurveyStatistic = (props) => {
    return (
        <div className="survey-statistic">
            <UserAnswersByQuestions surveyId={props.surveyId} />
        </div>
    );
};

SurveyStatistic.displayName = 'SurveyStatistic';

export default SurveyStatistic;
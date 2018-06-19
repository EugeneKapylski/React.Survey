import React from 'react';
import UserAnswersByQuestions from './../UserAnswersByQuestions';

const SurveyStatistic = ({surveyId}) => {
    return (
        <div className="survey-statistic">
            <UserAnswersByQuestions surveyId={surveyId} />
        </div>
    );
};

SurveyStatistic.displayName = 'SurveyStatistic';

export default SurveyStatistic;
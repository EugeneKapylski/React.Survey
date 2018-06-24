import React from 'react';
import UserAnswersByQuestionsContainer from './../../containers/UserAnswersByQuestionsContainer';

const SurveyStatistic = ({ surveyId }) => (
    <div className="survey-statistic">
        <UserAnswersByQuestionsContainer surveyId={surveyId} />
    </div>
);

SurveyStatistic.displayName = 'SurveyStatistic';

export default SurveyStatistic;
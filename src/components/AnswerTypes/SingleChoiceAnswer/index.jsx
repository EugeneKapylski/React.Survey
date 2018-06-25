import React from 'react';
import ChoiceAnswer from '../ChoiceAnswer';
import choiceAnswerSettingsType from '../../../constants/prop-types/choiceAnswerSettingsType';

const SingleChoiceAnswer = props => (
    <ChoiceAnswer
        inputType="radio"
        className="radio"
        {...props}
    />
);

SingleChoiceAnswer.propTypes = {
    answerSettings: choiceAnswerSettingsType.isRequired
}

SingleChoiceAnswer.displayName = 'SingleChoiceAnswer';

export default SingleChoiceAnswer;
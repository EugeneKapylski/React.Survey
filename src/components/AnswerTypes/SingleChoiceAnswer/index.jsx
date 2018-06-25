import React from 'react';
import ChoiceAnswer from '../ChoiceAnswer';
import choiceAnswerSettingsPropType from 'Constants/prop-types/choiceAnswerSettingsPropType';

const SingleChoiceAnswer = props => (
    <ChoiceAnswer
        inputType="radio"
        className="radio"
        {...props}
    />
);

SingleChoiceAnswer.propTypes = {
    answerSettings: choiceAnswerSettingsPropType.isRequired
}

SingleChoiceAnswer.displayName = 'SingleChoiceAnswer';

export default SingleChoiceAnswer;
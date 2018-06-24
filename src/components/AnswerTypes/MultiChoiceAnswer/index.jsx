import React from 'react';
import ChoiceAnswer from './../ChoiceAnswer';
import choiceAnswerSettingsType from './../../../constants/prop-types/choiceAnswerSettingsType';

const MultiChoiceAnswer = props => (
    <ChoiceAnswer
        inputType="checkbox"
        className="checkbox"
        {...props}
    />
);

MultiChoiceAnswer.propTypes = {
    answerSettings: choiceAnswerSettingsType.isRequired
}

MultiChoiceAnswer.displayName = 'MultiChoiceAnswer';

export default MultiChoiceAnswer;
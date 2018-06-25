import React from 'react';
import ChoiceAnswer from '../ChoiceAnswer';
import choiceAnswerSettingsPropType from 'Constants/prop-types/choiceAnswerSettingsPropType';

const MultiChoiceAnswer = props => (
    <ChoiceAnswer
        inputType="checkbox"
        className="checkbox"
        {...props}
    />
);

MultiChoiceAnswer.propTypes = {
    answerSettings: choiceAnswerSettingsPropType.isRequired
}

MultiChoiceAnswer.displayName = 'MultiChoiceAnswer';

export default MultiChoiceAnswer;
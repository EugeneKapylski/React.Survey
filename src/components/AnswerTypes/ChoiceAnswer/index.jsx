import React from 'react';
import { string } from 'prop-types';
import choiceAnswerSettingsPropType from 'Constants/prop-types/choiceAnswerSettingsPropType';

const ChoiceAnswer = ({
    answerSettings,
    className = 'checkbox',
    inputType = 'checkbox'
}) => {

    const disabled = answerSettings.isReadonly ? { 'disabled': 'disabled' } : {};

    return answerSettings.options.map(option => (
            <div className={className} key={option.value}>
                <label>
                    <input
                        type={inputType}
                        value={option.value}
                        name={answerSettings.groupName}
                        checked={option.isSelected}
                        {...disabled}
                    />{option.value}
                </label>
            </div>
        )
    );
}

ChoiceAnswer.propTypes = {
    answerSettings: choiceAnswerSettingsPropType.isRequired,
    className: string,
    inputType: string
}

ChoiceAnswer.displayName = 'ChoiceAnswer';

export default ChoiceAnswer;
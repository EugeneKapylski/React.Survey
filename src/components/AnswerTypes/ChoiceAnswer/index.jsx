import React from 'react';
import { string } from 'prop-types';
import choiceAnswerSettingsType from '../../../constants/prop-types/choiceAnswerSettingsType';

const ChoiceAnswer = ({ answerSettings, className, inputType }) => {
    const disabled = answerSettings.isReadonly ? { 'disabled': 'disabled' } : {};

    return answerSettings.options.map(option => {
        return (
            <div className={className} key={option.value}>
                <label>
                    <input
                        type={inputType}
                        value={option.value}
                        name={answerSettings.groupName}
                        checked={option.isSelected}
                        {...disabled} />{option.value}
                </label>
            </div>
        );
    });
}

ChoiceAnswer.defaultProps = {
    className: 'checkbox',
    inputType: 'checkbox'
};

ChoiceAnswer.propTypes = {
    answerSettings: choiceAnswerSettingsType.isRequired,
    className: string,
    inputType: string
}

ChoiceAnswer.displayName = 'ChoiceAnswer';

export default ChoiceAnswer;
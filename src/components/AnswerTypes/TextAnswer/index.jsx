import React from 'react';
import textAnswerSettingsType from './../../../constants/prop-types/textAnswerSettingsType';

const TextAnswer = ({ answerSettings }) => {
    const disabled = answerSettings.isReadonly ? { 'disabled': 'disabled' } : {};

    return (
        <input
            type="text"
            value={answerSettings.answer}
            {...disabled}
        />
    );
}

TextAnswer.propTypes = {
    answerSettings: textAnswerSettingsType.isRequired
}

TextAnswer.displayName = 'TextAnswer';

export default TextAnswer;
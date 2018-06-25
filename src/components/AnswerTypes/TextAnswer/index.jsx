import React from 'react';
import textAnswerSettingsPropType from 'Constants/prop-types/textAnswerSettingsPropType';

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
    answerSettings: textAnswerSettingsPropType.isRequired
}

TextAnswer.displayName = 'TextAnswer';

export default TextAnswer;
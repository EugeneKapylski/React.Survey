import React from 'react';

const TextAnswer = ({answerSettings}) => {
    const disabled = answerSettings.isReadonly ? {'disabled' : 'disabled'} : {};

    return (
      <input
        type="text"
        value={answerSettings.answer}
        {...disabled}
      />
    );
}

TextAnswer.displayName = 'TextAnswer';

export default TextAnswer;
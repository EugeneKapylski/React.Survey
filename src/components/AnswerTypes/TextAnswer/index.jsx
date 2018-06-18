import React from 'react';

const TextAnswer = (props) => {
    const disabled = props.answerSettings.isReadonly ? {'disabled' : 'disabled'} : {};

    return (
      <input
        type="text"
        value={props.answerSettings.answer}
        {...disabled}
      />
    );
}

TextAnswer.displayName = 'TextAnswer';

export default TextAnswer;
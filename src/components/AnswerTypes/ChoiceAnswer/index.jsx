import React from 'react';

const ChoiceAnswer = (props) => {
  const disabled = props.answerSettings.isReadonly ? {'disabled' : 'disabled'} : {};

  return props.answerSettings.options.map(option => {
    return (
      <div className={props.className} key={option.value}>
        <label>
          <input
            type={props.inputType}
            value={option.value}
            name={props.answerSettings.groupName}
            checked={option.isSelected}
            {...disabled}/>{option.value}
        </label>
      </div>
    );
  });
}

ChoiceAnswer.displayName = 'ChoiceAnswer';

export default ChoiceAnswer;
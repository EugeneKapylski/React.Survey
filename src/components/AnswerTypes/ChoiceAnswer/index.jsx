import React from 'react';

const ChoiceAnswer = ({answerSettings, className, inputType}) => {
  const disabled = answerSettings.isReadonly ? {'disabled' : 'disabled'} : {};

  return answerSettings.options.map(option => {
    return (
      <div className={className} key={option.value}>
        <label>
          <input
            type={inputType}
            value={option.value}
            name={answerSettings.groupName}
            checked={option.isSelected}
            {...disabled}/>{option.value}
        </label>
      </div>
    );
  });
}

ChoiceAnswer.displayName = 'ChoiceAnswer';

export default ChoiceAnswer;
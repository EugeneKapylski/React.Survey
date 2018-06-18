import React from 'react';
import ChoiceAnswer from './../ChoiceAnswer';

const MultiChoiceAnswer = (props) => {
  return (
    <ChoiceAnswer
      inputType="checkbox"
      className="checkbox"
      {...props}
    />
  );
}

MultiChoiceAnswer.displayName = 'MultiChoiceAnswer';

export default MultiChoiceAnswer;
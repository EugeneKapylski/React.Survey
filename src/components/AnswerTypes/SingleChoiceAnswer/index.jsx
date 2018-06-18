import React from 'react';
import ChoiceAnswer from './../ChoiceAnswer';

const SingleChoiceAnswer = (props) => {
  return (
    <ChoiceAnswer
      inputType="radio"
      className="radio"
      {...props}
    />
  );
};

SingleChoiceAnswer.displayName = 'SingleChoiceAnswer';

export default SingleChoiceAnswer;
import React from 'react';
import questionTypes from './../../constants/questionTypes';
import TextAnswer from './../AnswerTypes/TextAnswer';
import SingleChoiceAnswer from './../AnswerTypes/SingleChoiceAnswer';
import MultiChoiceAnswer from './../AnswerTypes/MultiChoiceAnswer';

const Answer = ({questionType, answerSettings}) => {
    switch(questionType) {
        case questionTypes.text:
          return <TextAnswer answerSettings={answerSettings}/>;
        case questionTypes.singleChoice:
          return <SingleChoiceAnswer answerSettings={answerSettings}/>;
        case questionTypes.multiChoice:
          return <MultiChoiceAnswer answerSettings={answerSettings}/>;
        default:
          return;
    }
};

Answer.displayName = 'Answer';

export default Answer;
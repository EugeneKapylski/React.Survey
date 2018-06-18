import React from 'react';
import questionTypes from './../../constants/questionTypes';
import TextAnswer from './../AnswerTypes/TextAnswer';
import SingleChoiceAnswer from './../AnswerTypes/SingleChoiceAnswer';
import MultiChoiceAnswer from './../AnswerTypes/MultiChoiceAnswer';

const Answer = (props) => {
    switch(props.questionType) {
        case questionTypes.text:
          return <TextAnswer answerSettings={props.answerSettings}/>;
        case questionTypes.singleChoice:
          return <SingleChoiceAnswer answerSettings={props.answerSettings}/>;
        case questionTypes.multiChoice:
          return <MultiChoiceAnswer answerSettings={props.answerSettings}/>;
        default:
          return;
    }
};

Answer.displayName = 'Answer';

export default Answer;
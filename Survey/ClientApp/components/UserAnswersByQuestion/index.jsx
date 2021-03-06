import React from 'react';
import Answer from '../Answer';
import { shape, arrayOf, number } from 'prop-types';
import questionPropType from 'Constants/prop-types/questionPropType';
import questionPassingPropType from 'Constants/prop-types/questionPassingPropType';

const UserAnswersByQuestion = (props) => (
    <div className="user-answers-by-question">
        <h3>Question # {props.questionNumber}</h3>
        <p>{props.question.title}</p>
        <div>
            <h3>Answers:</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">User</th>
                        <th scope="col">Answer</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.questionPassings.map((questionPassing, answerIndex) => {
                            const { firstName, lastName } = questionPassing.user;
                            const userFullName = `${firstName} ${lastName}`;
                            const answerSettings = JSON.parse(questionPassing.answer.answerSettings);
                            const questionPassingKey = `${props.questionNumber}-${answerIndex}`;

                            return (
                                <tr key={questionPassingKey}>
                                    <th scope="row">{answerIndex}</th>
                                    <td>{userFullName}</td>
                                    <td>
                                        <Answer
                                            questionType={props.question.questionType}
                                            answerSettings={answerSettings}
                                        />
                                    </td>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
);

UserAnswersByQuestion.protoTypes = {
    questionNumber: number.isRequired,
    question: shape(questionPropType).isRequired,
    questionPassings: arrayOf(shape(questionPassingPropType))
};

UserAnswersByQuestion.displayName = 'UserAnswersByQuestion';

export default UserAnswersByQuestion;
import React from 'react';

const UserAnswersByQuestion = (props) => {
    return (
        <div className="user-answers-by-question">
            <h3>Question # {props.questionNumber}</h3>
            <p>{props.questionTitle}</p>
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
                            props.answers.map(function (answer, answerIndex) {
                                return (
                                    <tr key={`${props.questionNumber}-${answerIndex}`}>
                                        <th scope="row">{answerIndex}</th>
                                        <td>{answer.user.lastName}</td>
                                        <td>{answer.answer.answerSettings}</td>
                                    </tr>
                                );
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

UserAnswersByQuestion.displayName = 'UserAnswersByQuestion';

export default UserAnswersByQuestion;
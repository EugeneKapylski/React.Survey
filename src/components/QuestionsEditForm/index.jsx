
import React from 'react';
import { FieldArray } from 'redux-form';
import QuestionEditForm from '../QuestionEditForm'

const renderQuestions = ({ fields, meta: { error, submitFailed } }) => {
    return (
        <div>
            <button type="button" onClick={() => fields.push({})}>Add Question</button>
            {submitFailed && error && <span>{error}</span>}
            <ul>

                {fields.map((question, index) => (
                    <li key={index}>
                        <QuestionEditForm question={question} />
                    </li>
                ))}
            </ul>
        </div>
    );
}

const QuestionsEditForm = () => {
    return (
        <FieldArray name="questions" component={renderQuestions} />
    );
};

QuestionsEditForm.displayName = 'QuestionsEditForm';

export default QuestionsEditForm;
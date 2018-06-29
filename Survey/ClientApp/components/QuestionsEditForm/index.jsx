import React from 'react';
import { FieldArray } from 'redux-form';
import QuestionEditForm from '../QuestionEditForm';
import { minCount } from 'Constants/validationRules';

const renderQuestions = ({ fields, meta: { error, submitFailed } }) => (
    <div>
        <button type="button" onClick={() => fields.push({})}>Add Question</button>
        {submitFailed && error && <span>{error}</span>}
        <ul>
            {fields.map((question, index) => (
                    <li key={index}>
                        <QuestionEditForm
                            question={question}
                            questionNumber={index + 1}
                            onDelete={() => fields.remove(index)}
                        />
                    </li>
                )
            )}
        </ul>
    </div>
);

const QuestionsEditForm = () => (
    <FieldArray
        name="questions"
        component={renderQuestions}
        validate={[minCount(1)]}
    />
);

QuestionsEditForm.displayName = 'QuestionsEditForm';

export default QuestionsEditForm;
import React from 'react';
import { FieldArray } from 'redux-form';
import InputFormField from '../FormFields/InputFormField';

const renderAnswers = ({ fields, meta: { error } }) => (
    <ul>
        <li>
            <button
                type="button"
                onClick={() => fields.push()}
            >
                Add Answer
            </button>
        </li>
        {fields.map((answer, index) => (
            <li key={index}>
                <button
                    type="button"
                    title="Remove Answer"
                    onClick={() => fields.remove(index)}
                />
                <InputFormField
                    name={`${answer}.text`}
                    type="text"
                    label={`Answer #${index + 1}`}
                />
            </li>
        ))}
        {error && <li className="error">{error}</li>}
    </ul>
);

const CreateAnswerOptionForChoiceField = ({ question }) => (
    <FieldArray
        name={`${question}.answers`}
        component={renderAnswers}
    />
);

CreateAnswerOptionForChoiceField.displayName = 'CreateAnswerOptionForChoiceField';

export default CreateAnswerOptionForChoiceField;
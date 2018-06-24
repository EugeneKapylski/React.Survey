import React from 'react';
import { Field, FieldArray } from 'redux-form';

//TODO: use renderField as common code
const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

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
                <Field
                    name={`${answer}.text`}
                    type="text"
                    component={renderField}
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
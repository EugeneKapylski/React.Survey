import React from 'react';
import { Field } from 'redux-form';
import { string, array } from 'prop-types'

const renderField = ({ input, label, type, meta: { touched, error } }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} type={type} placeholder={label} />
            {touched && error && <span>{error}</span>}
        </div>
    </div>
);

const InputFormField = ({ name, type = 'text', label, validate = [] }) => (
    <Field
        name={name}
        type={type}
        component={renderField}
        label={label}
        validate={validate}
    />
);

InputFormField.propTypes = {
    name: string.isRequired,
    type: string,
    label: string.isRequired,
    validate: array
}

InputFormField.displayName = 'InputFormField';

export default InputFormField;
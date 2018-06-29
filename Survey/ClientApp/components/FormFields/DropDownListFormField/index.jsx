import React from 'react';
import { Field } from 'redux-form';
import { string } from 'prop-types'

const DropDownListFormField = ({ name, data, onChange }) => {
    const onValueChanged = (field) => {
        onChange(field.currentTarget.value);
    };

    return (
        <Field
            name={name}
            component="select"
            onChange={onValueChanged}>
            {
                data.map(item => (<option key={item.key} value={item.key}>{item.value}</option>))
            }
        </Field>
    )
};

DropDownListFormField.propTypes = {
    name: string.isRequired
    //TODO: need to add
}

DropDownListFormField.displayName = 'DropDownListFormField';

export default DropDownListFormField;
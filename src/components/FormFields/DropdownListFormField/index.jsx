//TODO: need to implement:
import React from 'react';
import { Field } from 'redux-form';
import { string, array } from 'prop-types'

const renderDropdownListOptions = ({ input, data, valueField, textField, onChange }) => {
    // const handleChange = event => {
    //     this.setState({ selectedQuestionTypeId: parseInt(event.target.value, 10) });
    // }

    const buildOption = item => <option key={item.key} value={item.value}>{item.value}</option>;

    return (
        <select
            value={this.state.selectedQuestionTypeId}
            onChange={onChange}
        >
            {data.map(buildOption)}
        </select>
    );
}

const DropdownListFormField = ({ name, data, valueField, textField, onChange }) => (
    <Field
        name={name}
        component={data}
        data={questionTypeCollection}
        valueField={valueField}
        textField={textField}
        onChange={onChange}
    />
);

DropdownListFormField.propTypes = {
    name: string.isRequired,
    type: string,
    label: string.isRequired,
    validate: array
}

DropdownListFormField.displayName = 'DropdownListFormField';

export default DropdownListFormField;
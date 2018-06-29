import React from 'react';
import { Field } from 'redux-form';

const renderQuestionTypeDropdownList = ({ input, data, valueField, textField }) => {
    const handleChange = event => {
        //TODO: need to move it to parent control
        //this.setState({ selectedQuestionTypeId: parseInt(event.target.value, 10) });
    }

    const buildOption = item => <option key={item.id} value={item.id}>{item.name}</option>;

    return (
        <select
            value={this.state.selectedQuestionTypeId}
            onChange={handleChange}
        >
            {data.map(buildOption)}
        </select>
    );
}

const QuestionTypeDropDownList = () => (
    <Field
        name="questionType"
        component={renderQuestionTypeDropdownList}
        data={questionTypeCollection}
        valueField="id"
        textField="name"
    />
);

QuestionTypeDropDownList.displayName = 'QuestionTypeDropDownList';

export default QuestionTypeDropDownList;
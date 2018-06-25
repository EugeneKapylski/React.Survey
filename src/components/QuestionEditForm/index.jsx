import React, { Component } from 'react';
import { Field } from 'redux-form';
import questionTypeCollection from '../../constants/questionTypeCollection';
import questionTypes from '../../constants/questionTypes';
import CreateAnswerOptionForChoiceField from '../CreateAnswerOptionForChoiceField'
import { required } from '../../constants/validationRules';

export default class QuestionEditForm extends Component {
    state = {
        selectedQuestionTypeId: questionTypeCollection[0].id
    }
    //TODO: use renderField as common code
    renderField({ input, label, type, meta: { touched, error } }) {
        return (
            <div>
                <label>{label}</label>
                <div>
                    <input {...input} type={type} placeholder={label} />
                    {touched && error && <span>{error}</span>}
                </div>
            </div>
        );
    }

    renderQuestionTypeDropdownList = ({ input, data, valueField, textField }) => {
        const handleChange = event => {
            this.setState({ selectedQuestionTypeId: parseInt(event.target.value, 10) });
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

    render() {
        return (
            <div>
                <button
                    className="close"
                    type="button"
                    title="Remove Question"
                    aria-label="Close"
                    onClick={() => fields.remove(index)}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4>Question #{index + 1}</h4>
                <Field
                    name={`${this.props.question}.title`}
                    type="text"
                    component={this.renderField}
                    label="Question:"
                    validate={[required]}
                />

                <div>
                    <label>Question Type</label>
                    <Field
                        name="questionType"
                        component={this.renderQuestionTypeDropdownList}
                        data={questionTypeCollection}
                        valueField="id"
                        textField="name"
                    />
                </div>

                Selected Question Type: {this.state.selectedQuestionTypeId}

                {(this.state.selectedQuestionTypeId === questionTypes.singleChoice || this.state.selectedQuestionTypeId === questionTypes.multiChoice) &&
                    <CreateAnswerOptionForChoiceField question={this.props.question} />
                }
            </div>
        );
    }
}
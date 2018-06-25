import React, { Component } from 'react';
import { Field } from 'redux-form';
import questionTypeCollection from 'Constants/questionTypeCollection';
import questionTypes from 'Constants/questionTypes';
import CreateAnswerOptionForChoiceField from '../CreateAnswerOptionForChoiceField';
import InputFormField from '../FormFields/InputFormField';
import { required } from 'Constants/validationRules';
import { string, number } from 'prop-types';

export default class QuestionEditForm extends Component {
    static propTypes = {
        questionNumber: number.isRequired,
        question: string
    }

    state = {
        selectedQuestionTypeId: questionTypeCollection[0].id
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
        const {
            questionNumber,
            question,
            onDelete
        } = this.props;

        const isChoiceField = this.state.selectedQuestionTypeId === questionTypes.singleChoice
            || this.state.selectedQuestionTypeId === questionTypes.multiChoice;

        return (
            <div>
                <button
                    className="close"
                    type="button"
                    title="Remove Question"
                    aria-label="Close"
                    onClick={onDelete}
                >
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4>Question #{questionNumber}</h4>
                <InputFormField
                    name={`${question}.title`}
                    type="text"
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

                {isChoiceField &&
                    <CreateAnswerOptionForChoiceField question={question} />
                }
            </div>
        );
    }
}
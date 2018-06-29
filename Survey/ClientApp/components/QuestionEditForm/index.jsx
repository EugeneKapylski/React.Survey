import React, { Component } from 'react';
import questionTypeCollection from 'Constants/questionTypeCollection';
import questionTypes from 'Constants/questionTypes';
import CreateAnswerOptionForChoiceField from '../CreateAnswerOptionForChoiceField';
import InputFormField from '../FormFields/InputFormField';
import DropDownListFormField from '../FormFields/DropDownListFormField';
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

    onQuestionTypeChanged = (selectedValue) => {
        this.setState({ selectedQuestionTypeId: parseInt(selectedValue, 10) });
    };

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

                    <DropDownListFormField
                        name="questionType"
                        data={questionTypeCollection}
                        onChange={this.onQuestionTypeChanged}
                        selectedValue={this.state.selectedQuestionTypeId}/>
                </div>

                {isChoiceField &&
                    <CreateAnswerOptionForChoiceField question={question} />
                }
            </div>
        );
    }
}
import React, { Component } from 'react';
import { Field, FieldArray } from "redux-form";
import { Link } from 'react-router-dom';
import questionTypeCollection from '../../constants/questionTypeCollection';
import questionTypes from '../../constants/questionTypes';

export default class SurveyAddForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedQuestionTypeId: questionTypeCollection[0].id
        }
    }

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

    renderQuestionTypeDropdownList({ input, data, valueField, textField }) {
        const handleChange = event => {
            this.setState({ selectedQuestionTypeId: parseInt(event.target.value, 10) });
        }

        const buildOption = item => <option key={item.id} value={item.id}>{item.name}</option>;

        return (
            <select
                value={this.state.selectedQuestionTypeId}
                onChange={handleChange.bind(this)}
            >
                {data.map(buildOption)}
            </select>
        );
    }

    renderAnswers({ fields, meta: { error } }) {
        return (
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
                            component={this.renderField.bind(this)}
                            label={`Answer #${index + 1}`}
                        />
                    </li>
                ))}
                {error && <li className="error">{error}</li>}
            </ul>
        );
    }


    renderQuestions({ fields, meta: { error, submitFailed } }) {
        debugger;
        return (
            <div>
                <button type="button" onClick={() => fields.push({})}>Add Question</button>
                {submitFailed && error && <span>{error}</span>}
                <ul>

                    {fields.map((question, index) => (
                        <li key={index}>
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
                                name={`${question}.title`}
                                type="text"
                                component={this.renderField.bind(this)}
                                label="Question:"
                            />

                            <div>
                                <label>Question Type</label>
                                <Field
                                    name="questionType"
                                    component={this.renderQuestionTypeDropdownList.bind(this)}
                                    data={questionTypeCollection}
                                    valueField="id"
                                    textField="name" />
                            </div>

                            Selected Question Type: {this.state.selectedQuestionTypeId}
                            {(this.state.selectedQuestionTypeId === questionTypes.singleChoice || this.state.selectedQuestionTypeId === questionTypes.multiChoice) &&
                                <FieldArray
                                    name={`${question}.answers`}
                                    component={this.renderAnswers.bind(this)}
                                />
                            }
                        </li>
                    ))}
                </ul>
            </div>
        );
    }

    render() {
        return (
            <form onSubmit={this.props.handleSubmit(this.props.onSubmit)}>
                <h3>Survey Title:</h3>
                <Field
                    label="Title"
                    name="title"
                    component="input"
                />

                <h3>Questions</h3>
                <FieldArray name="questions" component={this.renderQuestions.bind(this)} />
                <button type="submit" className="btn btn-primary">Submit</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form>
        );
    }
};
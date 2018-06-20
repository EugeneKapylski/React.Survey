import React, { Component } from 'react';
import { Field, FieldArray, reduxForm } from "redux-form";
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { createSurvey } from '../../actions/surveysAction';

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
            <button type="button" onClick={() => fields.push()}>Add Answer</button>
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


const renderQuestions = ({ fields, meta: { error, submitFailed } }) => (
    <ul>
        <li>
            <button type="button" onClick={() => fields.push({})}>Add Question</button>
            {submitFailed && error && <span>{error}</span>}
        </li>
        {fields.map((question, index) => (
            <li key={index}>
                <button
                    type="button"
                    title="Remove Question"
                    onClick={() => fields.remove(index)}
                />
                <h4>Question #{index + 1}</h4>
                <Field
                    name={`${question}.title`}
                    type="text"
                    component={renderField}
                    label="Question:"
                />

                <FieldArray name={`${question}.answers`} component={renderAnswers} />
            </li>
        ))}
    </ul>
);


const onSubmit = survey => {
    //TODO: need to implement
    // this.props.createSurvey(survey, () => {
    //     this.props.history.push("/");
    // });
}

const SurveyAddForm = props => {
    return (
        <form onSubmit={onSubmit}>
            <Field
                label="Title"
                name="title"
                component="input"
            />

            <h3>Questions</h3>
            <FieldArray name="questions" component={renderQuestions} />
            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
    );
};

export default reduxForm({
    //validate, //TODO: need to implement validation
    form: "SurveyAddForm"
})(connect(null, { createSurvey })(SurveyAddForm));
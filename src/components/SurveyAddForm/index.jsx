import React from 'react';
import { Field } from "redux-form";
import { Link } from 'react-router-dom';
import QuestionsEditForm from '../QuestionsEditForm';

const SurveyAddForm = ({ handleSubmit, onSubmit }) => {
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h3>Survey Title:</h3>
            <Field
                label="Title"
                name="title"
                component="input"
            />

            <h3>Questions</h3>
            <QuestionsEditForm />

            <button type="submit" className="btn btn-primary">Submit</button>
            <Link to="/" className="btn btn-danger">Cancel</Link>
        </form>
    );
};

SurveyAddForm.displayName = 'SurveyAddForm';

export default SurveyAddForm;
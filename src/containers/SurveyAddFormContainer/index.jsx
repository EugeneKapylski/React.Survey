import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createSurvey } from '../../actions/surveysAction';
import SurveyAddForm from '../../components/SurveyAddForm';

const SurveyAddFormContainer = ({ handleSubmit, createSurvey }) => {
    const onSubmit = (survey) => {
        createSurvey(survey, () => {
            props.history.push("/");
        });
    }

    return (
        <SurveyAddForm
            onSubmit={onSubmit}
            handleSubmit={handleSubmit}
        />
    );
}

export default reduxForm({
    form: "SurveyAddForm"
})(connect(null, { createSurvey })(SurveyAddFormContainer));
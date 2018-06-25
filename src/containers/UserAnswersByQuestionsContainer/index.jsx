import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveyPassings } from '../../actions/surveyPassingsAction';
import UserAnswersByQuestions from '../../components/UserAnswersByQuestions';

const mapStateToProps = (state) => ({ surveyPassings: state.surveyPassings });

@connect(mapStateToProps, { fetchSurveyPassings })
export default class UserAnswersByQuestionsContainer extends Component {
    componentDidMount() {
        this.props.fetchSurveyPassings(this.props.surveyId);
    }

    render() {
        return (
            <UserAnswersByQuestions surveyPassings={this.props.surveyPassings} />
        );
    }
}
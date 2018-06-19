import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveyPassings } from './../../actions/surveyPassingsAction';
import UserAnswersByQuestion from './../UserAnswersByQuestion';

class UserAnswersByQuestions extends Component {
    componentDidMount() {
        this.props.fetchSurveyPassings(this.props.surveyId);
    }

    renderUserAnswersByQuestions() {
        const passingsGroupByQuestions = _.groupBy(this.props.surveyPassings, answers => answers.question.id);

        return  _.map(passingsGroupByQuestions, (questionPassings, questionNumber) => (
            <li className="list-group-item" key={questionNumber}>
                <UserAnswersByQuestion
                    questionNumber={questionNumber}
                    question={questionPassings[0].question}
                    questionPassings={questionPassings}
                />
            </li>
        ));
  }

  render() {
    return (
        <ul className="list-group user-answers-by-questions">
            {this.renderUserAnswersByQuestions()}
        </ul>
    );
  }
}

function mapStateToProps(state) {
    return { surveyPassings: state.surveyPassings };
}

export default connect(mapStateToProps, { fetchSurveyPassings })(UserAnswersByQuestions);
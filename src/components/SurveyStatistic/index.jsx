import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveyPassings } from './../../actions/surveyPassingsAction';

class SurveyStatistic extends Component {
  componentDidMount() {
    this.props.fetchSurveyPassings(this.props.surveyId);
  }

  renderSurveyStatistic() {
    const passingsGroupByQuestions = _.groupBy(this.props.surveyPassings, function(surveyPassing) {
        return surveyPassing.question.id;
    });

    return _.map(passingsGroupByQuestions, (surveyPassing, questionIndex) => (
        <div key={questionIndex}>
            <h3>Question # {questionIndex}</h3>
            <div>{surveyPassing[0].question.title}</div>
            <div>
                <h3>Answers:</h3>
                {surveyPassing.map(function (questionPassing, questionPassingIndex) {
                    return (
                        <div key={`${index}-${questionPassingIndex}`}>
                            <div>{questionPassing.user.lastName}</div>
                            <div>{questionPassing.answer.answerSettings}</div>
                        </div>
                    );
                })}
            </div>
        </div>
      )
    );
  }

  render() {
    return (
      <div className="survey-statistic">
          {this.renderSurveyStatistic()}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { surveyPassings: state.surveyPassings };
}

export default connect(mapStateToProps, { fetchSurveyPassings })(SurveyStatistic);
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSurveys } from './../../actions/surveysAction';
import SurveyListItem from './../SurveyListItem';

class SurveysIndex extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    return _.map(this.props.surveys, survey => (
        <SurveyListItem key={survey.id} survey={survey}/>
      )
    );
  }

  render() {
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/surveys/add">
            Add a new Survey
          </Link>
        </div>
        <h3>Surveys</h3>
        <ul className="list-group">
          {this.renderSurveys()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { surveys: state.surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveysIndex);
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSurveys } from './../../actions/surveysAction';
import SurveyListItem from './../SurveyListItem';

import './surveys-index.scss';

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
      <div className="survey-index">
        <div className="row survey-info-title">
          <div className="col-sm-10">
            <h1 className="surveys-list-header">Surveys List</h1>
          </div>
          <div className="col-sm-2 add-new-survey">
            <Link className="btn btn-primary btn-block" to="/surveys/add">
              Add a new Survey
            </Link>
          </div>
        </div>
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
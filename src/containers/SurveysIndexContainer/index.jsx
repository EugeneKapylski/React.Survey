import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from './../../actions/surveysAction';
import SurveysIndex from '../../components/SurveysIndex';

const mapStateToProps = state => ({ surveys: state.surveys });

@connect(mapStateToProps, { fetchSurveys })
export default class SurveysIndexContainer extends Component {
    componentDidMount() {
        this.props.fetchSurveys();
    }

    render() {
        return (
            <SurveysIndex surveys={this.props.surveys} />
        );
    }
}
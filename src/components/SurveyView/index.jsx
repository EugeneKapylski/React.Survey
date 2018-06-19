import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchSurvey, deleteSurvey } from '../../actions/surveysAction';
import SurveyStatistic from './../SurveyStatistic';
import surveyType from "./../../constants/prop-types/surveyType";

import './survey-view.scss';

const mapStateToProps = ({ surveys }, ownProps) => ({ survey: surveys[ownProps.match.params.id] });

@connect(mapStateToProps, { fetchSurvey, deleteSurvey })
export default class SurveyView extends Component {
    static propTypes = {
        survey: surveyType.isRequired
    }

    componentDidMount() {
        const { id } = this.props.match.params;
        this.props.fetchSurvey(id);
    }

    onDeleteClick() {
        const { id } = this.props.match.params;

        this.props.deleteSurvey(id, () => {
            this.props.history.push("/");
        });
    }

    render() {
        const { survey } = this.props;

        if (!survey) {
            return <div>Loading...</div>;
        }

        return (
            <div className="survey-view">
                <div className="back-to-surveys-list">
                    <Link to="/">Back To Surveys List</Link>
                </div>
                <div className="row survey-info-title">
                    <div className="col-sm-10">
                        <h1 className="surveys-list-header">{survey.title}</h1>
                    </div>
                    <div className="col-sm-2 add-new-survey">
                        <button
                            className="btn btn-danger pull-xs-right"
                            onClick={this.onDeleteClick.bind(this)}
                        >
                            Delete Survey
                        </button>
                    </div>
                </div>
                <SurveyStatistic surveyId={survey.id} />
            </div>
        );
    }
}
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurvey, deleteSurvey } from '../../actions/surveysAction';
import SurveyViewForm from '../../components/SurveyViewForm';

const mapStateToProps = ({ surveys }, ownProps) => ({ survey: surveys[ownProps.match.params.id] });

@connect(mapStateToProps, { fetchSurvey, deleteSurvey })
export default class SurveyViewFormContainer extends Component {
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

        return (
            <SurveyViewForm
                survey={survey}
                onDeleteClick={this.onDeleteClick.bind(this)}

            />
        );
    }
}
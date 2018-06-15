import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSurvey, deleteSurvey } from "../../actions/surveysAction";

class SurveyView extends Component {
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
      <div>
        <Link to="/">Back To Surveys List</Link>
        <button
          className="btn btn-danger pull-xs-right"
          onClick={this.onDeleteClick.bind(this)}
        >
          Delete Survey
        </button>
        <h3>{survey.title}</h3>
      </div>
    );
  }
}

function mapStateToProps({ surveys }, ownProps) {
  return { survey: surveys[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchSurvey, deleteSurvey })(SurveyView);
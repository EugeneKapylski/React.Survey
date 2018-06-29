import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import SurveyViewFormContainer from './containers/SurveyViewFormContainer';
import SurveyAddFormContainer from './containers/SurveyAddFormContainer';
import SurveysIndexContainer from './containers/SurveysIndexContainer';
import Footer from './components/Footer';

export default class App extends Component {
    render() {
        return (
            <div>
                <Header />
                <BrowserRouter>
                    <div>
                        <Switch>
                            <Route path="/surveys/add" component={SurveyAddFormContainer} />
                            <Route path="/surveys/:id" component={SurveyViewFormContainer} />
                            <Route path="/" component={SurveysIndexContainer} />
                        </Switch>
                    </div>
                </BrowserRouter>
                <Footer />
            </div>
        );
    }
}
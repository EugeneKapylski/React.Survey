import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import SurveyView from './SurveyView';
import SurveysIndex from './SurveysIndex';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <BrowserRouter>
          <div>
            <Switch>
              <Route path="/surveys/:id" component={SurveyView}/>
              <Route path="/" component={SurveysIndex} />
            </Switch>
          </div>
        </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}
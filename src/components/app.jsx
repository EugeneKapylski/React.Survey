import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import SurveysIndex from './SurveysIndex';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header/>
          <BrowserRouter>
            <div>
              <Switch>
                <Route path="/" component={SurveysIndex} />
              </Switch>
            </div>
          </BrowserRouter>
        <Footer/>
      </div>
    );
  }
}

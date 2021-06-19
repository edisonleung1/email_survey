import React, {Component} from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../actions';

import Header from './Header';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';
import Landing from './Landing';
import About from './About';

class App extends Component{
  componentDidMount(){
    this.props.fetchUser();
  }
  render(){
    return(
        <BrowserRouter>
          <div className="container">
            <Header />
            <Route exact path="/" component={Landing} />
            <Route exact path="/surveys" component={Dashboard} />
            <Route exact path="/surveys/new" component={SurveyNew} />
            <Route exact path="/about" component={About} />
          </div>
        </BrowserRouter>
    );
  }
}

export default connect(null,actions) (App);

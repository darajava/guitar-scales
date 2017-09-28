import React , { Component } from 'react';
import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'

import { connect } from 'react-redux';

import Header from '../../components/Header/Header';

import Exercise from '../Exercise/ExerciseContainer';
import Key from '../Key/KeyContainer';
import Scale from '../Scale/ScaleContainer';
import Arpeggio from '../Scale/ScaleContainer';
import Position from '../Position/PositionContainer';
import Practice from '../Practice/PracticeContainer';



class MainLayout extends Component {

    constructor(props) {
      super(props);
    }

    componentDidMount() {
      localStorage.clear();
    }

    render() {
      return (
      <Router>
        <div className="app">


          <main>
            
            <Switch>
              <Route path='/' component={Practice} />
            </Switch>
          </main>
        </div>
      </Router>);
    }
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps, null)(MainLayout);

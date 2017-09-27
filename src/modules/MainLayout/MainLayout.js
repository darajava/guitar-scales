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

    render() {
      return (
      <Router>
        <div className="app">


          <main>
            <header className="primary-header">
              <Header/>
            </header>
            <Switch>
              <Route path='/scale/:key/:scale/:position' component={Practice} />
              <Route path='/arpeggio/:key/:arpeggio/:position' component={Practice} />
              <Route path='/scale/:key/:scale' component={Position} />
              <Route path='/arpeggio/:key/:arpeggio' component={Position} />
              <Route path='/scale/:key' component={Scale} />
              <Route path='/arpeggio/:key' component={Arpeggio} />
              <Route path='/scale' component={Key} />
              <Route path='/arpeggio' component={Key} />
              <Route path='/' component={Exercise} />
            </Switch>
          </main>
        </div>
      </Router>);
    }
}

function mapStateToProps(state) {

}

export default connect(mapStateToProps, null)(MainLayout);

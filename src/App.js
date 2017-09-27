import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import './App.css';

import { IndexRoute } from 'react-router';

import { Switch, BrowserRouter as Router, Route, Link } from 'react-router-dom'

import MainLayout from './modules/MainLayout/MainLayout';
import Loading from './components/Loading/Loading';

import store from './redux/store';



class App extends Component {
  constructor() {
    super()
    this.state = { rehydrated: false }
  }

  componentWillMount(){
    persistStore(store, {}, () => {
      this.setState({ rehydrated: true })
    })
  }

  render() {
    if(!this.state.rehydrated){
      return <Loading />
    }
    return (
      <Provider store={store}>
        <MainLayout />
      </Provider>
    );
  }
}

export default App

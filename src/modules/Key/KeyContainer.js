import React, { Component } from 'react';
import { setSelectedKey } from './KeyState';
import { connect } from 'react-redux';

import KeyView from './KeyView';
import Loading from '../../components/Loading/Loading';

class KeyContainer extends Component {

  constructor(props) {
    super(props);
  }

  setSelectedKey(key) {
    this.props.setSelectedKey(key);
  }

  render () {
    console.log('keyprops', this.props);
    return(
      <KeyView {...this.props} keys={this.props.keys} onClick={ (key) => { this.setSelectedKey(key) } } />
    )
  }
}


function mapStateToProps(state) {
  return {
    keys: state.getIn(['keyState', 'keys']),
    selectedExercise: state.get('exerciseState').get('selectedExercise'),
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSelectedKey: (key) => {dispatch(setSelectedKey(key))},
});

export default connect(mapStateToProps, mapDispatchToProps)(KeyContainer);

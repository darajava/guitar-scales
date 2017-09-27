import React, { Component } from 'react';
import { setSelectedPosition } from './PositionState';
import { connect } from 'react-redux';

import PositionView from './PositionView';

import Loading from '../../components/Loading/Loading';

class PositionContainer extends Component {

  setSelectedPosition(position) {
    this.props.setSelectedPosition(position);
  }

  render () {
    return(
      <PositionView
        onClick={(position) => {this.setSelectedPosition(position) }}
        {...this.props} />
    )
  }
}


function mapStateToProps(state) {
  console.log('positionState', state.get('positionState'))
  return {
    positions: state.get('positionState').get('positions'),
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSelectedPosition: (position) => {dispatch(setSelectedPosition(position))},
});

export default connect(mapStateToProps, mapDispatchToProps)(PositionContainer);

import React, { Component } from 'react';
import { setSelectedScale } from './ScaleState';
import { connect } from 'react-redux';

import ScaleView from './ScaleView';
import Loading from '../../components/Loading/Loading';

class ScaleContainer extends Component {

  constructor(props) {
    super(props);
  }

  setSelectedScale(scale) {
    this.props.setSelectedScale(scale);
  }

  render () {
    console.log('scaleprops', this.props);
    return(
      <ScaleView type={this.props.selectedExercise.key} onClick={(scale) => { this.setSelectedScale(scale) }} {...this.props} scales={this.props.scales} />
    )
  }
}


function mapStateToProps(state) {
  return {
    scales: state.getIn(['scaleState', 'scales']),
    selectedExercise: state.get('exerciseState').get('selectedExercise'),
    selectedKey: state.get('keyState').get('selectedKey'),
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSelectedScale: (scale) => {dispatch(setSelectedScale(scale))},
});

export default connect(mapStateToProps, mapDispatchToProps)(ScaleContainer);

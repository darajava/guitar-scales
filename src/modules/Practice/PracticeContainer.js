import React, { Component } from 'react';
import { setSelectedPractice } from './PracticeState';
import { connect } from 'react-redux';

import PracticeView from './Views/Practice';

import Loading from '../../components/Loading/Loading';

class PracticeContainer extends Component {


  render () {
    return(
      <PracticeView
        {...this.props} />
    )
  }
}


function mapStateToProps(state) {
  console.log('practiceState', state.get('practiceState'))
  return {
    exercise: state.get('exerciseState').get('selectedExercise'),
    position: state.get('positionState').get('selectedPosition'),
    scale: state.get('scaleState').get('selectedScale'),
    keyy: state.get('keyState').get('selectedKey'),
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSelectedPractice: (practice) => {dispatch(setSelectedPractice(practice))},
});

export default connect(mapStateToProps, mapDispatchToProps)(PracticeContainer);

import React, { Component } from 'react';
import { setSelectedExercise } from './ExerciseState';
import { connect } from 'react-redux';

import ExerciseView from './ExerciseView';

import Loading from '../../components/Loading/Loading';

class ExerciseContainer extends Component {

  constructor(props) {
    super(props);

    // this.setSelectedExercise = this.bind(setSelectedExercise)
  }

  setSelectedExercise(exercise) {
    this.props.setSelectedExercise(exercise);
  }

  render () {
    console.log('exerciseprops', this.props);
    return(
      <ExerciseView onClick={(exercise) => {this.setSelectedExercise(exercise) }} {...this.props} exercises={this.props.exercises} />
    )
  }
}


function mapStateToProps(state) {
  console.log('exerciseState', state.get('exerciseState'))
  return {
    exercises: state.get('exerciseState').get('exercises'),
  }
}

const mapDispatchToProps = (dispatch) => ({
  setSelectedExercise: (exercise) => {dispatch(setSelectedExercise(exercise))},
});

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseContainer);

import React from 'react';
import { Link } from 'react-router-dom';

import CSSModules from 'react-css-modules';
import styles from './styles.css';
import Button from '../../components/Button/Button';

const Exercise = (props) => {
  console.log('exerciseprops, ', props);
  let exercises = props.exercises;
  let exerciseItems = [];


  for (let exercise in exercises) {
    if (exercises.hasOwnProperty(exercise)) {
        if (!props.small) {
          exerciseItems.push(
            <div key={exercise} onClick={() => { props.onClick(exercise) }}>
              <Button link={'/' + exercise} label={exercises[exercise].text} />
            </div>
          );
        } else {
          exerciseItems.push(
            <div key={exercise} onClick={() => { props.onClick(exercise) }}>
              <button>{exercises[exercise].text}</button>
            </div>
          );
        }
      }
    }
  

  return (
    <div>
      <div>Choose an exercise</div>
      {exerciseItems}
    </div>
  )
};

export default CSSModules(Exercise, styles) ;

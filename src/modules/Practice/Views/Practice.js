import React from 'react';
import { Link } from 'react-router-dom';

import CSSModules from 'react-css-modules';
import styles from './styles.css';
import Fretboard from './Fretboard';
import Button from '../../../components/Button/Button';

const Practice = (props) => {
  console.log('practiceprops, ', props);
  let practices = props.practices;
  let practiceItems = [];


  return (
    <div>
      <div styleName="big-name">
        {props.keyy.text} {props.scale.text} {props.exercise.text} 
      </div>
      <Fretboard keyy={props.keyy.key} scale={props.scale.pattern} tuning={null} position={props.position.key} />
      {props.children}
    </div>
  )
};

export default CSSModules(Practice, styles);
